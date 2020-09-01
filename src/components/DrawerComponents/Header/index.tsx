import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.profile}>
        <Image
          source={{
            uri: 'https://api.adorable.io/avatars/110/',
          }}
          style={styles.photo}
        />
        <View style={styles.options}>
          <View>
            <Text style={styles.myName}>Leonardo Lira</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity>
              <Text style={styles.link}>View Profile</Text>
            </TouchableOpacity>
            <View style={styles.dot} />
            <TouchableOpacity>
              <Text style={styles.link}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <View style={styles.buttonClose}>
          <Icon name="close" size={35} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#eee',
  },
  profile: {
    flexDirection: 'row',
    padding: 20,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  options: {
    marginLeft: 20,
  },
  myName: {
    fontWeight: '500',
    fontSize: 18,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  link: {
    color: '#0073b1',
    fontWeight: '500',
    fontSize: 15,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 50,
    backgroundColor: '#000',
    marginLeft: 15,
    marginRight: 15,
  },
  buttonClose: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Header;
