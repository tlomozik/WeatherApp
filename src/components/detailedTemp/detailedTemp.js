import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/AntDesign";
import DetailedForecastItem from './detailedForecastItem';
import DetailedForecastButton from './detailedForecastButton';

function DetailedTemp() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Icon name="calendar" size={25} style={styles.itemIcon} />
                <Text style={styles.mainText}>5-dniowa prognoza pogody</Text>
                <Text style={styles.mainText}>Więcej</Text>
            </View>
            <DetailedForecastItem day="Dziś" forecast="Przelotny śnieg" temp="1° /-4°" icon="snow" />
            <DetailedForecastItem day="Jutro" forecast="Pochmurno" temp="1° /-5°" icon="cloudy" />
            <DetailedForecastItem day="Wt." forecast="Pogodnie" temp="2° /-6°" icon="sunny" />
            <DetailedForecastButton />
        </View>
    );
}

export default DetailedTemp;

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    mainContainer: {
        flex: 2,
        backgroundColor: 'rgba(219, 219, 219, 0.2)',
        borderRadius: 30,
        padding: 30,
        width: '100%',
        height: 300,
        marginTop: '20%',
        alignItems: "center",

    },

    headerContainer: { flexDirection: "row", justifyContent: "space-between", width: 300, marginBottom: 10 },
    mainText: { fontSize: 17, fontWeight: "700", opacity: 0.6 },
    itemIcon: { opacity: 0.56 }
});
