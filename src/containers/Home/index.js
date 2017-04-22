import React, { Component } from "react"
import { View, Text, Icon, Row, Screen, ListView } from "@shoutem/ui"
import Banner from "./Banner"
import R from 'ramda'

const OPTIONS = ["Movies", "ATMs", "Petrol Pumps", "Hotels"]

const renderRow = type => (
  <View styleName="md-gutter-vertical" key={type}>
    <Row styleName="small">
      <Icon name="right-arrow" />
      <Text>{type}</Text>
    </Row>
  </View>
)

const OptionsList = _ =>
  <ListView data={OPTIONS} renderRow={renderRow} />

const log = x =>
  console.log(x)

const getLatLngString =
  R.compose(
    R.join(', '),
    R.props(['latitude', 'longitude']),
    R.prop('coords')
  )

export default class nLocateRN extends Component {

  state = { lagLng: '' }

  componentDidMount () {
    navigator.geolocation.watchPosition(
      pos => {
        this.setState({
          latLng: getLatLngString(pos)
        })
      },
      console.warn
    )
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch()
  }

  render = _ => {
    const { latLng } = this.state
    return (
      <Screen>
        <Banner location={latLng}/>
        <OptionsList />
      </Screen>
    )
  }
}
