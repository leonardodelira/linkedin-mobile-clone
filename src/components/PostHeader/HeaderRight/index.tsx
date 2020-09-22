import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderRight: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginRight: 25,
    opacity: 0.5,
  },
});

export default HeaderRight;
