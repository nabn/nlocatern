import { View, Heading, Icon, TextInput, Row, Caption } from "@shoutem/ui"
import React from 'react'

export default Banner = ({ location }) => (
  <View style={s.container}>
    <Heading styleName="md-gutter-bottom h-center"
      style={{color: '#4b77be'}} >
      nLocate 
    </Heading>
    <View style={s.search}
      styleName="horizontal v-center rounded-corners md-gutter-horizontal" >
      <TextInput
        style={s.search_box}
        styleName="flexible"
        placeholder={`Search around ${location !== 'fetching...' ? location : 'you'}`} />
      <Icon name="search"
        style={{color: '#4b77be'}} />
    </View>
    <Caption styleName='h-center'>{` Current Location: ${location}`}</Caption>
  </View>
)

const s = {
  container: {
    flex: .5,
    justifyContent: 'center',
  },
  search: {
    margin: 10,
    borderRadius: 4,
    backgroundColor: "white",
  },
  search_box: {
  }
}
