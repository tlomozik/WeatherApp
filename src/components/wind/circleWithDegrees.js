import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const radius = 35

function CircleWithArrow({ windDegrees }) {
    // kąt w stopniach, na który ma wskazywać strzałka
    const angle = windDegrees - 90;


    // długość ramienia strzałki
    const arrowLength = 45;
    // oblicz pozycję strzałki na podstawie kąta i długości ramienia strzałki
    const arrowX = radius + arrowLength / 5 * Math.cos((angle * Math.PI) / 180);
    const arrowY = radius + arrowLength / 5 * Math.sin((angle * Math.PI) / 180);

    return (
        <View style={styles.circle}>
            <Image
                source={require('./arrow.png')}
                style={[
                    styles.arrow,
                    { transform: [{ rotate: `${angle}deg` }] },
                    { left: arrowX - arrowLength / 2, top: arrowY - arrowLength / 2 },
                ]}
            />
            <Text
                style={styles.northText}
            >
                Płn.
            </Text>
            <Text
                style={styles.southText}
            >
                Płd.
            </Text>
            <Text
                style={styles.westText}
            >
                Z
            </Text>

            <Text
                style={styles.eastText}
            >
                W
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        width: 2 * radius,
        height: 2 * radius,
        borderRadius: radius,
        borderWidth: 2,
        //  opacity: 0.8,
        borderColor: "rgba(219, 219, 219, 0.1)",
    },
    arrow: {
        zIndex: 1,
        width: 40,
        height: 40,
        position: 'absolute',
    },

    northText: {
        position: "absolute",
        top: radius - 35,
        left: radius - 20,
        width: 40,
        textAlign: "center",
        fontWeight: "bold",
        opacity: 0.8
    },
    southText: {
        position: "absolute",
        top: radius + 10,
        left: radius - 20,
        width: 40,
        textAlign: "center",
        fontWeight: "bold",
        opacity: 0.8
    },
    westText: {
        position: "absolute",
        top: radius - 10,
        left: radius - 45,
        width: 40,
        textAlign: "center",
        fontWeight: "bold",
        opacity: 0.8
    },
    eastText: {
        position: "absolute",
        top: radius - 10,
        left: radius + 2,
        width: 40,
        textAlign: "center",
        fontWeight: "bold",
        opacity: 0.8
    }
});

export default CircleWithArrow;