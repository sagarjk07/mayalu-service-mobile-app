import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';



const messages = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Description 4',
    image: require('../assets/mosh.jpg')
  },
]
function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
          />
        }
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({

})

export default MessagesScreen;