import { View, TextInput } from "react-native";
import Mybutton from "../coomponents/button";
import styles from "../coomponents/style";
const CreatePost = (props) => {
    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: 6 }}>
            <TextInput style={styles.createPost}/>
            <Mybutton style={styles.button} title='post' onPress={()=>props.navigation.goBack()}/>
        </View>
    )
}
export default CreatePost;