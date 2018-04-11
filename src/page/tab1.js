import React, { Component } from 'react';
import {  View, Text,ImageBackground,TextInput,Dimensions,ScrollView,Image,StatusBar,ActivityIndicator } from 'react-native';
import style from '../utils/style'
const {width,height} = Dimensions.get("window")
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import IndexSubTabbar from '../components/IndexSubTabbar'
import Crowdfunding from '../components/Crowdfunding'
const tabNames = ["正在众筹","即将开始","众筹结束"];
export default class Tab1 extends Component {
	constructor() {
		super()
		this.state = {
            show:false,
		};
	}
	componentDidMount(){
        setTimeout(()=>{
            this.setState({
                show:true
            });
        },600)
	}
	renderTabView() {
		if( this.state.show ) {
			return(
				<ScrollableTabView
					locked={false}
					tabBarPosition={'top'}
					initialPage={0}
					renderTabBar={() => <IndexSubTabbar tabNames={tabNames} />}
					>
					<Crowdfunding type="1" />
					<Crowdfunding type="2" />
					<Crowdfunding type="3" />
				</ScrollableTabView>
			)
		}else{
			return (
				<View style={{justifyContent:"center",flex:1,alignItems:'center'}}>
					<ActivityIndicator
						animating={true}
						color={"#777"}
						style={{height: 80,width:80}}
						size="large"
					/>
				</View>
			)
		}
	}
	_onscroll(e) {
		console.log(e)
	}
  	render() {
		return (
			<View style={{flex:1}}>
				{this.renderTabView()}
			</View>
		);
  	}
}
