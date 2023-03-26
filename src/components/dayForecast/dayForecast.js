/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { LineChart } from "react-native-chart-kit";

function DayForecast() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer} >
                <Icon name="clockcircleo" size={25} style={styles.itemIcon} />
                <Text style={styles.mainText}>24-godzinna prognoza pogody</Text>

            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <LineChart
                    data={{
                        labels: ["1", "2", "3", "4", "5", "6"],
                        datasets: [
                            {
                                data: [
                                    1,
                                    -2,
                                    0,
                                    1,
                                    1,
                                    -2,
                                    0,
                                    1,
                                    1,
                                    -1,
                                    1,
                                    1,
                                    0,
                                    -2,
                                    3,
                                    0,
                                    0,
                                    -1,
                                    0,
                                    0,
                                    1,
                                    -2,
                                    1,
                                    2,
                                ]
                            }
                        ]
                    }}
                    width={2000}
                    height={100}


                    chartConfig={{
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: () => `rgb(0,255,127)`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {

                        },
                        propsForDots: {
                            r: "3",
                            strokeWidth: 0,

                        }
                    }}
                    xAxisLabel="1"
                    withInnerLines={false}
                    withHorizontalLines={false}
                    withVerticalLines={false}
                    withHorizontalLabels
                    withVerticalLabels={false}
                    withShadow={false}
                    bezier
                    style={{

                        //   marginVertical: 8,

                    }}
                />
            </ScrollView>

        </View>
    );
}

export default DayForecast;

const styles = StyleSheet.create({
    headerContainer: { flexDirection: "row", width: 300, marginBottom: 10 },
    mainContainer: {
        flex: 2,
        flexDirection: "column",
        backgroundColor: 'rgba(219, 219, 219, 0.2)',
        borderRadius: 30,
        padding: 20,
        width: '100%',
        height: 200,
        marginTop: '2%',
        alignItems: "center",

    },
    mainText: { fontSize: 17, fontWeight: "700", opacity: 0.6, marginLeft: 10 },
    itemIcon: { opacity: 0.56 }

});
