import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'

const Renderdish = props => {
  const dish = props.dish

  if (dish != null) {
    return (
      <Card
        featuredTitle={Dishdetail.name}
        image={require('./images/uthappizza.png')}
      >
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    )
  } else return <View />
}

const Dishdetail = props => <Renderdish dish={props.dish} />

export default Dishdetail
