import React from 'react';
import {View, StyleSheet} from 'react-native';

import Storie from '../../components/Storie';
import Feed from '../../components/Feed';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Storie />
      <Feed />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Home;
