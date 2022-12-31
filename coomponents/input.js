import { TextInput } from "react-native";
import styles from "./style";

const Input = (props) => {
    return (
         <TextInput placeholder={props.title} secureTextEntry={props.secure} onChangeText={props.onChangeText} style={styles.textinput}value={props.value} />
    )
}
export default Input;