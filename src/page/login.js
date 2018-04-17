import React, { Component } from 'react';
import { View, Text, StatusBar,Image,TouchableOpacity,ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi,Hoshi } from 'react-native-textinput-effects';
class Login extends Component {
  render() {
	return (
	  <View style={{flex:1,backgroundColor:"#4EBAC8"}}>
	  	<StatusBar barStyle="light-content" />
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
				/>
				<Fumi
					style={{height:65}}
					label={'密码'}
					iconClass={FontAwesomeIcon}
					iconName={'key'}
					iconColor={'#4EBAC8'}
					iconSize={20}
				/>
				<TouchableOpacity onPress={()=>this.props.navigation.navigate('Index')} style={{flexDirection:'row',alignItems:'center',backgroundColor:'#EC4184',height:50,justifyContent:'center',marginTop:10}} >
					<Text style={{color:"#fff",fontWeight:'bold',fontSize:16}}>登陆</Text>
				</TouchableOpacity>
			</View>
			<View style={{flexDirection:'row',justifyContent:'center',marginTop:20,alignItems:'center'}}>
				{/* <Text style={{color:'#333'}}>还没有账号？</Text> */}
				<TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style={{flexDirection:'row',alignItems:'center',}} >
					<Text style={{color:"#fff",fontWeight:'bold'}}>立即注册</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>this.props.navigation.navigate('Forget')} style={{flexDirection:'row',alignItems:'center',marginLeft:10}} >
					<Text style={{color:"#fff",fontWeight:'bold'}}>忘记密码</Text>
				</TouchableOpacity>
			</View>
		</View>
	  </View>
	);
  }
}

export default Login;
