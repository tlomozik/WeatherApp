import { StyleSheet, View } from "react-native";
import React from "react";

function AirQuality() {
    return (
        <View style={styles.mainContainer} />
    );
}

export default AirQuality;

const styles = StyleSheet.create({
    mainContainer: {

        backgroundColor: 'rgba(219, 219, 219, 0.2)',
        borderRadius: 30,
        padding: 20,
        width: '100%',
        height: 100,
        marginTop: '2%',
        alignItems: "center",

    },
});
