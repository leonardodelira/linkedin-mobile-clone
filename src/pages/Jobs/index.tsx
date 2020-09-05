import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

import jobs from './data';

interface PropsJob {
  key: string;
  image: string;
  title: string;
  enterprise: string;
  city: string;
  timeAgo: string;
  applications: number;
}

const Job: React.FC<PropsJob> = (job) => {
  return (
    <View style={styles.body}>
      <Image source={{uri: job.image}} style={styles.image} />
      <View style={styles.description}>
        <View>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.enterprise}>{job.enterprise}</Text>
          <Text style={styles.city}>{job.city}</Text>

          <View style={styles.line} />

          <View style={styles.footer}>
            <Text style={styles.timeAgo}>{job.timeAgo}</Text>
            <View style={styles.dot} />
            <Text style={styles.application}>
              {job.applications} applicants
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.textActions}>...</Text>
        </View>
      </View>
    </View>
  );
};

const Jobs: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Based on your profile</Text>
      </View>
      {jobs.map((job) => (
        <Job {...job} key={job.key} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    height: 50,
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '400',
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
  },
  body: {
    flexDirection: 'row',
    padding: 15,
    paddingRight: 0,
  },
  description: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: '#999',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  enterprise: {
    fontSize: 16,
  },
  city: {
    fontSize: 16,
    color: '#999',
  },
  line: {
    width: 50,
    height: 0.6,
    backgroundColor: '#999',
    marginTop: 15,
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  timeAgo: {
    fontSize: 14,
    color: '#999',
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 50,
    marginRight: 7,
    marginLeft: 7,
  },
  application: {
    fontSize: 14,
    color: 'green',
  },
  textActions: {
    transform: [{rotate: '90deg'}],
    fontSize: 15,
  },
});

export default Jobs;
