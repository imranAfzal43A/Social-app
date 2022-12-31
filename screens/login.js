import { Text, View, ActivityIndicator } from 'react-native';
import { useState, useEffect } from "react";
import Mybutton from '../coomponents/button';
import Input from '../coomponents/input';
import styles from '../coomponents/style';
import * as Location from 'expo-location';
import { setDoc, doc } from 'firebase/firestore';
import app, { db } from '../config/firebaseConfig';
import Checkbox from 'expo-checkbox';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MysnackBar from '../coomponents/snackBar';
const Login = (props) => {
    const [isChecked, setChecked] = useState(false);
    const [currentLocation, setCurrentlocation] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showSnack,setShowsnack]=useState(false)
    const [loading, setLoading] = useState(false)
    const auth = getAuth(app);
    const onLoginPressed = async () => {
        try {
            setLoading(true)
            if (await signInWithEmailAndPassword(auth, email, password)) {
                setShowsnack(true)
                try {
                    if (isChecked) {
                        await AsyncStorage.setItem('email', email);
                        await AsyncStorage.setItem('pass', password);
                    }

                    await setDoc(doc(db, 'usersLocation', auth.currentUser.email), currentLocation)
                    console.log('location inserted')
                } catch (e) {
                    console.log(e)
                }
                setShowsnack(false)
            }
            setLoading(false)
            setPassword('')
            props.navigation.navigate('Socialo')
        } catch (e) {
            setLoading(false)
            if (email != null || password != null) {
                alert('email or password is wrong!')
            } else {
                alert('enter email and password')
            }

        }
    }
    const Me = async () => {
        let em = await AsyncStorage.getItem('email');
        let pss = await AsyncStorage.getItem('pass');
        setEmail(em);
        setPassword(pss)
    }
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setCurrentlocation(location.coords)
    }
    useEffect(() => {
        getLocation();
        Me();
    }, []);
    return (
        <View style={styles.container}>
            <MysnackBar visible={showSnack} message='Login Successfull!'  />
            <Text style={{ fontWeight: 'bold' }}>Wellcome to <Text style={{ color: 'green', fontSize: 26, fontWeight: 'bold' }}>Socialo</Text></Text>
            <Input title='email' onChangeText={(value) => setEmail(value)} value={email} />
            <Input title='password' secure={true} onChangeText={(value) => setPassword(value)} value={password} />
            <View style={{ flexDirection: 'row' }}><Checkbox
                style={{ margin: 2 }}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? 'green' : undefined}
            /><Text style={{ margin: 2 }}>remember me</Text></View>
            {!loading ?
                <Mybutton style={styles.button} name={'md-log-in'} title='login' onPress={async () => await onLoginPressed()} />
                : <ActivityIndicator />
            }
            <Mybutton style={styles.button} title='sign up' onPress={() => props.navigation.navigate('Signup')} />
            <Mybutton title='forgot password?' style={styles.forgot} onPress={() => props.navigation.navigate('Forgot')} />
        </View>
    )
}
export default Login;