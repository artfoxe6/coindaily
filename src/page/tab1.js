import React, { Component } from 'react';
import {  View, Text,ImageBackground,TextInput,Dimensions,ScrollView,Image } from 'react-native';

const {width,height} = Dimensions.get("window")
import Swiper from 'react-native-swiper';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import IndexSubTabbar from '../components/IndexSubTabbar'
import Crowdfunding from '../components/Crowdfunding'
const tabNames = ["正在众筹","即将开始","众筹结束"];
export default class Tab1 extends Component {
	constructor() {
		super()
	}
  	render() {
		return (
			<ScrollView>
				<View style={{flexDirection:'row'}} >
					<Swiper style={{backgroundColor:'transparent'}} height={200} width={width}>
						<Image source={require('../images/slide1.jpg')} style={{width:width,height:200}} />
						<Image source={require('../images/slide2.jpg')} style={{width:width,height:200}} />
						<Image source={require('../images/slide3.jpg')} style={{width:width,height:200}} />
						<Image source={require('../images/slide4.jpg')} style={{width:width,height:200}} />
					</Swiper>
				</View>
				<ScrollableTabView
					locked={false}
					tabBarPosition={'top'}
					initialPage={0}
					renderTabBar={() => <IndexSubTabbar tabNames={tabNames} />}
					>
					<Crowdfunding text="正在众筹" />
					<Crowdfunding text="即将开始" />
					<Crowdfunding text="众筹结束" />
				</ScrollableTabView>
			</ScrollView>

		);
  	}
}
