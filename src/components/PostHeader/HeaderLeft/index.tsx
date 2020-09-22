import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderLeft: React.FC = (navigation: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="close" size={34} color="#FFF" />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Share post</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  title: {
    fontSize: 23,
    color: '#FFF',
    fontWeight: '500',
    marginLeft: 20,
  },
});

export default HeaderLeft;
