import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const Mybutton = (props) => {
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <Text style={styles.buttontxt}>{props.title}</Text>
            <Ionicons
                name={props.name}
                size={24}
                color='black'
            />
        </TouchableOpacity>
    )
}

export default Mybutton;