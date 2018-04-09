import React, { Component } from 'react';
import {  View, Text,ImageBackground,Dimensions,ScrollView,Image } from 'react-native';
const {width,height} = Dimensions.get("window")
import SwipeableViews from 'react-swipeable-views-native'
export default class Tab1 extends Component {
	constructor() {
		super()
		console.log(width+":"+height)
	}
  	render() {
		return (
			<View style={{flex:1}}>
				<SwipeableViews  style={{flex:0,width:'100%',height:200,backgroundColor:'red'}}>
					<Image source={require('../images/slide1.jpg')} style={{width:'100%',height:200}} />
					<Image source={require('../images/slide2.jpg')} style={{width:'100%',height:200}} />
					<Image source={require('../images/slide3.jpg')} style={{width:'100%',height:200}} />
					<Image source={require('../images/slide4.jpg')} style={{width:'100%',height:200}} />
				</SwipeableViews>
			</View>
		);
  	}
}
