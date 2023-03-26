import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BackgroundContainer } from '../styles';
import Header from '../components/header';
import MainTemp from '../components/mainTemp';
import DetailedTemp from '../components/detailedTemp/detailedTemp';
import DayForecast from '../components/dayForecast/dayForecast';
import Wind from '../components/wind/wind';
import SunSets from '../components/sunset/sunSets';
import GeneralDetails from '../components/generalDetails/generalDetails';
import AirQuality from '../components/airQuality/airQuality';
import getCurrentLocation from '../services/getCurrentLocation.android';
import fetchWeatherData from '../services/getForecastData';

function Home() {

  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  console.log(location);
  console.log(weatherData)

  useEffect(() => {
    getCurrentLocation().then((position) => {
      setLocation(position)
    }).catch((error) => {
      console.log(error);
    });


  }, []);

  useEffect(() => {
    if (location) {
      const getWeatherData = async () => {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      };

      getWeatherData();
    };

  }, [location]);

  return (
    <BackgroundContainer>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Header city={weatherData?.name} />
          <MainTemp mainTemp={weatherData?.main.temp.toFixed(0)}
            desc={weatherData?.weather[0].description} />
          <DetailedTemp />
          <DayForecast />
          <View style={styles.timeOfDaySunSetsContainer}>
            <View style={{ width: "43%" }}>
              <Wind windDegrees={weatherData?.wind.deg} windSpeed={weatherData?.wind.speed} />
              <SunSets />
            </View>
            <GeneralDetails humidity={weatherData?.main.humidity}
              pressure={weatherData?.main.pressure}
              feelsLike={weatherData?.main.feels_like.toFixed(0)}
              clouds={weatherData?.clouds.all}
              visibility={weatherData?.visibility}
            />
          </View>
          <AirQuality />
        </ScrollView>
      </View>
    </BackgroundContainer>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',

  },

  timeOfDaySunSetsContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: '2%', padding: 0 }
});

export default Home;
