import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import styles from './style';
import app, { db } from '../config/firebaseConfig';
import { getAuth } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
const MyMap = (props) => {
    const auth = getAuth(app);
    const [currentLocation, setCurrentlocation] = useState(null)
    const InsertLoc = async () => {
        try {
            await setDoc(doc(db, 'usersLocation', auth.currentUser.email), currentLocation)
        } catch (e) {
            console.log(e.message) 
        }
    }
    const getLoc = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        await Location.watchPositionAsync({ accuracy: Location.Accuracy.High, timeInterval: 1000 }, (location) => {setCurrentlocation(location.coords)})
        InsertLoc()
    }
    useEffect(() => {
       getLoc()
    }, [currentLocation]);
    return (
        <View style={styles.container}>
            <MapView style={styles.map} provider={PROVIDER_GOOGLE} showsCompass={true} showsUserLocation={true} showsMyLocationButton={true} >
                {currentLocation ? <Marker coordinate={currentLocation} title='My Position' /> : null}</MapView>

        </View>
    )
}
export default MyMap;