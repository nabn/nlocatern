import { View, Heading, Icon, TextInput, Row, Caption } from "@shoutem/ui"
import React from 'react'

export default Banner = ({ location }) => (
  <View style={s.container}>
    <Heading styleName="md-gutter-bottom h-center">
      nLocate 
    </Heading>
    <View style={s.search}
      styleName="horizontal v-center rounded-corners md-gutter-horizontal" >
      <TextInput
        style={s.search_box}
        styleName="flexible"
        placeholder={`Search around ${location}`} />
      <Icon name="search" />
    </View>
    <Caption styleName='h-center'>{` Current Location: ${location}`}</Caption>
  </View>
)

const s = {
  container: {
    flex: .5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  search: {
    backgroundColor: "#eee",
    margin: 10,
  },
  search_box: {
    backgroundColor: "#eee",
  }
}
