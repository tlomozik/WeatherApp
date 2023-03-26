/* eslint-disable react-native/no-color-literals */
import { StyleSheet, View } from "react-native";
import React from "react";

function SunSets() {
    return (
        <View style={styles.mainContainer} />
    );
}

export default SunSets;

const styles = StyleSheet.create({
    mainContainer: {

        backgroundColor: 'rgba(219, 219, 219, 0.2)',
        borderRadius: 30,
        padding: 20,
        width: "100%",
        height: 125,
        marginTop: 5,
        alignItems: "center",

    },
});
