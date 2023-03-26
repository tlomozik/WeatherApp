import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import * as pallete from '../styles';

function Header({ city }) {
  return (
    <View
      style={styles.mainContainer}
    >

      <Icon name="plus" size={30} color={pallete.colors.fontColor} />
      <Text style={styles.mainText}>{city}</Text>
      <Icon name="dots-three-vertical" size={25} color={pallete.colors.fontColor} />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 350,
    height: 'auto',
  },

  mainText: { color: pallete.colors.fontColor, fontSize: 20, fontWeight: '700' }

});
