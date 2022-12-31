import { View } from "react-native";
import { useEffect } from "react";
import styles from "../coomponents/style";
import Mybutton from "../coomponents/button";
import { FAB } from "react-native-paper";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage' ;
import MyModel from "../coomponents/model";
const MyAcount = (props) => {
    const [showModel, setShowmodal] = useState(false)
    //this is for header
    useEffect(() => {
        props.navigation.setOptions({ headerRight: () => (<Mybutton name={'md-log-out'} onPress={() => setShowmodal(true)} />) });
    }, [props]);
    const Logout = async () => {
        try {
            await AsyncStorage.setItem('email', '');
            await AsyncStorage.setItem('pass', '');
            props.navigation.navigate('Login')
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: 6 }}>
            <MyModel visible={showModel} onPress={() => setShowmodal(false)} Rate={() => setShowmodal(false)} Logout={() => Logout()} />
            <Mybutton style={styles.button} title='Update profile' onPress={() => props.navigation.navigate('UpdateProfile')} />
            <Mybutton style={styles.button} title='Near You' onPress={() => props.navigation.navigate('Near You')} />
            <Mybutton style={styles.button} title='Show Maps' onPress={() => props.navigation.navigate('My Maps')} />
            <FAB icon='plus' style={{ position: 'absolute', right: 15, bottom: 20, }} onPress={() => props.navigation.navigate('CreatePost')} />
        </View>
    )
}
export default MyAcount;