import React, { Component } from 'react'
import {View,Text,Image ,TouchableOpacity,Dimensions,ScrollView,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../utils/style'
import * as C from '../utils/common'
const {width,height} = Dimensions.get("window")
export default class Search extends Component{

    constructor(props) {
		super(props)
		this.state = {
			text:'',
			list:[]
		}
	}
	change(text) {
		this.setState({text:text})
	}
	search() {
		this.setState({text:''})
	}
	showsearchbtn() {
		if( this.state.text != '' ) {
			return (
				<TouchableOpacity onPress={()=>this.search()}>
					<View style={{alignItems:'center',marginTop:10}}>
						<Text style={{color:style.theme.bcolor,fontSize:12}} >
							查看[{this.state.text}]的搜索结果
						</Text>
					</View>
				</TouchableOpacity>
			)
		}
	}

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
				<View style={{height:25,backgroundColor:style.theme.bcolor}} ></View>

				<View style={{height:50,flexDirection:'row',backgroundColor:style.theme.bcolor,justifyContent:'space-between',alignItems:'center'}}>
					<Icon name="ios-arrow-back" style={{width:50,textAlign:'center'}}   size={30}  color="#fff" onPress={()=>this.props.navigation.goBack()} />
					<TextInput 
						style={{width:width-100,height:50,padding:0,color:'#FFF'}}
						onChangeText={(text) => this.change(text)}
						value={this.state.text}
						placeholder={'请输入关键字'}
						autoFocus={true}
						placeholderTextColor={"#FFF"}
						underlineColorAndroid="transparent"
						onFocus={()=>{this.setState({list:[]})}} />
					<TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
						<Text style={{color:"#fff",fontSize:14,width:50,textAlign:'center',height:50,lineHeight:50}} >搜索</Text>
					</TouchableOpacity>
				</View>
				{ this.showsearchbtn() }
				
            </View>
        )
        
    }

}