import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <Icon
        style={styles.icon}
        name="message-text-outline"
        size={30}
        color="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 65,
  },
  icon: {
    zIndex: 1,
    top: 5,
    right: 10,
    backgroundColor: '#0073b1',
  },
  box: {
    position: 'absolute',
    right: 23,
    top: 10,
    width: 25,
    height: 18,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#FFF',
  },
});

export default ChatHeader;
