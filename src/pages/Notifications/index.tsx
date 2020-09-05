import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

import notifications from './data';

interface PropsNotification {
  key: string;
  photo: string;
  text: string;
  isOnline: boolean;
  timeAgo: string;
}

const Section: React.FC<PropsNotification> = (notification) => {
  return (
    <View style={styles.section}>
      <View style={{position: 'relative'}}>
        <Image source={{uri: notification.photo}} style={styles.image} />
        {notification.isOnline && <View style={styles.isonline} />}
      </View>
      <View style={styles.body}>
        <Text>{notification.text}</Text>
      </View>
      <View style={styles.action}>
        <Text>...</Text>
        <Text>{notification.timeAgo}</Text>
      </View>
    </View>
  );
};

const Notifications: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.notification}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Recent</Text>
        </View>
        {notifications.map((notification) => (
          <Section {...notification} key={notification.key} />
        ))}
      </View>
      <View style={styles.notification}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Earlier</Text>
        </View>
        {notifications.map((notification) => (
          <Section {...notification} key={notification.key} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notification: {
    backgroundColor: '#eee',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  header: {
    width: '100%',
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 17,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#999',
    marginRight: 15,
  },
  isonline: {
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 20,
    right: 15,
    borderWidth: 2,
    borderColor: 'white',
  },
  body: {
    flex: 1,
    paddingRight: 10,
  },
  action: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Notifications;
