/* This is a custom hooks
start watching for a users change in location

what parameters will take
what it return

Q:How to  disable location tracking?
A: when screen changes get the isFocued and pass it to hook
watchPositionAsync() will give us a "subscriber" value  so combination 
of these 2 technics we can disable location traching.

*/

import { useState, useEffect } from 'react';
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';



export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
 
    useEffect(() => {
        let subscriber;
        // ask permission when this component render
        const startWatching = async () => {
            try {
                await requestPermissionsAsync(); // request
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,  // 1sec=1000
                    distanceInterval: 10  // 10 meters
                },
                    callback  // update state

                ); // watch position
            } catch (e) {  //  user reject permission
                setErr(e);
            }
        };


        if (shouldTrack) {
            startWatching();
        } else {
            //stop tracking
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        // return () => {
        //     if (subscriber) {
        //       subscriber.remove();
        //     }
        //   };
    },
        [shouldTrack, callback]); // dependendies



    return [err]


}
