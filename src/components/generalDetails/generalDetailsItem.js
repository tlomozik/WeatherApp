import { StyleSheet, Text, View } from "react-native";
import React from "react";

function GeneralDetailsItem({ title, value }) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.itemTextTitle}>{title}</Text>
            <Text style={styles.itemTextValuable}>{value}</Text>
        </View >
    );
}

export default GeneralDetailsItem;

const styles = StyleSheet.create({

    mainContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(219, 219, 219, 0.1)",

    },
    itemTextTitle: { fontSize: 14, fontWeight: "500", flex: 3, opacity: 0.8 },
    itemTextValuable: { fontSize: 15, fontWeight: "700", flex: 1 },
});
