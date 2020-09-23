import React from 'react';
import {View, Text, TextInput, Image, Animated, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Post: React.FC = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 600 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 600 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  const openOptions = () => {
    translateY.setValue(0);

    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerPhotoProfile}
          source={{uri: 'https://api.adorable.io/avatars/110/'}}
        />
        <View>
          <Text style={styles.headerName}>Leonardo Lira</Text>
          <TouchableOpacity>
            <View style={styles.headerOption}>
              <IconFontAwesome5
                name="globe-americas"
                size={20}
                color="#919191"
              />
              <Text style={styles.headerOptionText}>Anyone</Text>
              <IconAntDesign name="caretdown" size={18} color="#919191" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.bodyText}
          multiline={true}
          placeholder="What do you want to talk about?"
        />
        <View style={styles.primaryActions}>
          <IconFeather name="camera" size={25} style={styles.optionsIcon} />
          <IconFeather name="video" size={28} style={styles.optionsIcon} />
          <IconFontAwesome name="image" size={25} style={styles.optionsIcon} />
          <TouchableOpacity onPress={openOptions}>
            <IconSimpleLineIcons
              name="options"
              size={25}
              style={styles.optionsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <Animated.View
          style={[
            styles.optionsModal,
            {
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 600],
                    outputRange: [-50, 0, 600],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.optionsTop}>
            <View style={styles.optionsTopLine} />
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionsButton}>
              <IconFontAwesome
                name="image"
                size={25}
                style={styles.optionsIcon}
              />
              <Text>Add a Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton}>
              <IconFeather name="video" size={28} style={styles.optionsIcon} />
              <Text>Take a video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton}>
              <IconEntypo name="medal" size={28} style={styles.optionsIcon} />
              <Text>Celebrate an occasion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton}>
              <IconIonicons
                name="md-document-text-outline"
                size={28}
                style={styles.optionsIcon}
              />
              <Text>Add a document</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton}>
              <IconMaterial
                name="briefcase-outline"
                size={28}
                style={styles.optionsIcon}
              />
              <Text>Share that you're hiring</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton}>
              <IconMaterial
                name="card-account-details-outline"
                size={28}
                style={styles.optionsIcon}
              />
              <Text>Find an expert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton}>
              <IconMaterial
                name="format-align-left"
                size={28}
                style={styles.optionsIcon}
              />
              <Text>Create a poll</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton}>
              <IconMaterial
                name="play-box-multiple-outline"
                size={28}
                style={styles.optionsIcon}
              />
              <Text>Share a story</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 80,
    padding: 20,
  },
  headerPhotoProfile: {
    height: 55,
    width: 55,
    borderRadius: 50,
    marginRight: 10,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  headerOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#919191',
  },
  headerOptionText: {
    marginLeft: 9,
    marginRight: 9,
    color: '#919191',
    fontWeight: '600',
  },
  body: {
    flex: 1,
    paddingTop: 20,
    padding: 20,
    marginBottom: 35,
    zIndex: 0,
  },
  bodyText: {
    fontSize: 18,
  },
  primaryActions: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
  },
  optionsModal: {
    borderTopWidth: 1,
    borderTopColor: '#999',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    top: 185,
    zIndex: 3,
  },
  optionsTop: {
    alignItems: 'center',
  },
  optionsTopLine: {
    width: 160,
    height: 5,
    marginTop: 10,
    backgroundColor: '#ddd',
  },
  options: {
    height: '100%',
    marginTop: 30,
  },
  optionsButton: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionsIcon: {
    marginLeft: 15,
    marginRight: 15,
    color: '#999',
  },
});

export default Post;
