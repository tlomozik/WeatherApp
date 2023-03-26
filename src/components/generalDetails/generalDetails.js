import { StyleSheet, View } from "react-native";
import React from "react";
import GeneralDetailsItem from "./generalDetailsItem";

function GeneralDetails({ humidity, pressure, feelsLike, clouds, visibility }) {
    return (
        <View style={styles.mainContainer} >
            <GeneralDetailsItem title="Wilgotność" value={`${humidity}%`} />
            <GeneralDetailsItem title="Odczuwalnie" value={`${feelsLike}°`} />
            <GeneralDetailsItem title="Zachmurzenie" value={`${clouds}%`} />
            <GeneralDetailsItem title="Ciśnienie" value={`${pressure}hPa`} />
            <GeneralDetailsItem title="Widoczność" value={`${visibility / 1000}km`} />

        </View>
    );
}

export default GeneralDetails;

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "space-around",
        backgroundColor: 'rgba(219, 219, 219, 0.2)',
        borderRadius: 30,
        padding: 20,
        width: '54%',
        height: 255,
        alignItems: "center",

    },
});
