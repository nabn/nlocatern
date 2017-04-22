import React, { Component } from "react"
import { Dimensions } from "react-native"
import {
  View, Text, Button, Card, Heading,
  Divider, NavigationBar, Icon, DropDownMenu,
  TextInput, Row, Screen, Tile,
  Image, Subtitle, Caption, ListView,
} from "@shoutem/ui"

const { width, height } = Dimensions.get("window")
const OPTIONS = ["Movies", "ATMs", "Petrol Pumps"]

const renderRow = type => (
  <View styleName="md-gutter-vertical" key={type}>
    <Row styleName="small" style={s.row}>
      <Icon name="right-arrow" />
      <Text>{type}</Text>
    </Row>
  </View>
)

const OptionsList = _ =>
  <ListView data={OPTIONS} renderRow={renderRow} />

const Banner = _ => (
  <View styleName="vertical v-center flexible">
    <Tile styleName="text-centric">
      <Heading styleName="lg-gutter-bottom"> nLocate </Heading>
      <View style={s.grey}
        styleName="horizontal v-center md-gutter-horizontal rounded-corners" >
        <Icon name="search" />
        <TextInput
          style={s.grey}
          styleName="rounded-corners sm-gutter flexible"
          placeholder="Search around your location" />
      </View>
    </Tile>
  </View>
)

export default class nLocateRN extends Component {
  render = _ => (
    <Screen>
      <Divider />
      <Banner />
      <View styleName="flexible">
        <OptionsList />
      </View>
    </Screen>
  )
}

const s = {
  grey: {
    backgroundColor: "#eee"
  }
}
