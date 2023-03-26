import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import * as pallete from '../styles';

function MainTemp({ mainTemp, desc }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTempText}>{mainTemp}°C</Text>
      <Text style={styles.mainForecastText}>{desc} 1° /-4°</Text>
      <View style={styles.airQualityContainer}>
        <Icon name="leaf" size={15} style={styles.airQualityIcon} color={pallete.colors.fontColor} />
        <Text style={styles.mainAirQualityText}>IJP 31</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    marginTop: '50%',
  },

  mainTempText: { fontSize: 70, fontWeight: '600', color: pallete.fontColor },
  mainForecastText: { fontSize: 20, fontWeight: '600', color: pallete.fontColor },
  mainAirQualityText: { fontSize: 15, fontWeight: '600', color: pallete.fontColor },
  // eslint-disable-next-line react-native/no-color-literals
  airQualityContainer: {
    flexDirection: 'row',
    padding: 6,
    borderRadius: 10,
    backgroundColor: 'rgba(219, 219, 219, 0.2)',
    alignItems: 'center',
    marginTop: 15,
  },

  airQualityIcon: {
    marginRight: 5,
  }

});

export default MainTemp;
