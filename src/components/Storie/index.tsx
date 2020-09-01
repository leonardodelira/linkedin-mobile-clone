import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Storie: React.FC = () => {
  const arr = [
    {
      id: 1,
      name: 'Stories',
      avatar: 'https://api.adorable.io/avatars/13',
    },
    {
      id: 2,
      name: 'Leonardo Lira',
      avatar: 'https://api.adorable.io/avatars/14',
    },
    {
      id: 3,
      name: 'José Almeida',
      avatar: 'https://api.adorable.io/avatars/15',
    },
    {
      id: 4,
      name: 'RocketSeat',
      avatar: 'https://api.adorable.io/avatars/16',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.yourStorie}>
        <View>
          <Image
            style={[styles.storie, styles.myAvatar]}
            source={{
              uri: 'https://api.adorable.io/avatars/110/',
            }}
          />
          <View style={styles.addStorie}>
            <Icon name="plus" size={29} color="#0073b1" />
          </View>
        </View>
        <Text style={styles.yourStorieText}>Your Story</Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={arr}
        renderItem={({item}) => (
          <View style={styles.storieContainer}>
            <View style={[styles.storie, styles.storieActive]}>
              <Image source={{uri: item.avatar}} style={styles.avatar} />
            </View>
            <Text style={styles.storieAuthor}>{item.name}</Text>
          </View>
        )}
        keyExtractor={({id}) => String(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  yourStorie: {
    position: 'relative',
    height: '100%',
    alignItems: 'center',
    marginLeft: 20,
  },
  yourStorieText: {
    position: 'relative',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 20,
    left: -6,
  },
  addStorie: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 0,
  },
  storie: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: '#ddd',
    marginRight: 20,
  },
  storieActive: {
    borderWidth: 2,
    borderColor: '#0073b1',
  },
  myAvatar: {
    borderWidth: 4,
    borderColor: '#fff',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  storieContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  storieAuthor: {
    position: 'relative',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 20,
    left: -10,
  },
});

export default Storie;
