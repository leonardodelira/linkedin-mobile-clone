import React, {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  children?: ReactNode;
}

const Section: React.FC<Props> = ({title, children}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#999',
  },
  children: {
    padding: 10,
  },
});

export default Section;
