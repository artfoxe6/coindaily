import React, { Component } from 'react';
import { View, Text, StatusBar,Image,TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { Fumi } from 'react-native-textinput-effects';
class Register extends Component {
	constructor() {
		super()
		console.log(this)
	}
  	render() {
		return (
		<View style={{flex:1,backgroundColor:"#4EBAC8"}}>
			<StatusBar barStyle="light-content" />
			<TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position:'absolute',left:0,width:50,height:55,top:20,justifyContent:"center",alignItems:"center",zIndex:99}}>
			<Icon  name="md-arrow-back" size={22}  color="#fff" />
			</TouchableOpacity>
			<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
				<Image style={{width:70,height:70,borderRadius:15,opacity:0.9}} source={require('../images/bleach.png')} />
				<Text style={{color:"#fff",fontSize:30,fontWeight:'200',marginTop:10}}>coindaily</Text>
			</View>
			<View style={{flex:2.5}}>
				<View >
					<Fumi
						style={{height:65,borderBottomColor:"#ccc",borderBottomWidth:1,}}
						label={'手机号'}
						iconClass={FontAwesomeIcon}
						iconName={'phone'}
						iconColor={'#4EBAC8'}
						iconSize={20}
						// onBlur={()=>{alert('ok')}}
						autoFocus={true}
					/>
					<Fumi
						style={{height:65,borderBottomColor:"#ccc",borderBottomWidth:1,}}
						label={'验证码'}
						iconClass={FontAwesomeIcon}
						iconName={'envelope-open'}
						iconColor={'#4EBAC8'}
						iconSize={20}
					/>
					<Fumi
						style={{height:65,borderBottomColor:"#ccc",borderBottomWidth:1,}}
						label={'密码'}
						iconClass={FontAwesomeIcon}
						iconName={'key'}
						iconColor={'#4EBAC8'}
						iconSize={20}
					/>
					
					<TouchableOpacity style={{flexDirection:'row',alignItems:'center',backgroundColor:'#EC4184',height:50,justifyContent:'center',marginTop:10}} >
						<Text style={{color:"#fff",fontWeight:'bold',fontSize:16}}>确认注册</Text>
					</TouchableOpacity>
				</View>
				
			</View>
			{/* <View style={{position:'absolute',bottom:0,left:0,width:'100%',alignItems:'center'}}>
				<Text style={{color:'#fff',margin:10}}>www.coindaily.io</Text>
			</View> */}
		</View>
	);
  }
}

export default Register;
