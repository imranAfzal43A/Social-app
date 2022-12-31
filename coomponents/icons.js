import { Ionicons } from "@expo/vector-icons";
const Icon = (props) => {
    return (
        <Ionicons
            name={props.name}
            size={24}
           color='black'
        />
    )
}
export default Icon;