import React, { Component } from "react"
import { View, Text, Icon, Row, Screen, ListView } from "@shoutem/ui"
import Banner from "./Banner"
import R from 'ramda'

const GEOCODE_URI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='

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

const getLocationString = 
  R.path(['results', 0, 'address_components', 1, 'short_name'])

const getLatLngString =
  R.compose(
    R.join(','),
    R.props(['latitude', 'longitude']),
    R.prop('coords')
  )

export default class nLocateRN extends Component {

  state = { currentLocation: 'fetching...' }

  async componentDidMount () {
    navigator.geolocation.watchPosition(
      async pos => {
        const res = await fetch(GEOCODE_URI + getLatLngString(pos)).then(r => r.json())
        this.setState({
          currentLocation: getLocationString(res)
        })
      },
      this.showAlert
    )
  }

  showAlert = x => {
    console.log(x)
    alert('Unable to Get Location')
  }

  handleTextChange = e => {
    console.log(e.nativeEvent.text)
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch()
  }

  render = _ => {
    const { currentLocation } = this.state
    return (
      <Screen>
        <Banner
          handleTextChange={this.handleTextChange}
          location={currentLocation}/>
        <OptionsList />
      </Screen>
    )
  }
}
