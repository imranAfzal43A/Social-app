import { Text, View, ActivityIndicator } from "react-native";
import Mybutton from "../coomponents/button";
import Input from "../coomponents/input";
import styles from "../coomponents/style";
import app,{db} from "../config/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc,setDoc } from "firebase/firestore"; 
import { useState } from "react";
const Signup = (props) => {
    const [fName,setfName]=useState(null)
    const [lName,setlName]=useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const auth = getAuth(app);
    const data={
        firstName: fName,
        lastName: lName,
        email:email,
        phone:phone,
        password:password
    }
    const onSignupPressed = async () => {
        try {
            setLoading(true)
            if(await createUserWithEmailAndPassword(auth, email, password)){
                const docRef=doc(db,'users',auth.currentUser.email)
                try {
                    await setDoc(docRef,data);  
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }
            }
            setLoading(false)
            alert('acount created succesfully!')
            props.navigation.goBack()
        } catch (e) {
            setLoading(false)
            alert(e)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.buttontxt}>Signup</Text>
            <Input title=' first name' onChangeText={(value)=> setfName(value)} value={fName}/>
            <Input title=' last name' onChangeText={(value)=>setlName(value)} value={lName}/>
            <Input title=' email' onChangeText={(value) => setEmail(value)} value={email}/>
            <Input title=' phone number' onChangeText={(value)=>setPhone(value)} value={phone}/>
            <Input title=' password' secure={true} onChangeText={(value) => setPassword(value)} value={password} />
            <Text>By signing up you are agree with <Text style={{ color: 'blue' }}>terms & conditions</Text></Text>
            {!loading ?
                <Mybutton style={styles.button} title='sign up' onPress={async () => await onSignupPressed()} />
                : <ActivityIndicator />
            }
        </View>
    )
}

export default Signup;