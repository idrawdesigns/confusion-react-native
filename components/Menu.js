import React from 'react'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const Menu = props => {
  const renderMenuItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        onPress={() => props.onPress(item.id)}
        hideChevron={false}
        roundAvatar
        avatar={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
      />
    )
  }
  return (
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default Menu
