/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';


function DetailedForecastItem({ day, forecast, temp, icon }) {
    return (
        <View style={styles.mainContainer}>
            <Icon name={icon} size={30} style={styles.itemIcon} />
            <Text style={[styles.itemText, { flex: 1 }]}>{day} </Text>
            <Text style={[styles.itemText, { flex: 3 }]}>{forecast} </Text>
            <Text style={styles.itemText}>{temp} </Text>
        </View>
    );
}

export default DetailedForecastItem;

const styles = StyleSheet.create({

    mainContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 20, alignItems: "center" },
    itemText: { fontSize: 17, fontWeight: "700" },
    itemIcon: { marginRight: 5 }
});
