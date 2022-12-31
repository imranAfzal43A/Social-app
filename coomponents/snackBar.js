import { View } from "react-native";
import { Snackbar } from "react-native-paper";
import styles from "./style";
const MysnackBar = (props) => {
    return (
        <View style={styles.snack}>
            <Snackbar
                visible={props.visible}
                onDismiss={props.onDismiss}
            >
                {props.message}
            </Snackbar>
        </View>
    );
};
export default MysnackBar;