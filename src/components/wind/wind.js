/* eslint-disable react-native/no-color-literals */
import { StyleSheet, View, Text } from "react-native";
import React from "react";
import CircleWithArrow from "./circleWithDegrees";

function Wind({ windDegrees, windSpeed }) {
    return (
        <View style={styles.mainContainer} >
            {windDegrees ? <CircleWithArrow windDegrees={windDegrees} /> : null}
            <Text style={styles.windSpeed}>{(windSpeed * 3.6).toFixed(1)}km/h</Text>
        </View>
    );
}

export default Wind;

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: 'rgba(219, 219, 219, 0.2)',
        borderRadius: 30,
        padding: 20,
        width: '100%',
        height: 125,
        alignItems: "center",

    },
    windSpeed: { marginTop: 6 }
});
