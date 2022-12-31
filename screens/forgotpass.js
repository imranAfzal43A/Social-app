import { Text, View, ActivityIndicator } from "react-native";
import Mybutton from "../coomponents/button";
import Input from "../coomponents/input";
import styles from "../coomponents/style";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../config/firebaseConfig";
import { useState } from "react";
const Forgot = (props) => {
    const [email, setEmail] = useState(null)
    const [loading, setLoading] = useState(false)
    const auth = getAuth(app);
    const onResetPressed = async () => {
        try {
            setLoading(true)
            await sendPasswordResetEmail(auth, email)
            setLoading(false)
            alert('email sent succesfully!')
            props.navigation.navigate('Login')
        } catch (e) {
            setLoading(false)
            if (email != null) {
                alert('user not found!')
            } else {
                alert('enter email !')
            }
        }
    }
    return (
        <View style={styles.container}>
            <Text>Reset Password</Text>
            <Input title='enter you email' onChangeText={(value) => setEmail(value)} />
            {!loading ?
                <Mybutton style={styles.button} title='reset' onPress={async () => await onResetPressed()} />
                : <ActivityIndicator />
            }
        </View>
    )

}
export default Forgot;