import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';


const requestLocationPermission = async () => {

    try {
        const permission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

        );
        if (permission === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Location permissions granted');
            return permission;
        }
        console.log('Location permissions not granted');
        return null;
    } catch (err) {
        console.warn(err);
        return null;
    }
};



const handleGetCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            (position) => {
                resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
                reject(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    });
}





const getCurrentLocation = async () => {

    await requestLocationPermission();
    return handleGetCurrentLocation().then((position) => {
        return position;

    }).catch((error) => {
        console.log(error);
    });



}



export default getCurrentLocation;

