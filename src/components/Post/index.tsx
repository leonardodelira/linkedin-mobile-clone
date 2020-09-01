import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

interface NewPost {
  avatar: string;
  name: string;
  profession: string;
  daysAgo: number;
  textpost: string;
  imagePost: string;
  totalComments: number;
  totalActions: number;
}

const Post: React.FC<NewPost> = (newPost: NewPost) => {
  const imageHeight = Math.round((Dimensions.get('window').width * 9) / 16);
  const imageWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: newPost.avatar}} style={styles.image} />
        <View style={styles.profile}>
          <Text style={styles.name}>{newPost.name}</Text>
          <Text style={styles.subtitle}>{newPost.profession}</Text>
          <Text style={styles.subtitle}>{newPost.daysAgo}d</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{newPost.textpost}</Text>
        <Image
          style={{height: imageHeight, width: imageWidth}}
          source={{uri: newPost.imagePost}}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.resultActions}>
          <View style={styles.likes}>
            <View style={styles.like} />
            <View style={styles.applause} />
            <Text>{newPost.totalActions}</Text>
          </View>
          <Text style={styles.comments}>{newPost.totalComments} comments</Text>
        </View>
        <View style={styles.actions}>
          <View style={styles.action}>
            <IconAnt name="like2" size={20} />
            <Text>Like</Text>
          </View>

          <View style={styles.action}>
            <Icon name="comment" size={28} />
            <Text>Comment</Text>
          </View>

          <View style={styles.action}>
            <IconMaterial name="share-outline" size={22} />
            <Text>Share</Text>
          </View>

          <View style={styles.action}>
            <IconFeather name="send" size={21} />
            <Text>Send</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
    backgroundColor: '#FFF',
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
    height: 70,
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  profile: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#4e4e4e',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 17,
    marginBottom: 15,
    marginLeft: 18,
  },
  footer: {
    flexDirection: 'column',
  },
  resultActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    padding: 15,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    width: 15,
    height: 15,
    borderRadius: 50,
    marginRight: 3,
    backgroundColor: '#0073b1',
  },
  applause: {
    width: 15,
    height: 15,
    borderRadius: 50,
    marginRight: 9,
    backgroundColor: 'green',
  },
  comments: {
    fontSize: 13,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    padding: 8,
  },
  action: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40,
  },
});

export default Post;
