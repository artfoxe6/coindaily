import React, { Component } from 'react';
import { View, Text, StatusBar,Image,TextInput,TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/Ionicons';
class Feedback extends Component {
  render() {
	return (
	  <View style={{flex:1,backgroundColor:"#fff"}}>
	  	<StatusBar barStyle="light-content" />
		<View style={{height:25,backgroundColor:'#4EBAC8'}} ></View>
		<View style={{height:55,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',backgroundColor:'#4EBAC8',width:'100%',paddingLeft:15}}>
			<Icon onPress={()=>this.props.navigation.goBack()} name="md-arrow-back"   size={20}  color="#fff" />
			<Text style={{color:"#fff",fontSize:17,marginLeft:15}} >反馈</Text>
		</View>
		<View style={{flex:4}}>
			<TextInput
				editable = {true}
				maxLength = {40}
				multiline={true}
				underlineColorAndroid = {"transparent"}
				placeholder={"请输入内容..."}
				placeholderTextColor={"#4EBAC8"}
				style={{width:'100%',height:200,backgroundColor:"rgba(255,255,255,0.9)",padding:10,fontSize:16,lineHeight:40,textAlignVertical: 'top'}}
			/>
			<TouchableOpacity style={{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',height:50,justifyContent:'center',marginTop:0,borderColor:'#4EBAC8',borderTopWidth:1,borderBottomWidth:1}} >
				<Text style={{color:"#4EBAC8",fontWeight:'bold',fontSize:16}}>提交反馈</Text>
			</TouchableOpacity>
		</View>

			<View style={{position:'absolute',bottom:0,left:0,width:'100%',alignItems:'center'}}>
				<Text style={{color:'#777'}}>联系开发作者</Text>
				<Text style={{color:'#777',margin:10}}>hackerjieson@gmail.com</Text>
			</View>
	  </View>
	);
  }
}

export default Feedback;
