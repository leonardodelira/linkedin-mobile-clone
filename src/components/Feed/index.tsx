import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Post from '../Post';

const Feed: React.FC = () => {
  const posts = [
    {
      key: '1',
      avatar: 'https://api.adorable.io/avatars/45/',
      name: 'Lucas Lira',
      profession: 'Desenvolvedor C#',
      daysAgo: 2,
      textpost:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagePost: 'https://picsum.photos/670/380?random=1.jpg',
      totalActions: 44,
      totalComments: 13,
    },
    {
      key: '2',
      avatar: 'https://api.adorable.io/avatars/2/',
      name: 'Diego Souza',
      profession: 'Programador Front End e BackEnd',
      daysAgo: 3,
      textpost:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagePost: 'https://picsum.photos/670/400?random=2.jpg',
      totalActions: 27,
      totalComments: 4,
    },
    {
      key: '3',
      avatar: 'https://api.adorable.io/avatars/3/',
      name: 'Tierry Ray',
      profession: 'Developer FrontEnd Angular',
      daysAgo: 1,
      textpost:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      imagePost: 'https://picsum.photos/670/400?random=3.jpg',
      totalActions: 13,
      totalComments: 13,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {posts.map((post) => (
        <Post {...post} key={post.key} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 13,
  },
});

export default Feed;
