import React from 'react';
import {View, Image, TouchableHighlight, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const ProfileHeader: React.FC = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <>
          <Image
            style={styles.profile}
            source={{uri: 'https://api.adorable.io/avatars/110/'}}
          />

          <View style={styles.hamburguer}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
        </>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 38,
    height: 38,
    left: 15,
    backgroundColor: '#eee',
    borderRadius: 50,
  },
  profile: {
    width: 38,
    height: 38,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  hamburguer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 27,
    height: 27,
    left: 20,
    bottom: -5,
    backgroundColor: '#e1e9ee',
    borderRadius: 50,
    padding: 8,
  },
  line: {
    width: 13,
    height: 2,
    backgroundColor: '#2477b5',
  },
});

export default ProfileHeader;
