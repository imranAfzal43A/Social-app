import { Text, View, ActivityIndicator, Image } from "react-native";
import Mybutton from "../coomponents/button";
import Input from "../coomponents/input";
import styles from "../coomponents/style";
import app, { db } from "../config/firebaseConfig";
import { getAuth } from "firebase/auth";
import { doc, updateDoc, getDoc } from "firebase/firestore";
//import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
const UpdateProfile = (props) => {
    const [profilePic, setProfilepic] = useState(null)
    const [fName, setfName] = useState()
    const [lName, setlName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
   // const storage = getStorage();
    //const storageRef = ref(storage, profilePic);
    /*const metadata = {
        contentType: 'image/jpeg',
      };*/ 
    const auth = getAuth(app);
    const docRef = doc(db, 'users', auth.currentUser.email)
    const getData = async () => {
        try {
            const data = await getDoc(docRef)
            const { firstName, lastName, email, phone, password } = data.data()
            setfName(firstName)
            console.log(data.data())
            setlName(lastName)
            setEmail(email)
            setPhone(phone)
            setPassword(password)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getData()
    })

    const onUpdatePressed = async () => {
        try {
            setLoading(true)
            await updateDoc(docRef, data);
           // await uploadBytes(storageRef, file, metadata);
            setLoading(false)
            props.navigation.goBack()
        } catch (e) {
            setLoading(false)
            console.error("Error adding document: ", e);
        }
    }
    const GetprofilePic = async () => {
        let res;
        try {
            res = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All, allowsEditing: true,
                aspect: [4, 3], quality: 1
            })
            console.log(res)
        } catch (e) {
            console.log(e)
        }
        if (!res.canceled) {
            setProfilepic(res.assets[0].uri)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.buttontxt}>Update Profile</Text>
            <Mybutton style={styles.button} title='Image pic' onPress={() => GetprofilePic()} />
            {profilePic && <Image source={{ uri: profilePic }} style={{ width: 200, height: 200 }} />}
            <Input title=' first name' onChangeText={(value) => setfName(value)} value={fName} />
            <Input title=' last name' onChangeText={(value) => setlName(value)} value={lName} />
            <Input title=' email' onChangeText={(value) => setEmail(value)} value={email} />
            <Input title=' phone' onChangeText={(value) => setPhone(value)} value={phone} />
            <Input title=' password' secure={true} onChangeText={(value) => setPassword(value)} value={password} />
            {!loading ?
                <Mybutton style={styles.button} title='Update' onPress={async () => await onUpdatePressed()} />
                : <ActivityIndicator />
            }
        </View>
    )
}

export default UpdateProfile;