import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import CardPerson from '../../components/CardPerson';
import people from './data';

interface SectionProps {
  title: string;
}

interface FindProps {
  description: string;
}

const Section: React.FC<SectionProps> = ({title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.link}>{title}</Text>
      <EvilIcon name="chevron-right" size={40} />
    </View>
  );
};

const Find: React.FC<FindProps> = ({description}) => {
  const [widthView, setWidthView] = useState(0);
  return (
    <View style={styles.sectionFind}>
      <Text style={styles.titleFind}>{description}</Text>
      <View
        style={styles.connections}
        onLayout={(event) => {
          const {width} = event.nativeEvent.layout;
          setWidthView(width);
        }}>
        {people.map((person) => (
          <CardPerson {...person} widthView={widthView} key={person.key} />
        ))}
      </View>
    </View>
  );
};

const MyNetwork: React.FC = () => {
  return (
    <ScrollView>
      <Section title="Manage my Network" />
      <Section title="Invitations" />
      <Find description="People you may know from your school" />
      <Find description="Software Engineers you may know" />
      <Find description="People you may know from Cursos do Mango" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    height: 60,
    marginBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  link: {
    color: '#0073b1',
    fontSize: 16,
    fontWeight: '500',
  },

  sectionFind: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  connections: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  titleFind: {
    fontSize: 17,
    marginBottom: 15,
  },
});

export default MyNetwork;
