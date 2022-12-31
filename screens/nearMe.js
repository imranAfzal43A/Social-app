import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { View } from "react-native"
import { db } from "../config/firebaseConfig";
import app from "../config/firebaseConfig";
import { getAuth } from "firebase/auth";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import styles from "../coomponents/style";
export default Nearme = () => {
    const auth = getAuth(app);
    const email = auth.currentUser.email;
    const [urLocation, setUrlocation] = useState(null)
    const [usersLoc, setUsersloc] = useState([])
    const getData = () => {
        try {
            const q = query(collection(db, "usersLocation"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const cities = [];
                querySnapshot.forEach((doc) => {
                    if (doc.id != email) {
                        cities.push(doc.data())
                    } else {
                        setUrlocation(doc.data());
                    }
                });
                setUsersloc(cities)
            });
        } catch (e) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <View>
            <MapView style={styles.map} provider={PROVIDER_GOOGLE} showsCompass={true} showsUserLocation={true} showsMyLocationButton={true} >
                {urLocation ? <Marker title="Your Location" coordinate={{ latitude: urLocation.latitude, longitude: urLocation.longitude }} /> : null}
                {usersLoc.map((i,index) => { return (<Marker key={index} title="Other User" coordinate={{ latitude: i.latitude, longitude: i.longitude }} />) })}
            </MapView>
        </View>
    )
}