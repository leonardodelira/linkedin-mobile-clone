import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PropsCardPerson {
  widthView: number;
}

const CardPerson: React.FC<PropsCardPerson> = ({widthView, ...props}) => {
  return (
    <View style={[styles.container, {width: widthView / 2 - 5}]}>
      <ImageBackground
        style={styles.header}
        source={{uri: props.backgroundPhoto}}>
        <View style={styles.close}>
          <Ionicons name="close" size={23} color="#FFF" />
        </View>
      </ImageBackground>
      <View style={styles.body}>
        <Image style={styles.photo} source={{uri: props.photo}} />
        <View style={styles.descriptions}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.connections}>
          {props.connections} mutual connections
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>CONNECT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 320,
    marginBottom: 10,
    borderColor: '#999',
    borderWidth: 1,
  },
  header: {
    flex: 0.5,
    backgroundColor: '#ddd',
  },
  close: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#000',
    opacity: 0.7,
    right: 8,
    top: 8,
    position: 'absolute',
  },
  body: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  photo: {
    width: 110,
    height: 110,
    top: -50,
    borderRadius: 60,
    borderColor: '#FFF',
    borderWidth: 3,
    marginBottom: 15,
    backgroundColor: 'blue',
  },
  descriptions: {
    alignItems: 'center',
    top: -50,
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    fontWeight: '300',
    marginBottom: 12,
    marginTop: 5,
  },
  button: {
    width: '100%',
    height: 45,
    borderRadius: 4,
    borderColor: '#0073b1',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 5,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0073b1',
  },
  footer: {
    padding: 13,
  },
  connections: {
    fontSize: 12,
    color: '#000',
    fontWeight: '300',
    marginBottom: 18,
    textAlign: 'center',
  },
});

export default CardPerson;
