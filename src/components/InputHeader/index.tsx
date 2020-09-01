import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';

const InputHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="search1" size={25} color="#000" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#000"
      />
      <IconIon
        style={styles.iconQr}
        name="ios-qr-code-outline"
        size={29}
        color="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 280,
    height: 110,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    left: 5,
    height: '60%',
    backgroundColor: '#e1e9ee',
    borderRadius: 3,
    color: '#000',
    fontWeight: '400',
    fontSize: 16,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 45,
  },
  icon: {
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
  iconQr: {
    position: 'absolute',
    right: 0,
  },
});

export default InputHeader;
