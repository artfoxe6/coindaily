

import React, { Component } from 'react';
import { TextInput,Button,View, Text,TouchableOpacity,Image,StatusBar,AsyncStorage,Alert} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi,Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Forget extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
    	  	phone:'',
            passwd:'',
    	  	verify:'',
            sendsms:'发送'
        };
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#4EBAC8'}} >
                    <StatusBar barStyle="light-content" />
                    <View style={{height:25,backgroundColor:'#4EBAC8'}} ></View>
                    <View style={{height:55,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',backgroundColor:'#4EBAC8',width:'100%',paddingLeft:15}}>
                        <Icon onPress={()=>this.props.navigation.goBack()} name="md-arrow-back"   size={20}  color="#fff" />
                        {/* <Text style={{color:"#eee",fontSize:25,marginLeft:10}} >|</Text> */}
                        <Text style={{color:"#fff",fontSize:17,marginLeft:15}} >忘记密码</Text>
                    </View>

                    <View >
					<Fumi
						style={{height:65,borderBottomColor:"#eee",borderBottomWidth:1,}}
						label={'手机号'}
						iconClass={FontAwesomeIcon}
						iconName={'phone'}
						iconColor={'#4EBAC8'}
						iconSize={20}
						// onBlur={()=>{alert('ok')}}
						autoFocus={true}
					/>
					<Fumi
						style={{height:65,borderBottomColor:"#eee",borderBottomWidth:1,}}
						label={'验证码'}
						iconClass={FontAwesomeIcon}
						iconName={'envelope-open'}
						iconColor={'#4EBAC8'}
						iconSize={20}
					/>
					<Fumi
						style={{height:65,borderBottomColor:"#eee",borderBottomWidth:1,}}
						label={'新密码'}
						iconClass={FontAwesomeIcon}
						iconName={'key'}
						iconColor={'#4EBAC8'}
						iconSize={20}
					/>
					
					<TouchableOpacity style={{flexDirection:'row',alignItems:'center',backgroundColor:'#EC4184',height:50,justifyContent:'center',marginTop:10}} >
						<Text style={{color:"#fff",fontWeight:'bold',fontSize:16}}>确认更改</Text>
					</TouchableOpacity>
				</View>
            </View>
      
        );
    }
}