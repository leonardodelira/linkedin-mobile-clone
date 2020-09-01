import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import Header from '../DrawerComponents/Header';
import Section from '../DrawerComponents/Section';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <Header {...props} />
        <Section title="Recent">
          <View style={styles.item}>
            <Icon name="account-group" size={30} />
            <Text style={styles.description}>Cursos do Mango</Text>
          </View>
        </Section>
        <Section title="Groups">
          <View style={styles.item}>
            <Icon name="account-group" size={30} />
            <Text style={styles.description}>Cursos do Mango</Text>
          </View>
        </Section>
        <Section title="Events">
          <TouchableOpacity>
            <View style={styles.item}>
              <Icon name="plus" size={30} color="#0073b1" />
              <Text style={[styles.description, styles.link]}>
                Create Event
              </Text>
            </View>
          </TouchableOpacity>
        </Section>
        <Section title="Followed Hashtags">
          <View style={styles.item}>
            <IconFeather name="hash" size={30} />
            <Text style={styles.description}>education</Text>
          </View>
          <View style={styles.item}>
            <IconFeather name="hash" size={30} />
            <Text style={styles.description}>technology</Text>
          </View>
        </Section>
        <Section title="Discover more" />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  description: {
    alignItems: 'center',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 5,
  },
  link: {
    color: '#0073b1',
    fontWeight: '500',
    fontSize: 15,
  },
});

export default DrawerContent;
