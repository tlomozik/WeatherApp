/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

function DetailedForecastButton() {
    return (
        <TouchableOpacity>
            <View style={styles.mainContainer}>
                <Text style={styles.buttonText}>Prognoza 5-dniowa </Text>
            </View>
        </TouchableOpacity>
    );
}

export default DetailedForecastButton;

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: "rgba(219, 219, 219, 0.2)",
        width: 250,
        height: 35,
        marginTop: 30,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: { fontWeight: "600", fontSize: 15 }
});
