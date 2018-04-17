import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,Dimensions,ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../utils/style'
class Tab4 extends Component {
  render() {
    return (
      <ScrollView style={{flex:1,backgroundColor:'#eee'}}>
		<View style={{height:140,padding:20,width:'100%',backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
			<Image
				source={require('../images/head.jpg')}
				style={{width:110,height:110,borderRadius:10}} />
			<View style={{marginLeft:15,flex:1,alignContent:'center',justifyContent:'space-between',width:Dimensions.get('window').width-160}}>
				<View >
					<Text style={{fontWeight:'bold',fontSize:20,color:style.theme.bcolor}}>币圈张大娘</Text>
					<Text style={{color:'#666',fontSize:14,height:45,marginTop:15,lineHeight:20}}>开发一个好的应用程序，需要从设计一开始就重点考虑。</Text>
				</View>
			</View>
		</View>
		<TouchableOpacity style={{marginTop:10}} >
			<View style={{backgroundColor:'#fff',alignItems: 'center',flex:0,flexDirection: 'row',height:50,width:'100%',justifyContent: 'space-between',paddingLeft:20,paddingRight:20}}>
				<Text style={{color:'#444'}}>加QQ/微信群</Text>
				<View style={{alignItems: 'center',flex:0,flexDirection: 'row',justifyContent: 'flex-end'}}>
					<Text style={{color:'#555',fontSize:14,marginRight:10}}>有钱一起赚</Text>
					<Icon  name="ios-arrow-forward-outline"  size={24}  color="#999" />
				</View>
			</View>
		</TouchableOpacity>
		<TouchableOpacity>
			<View style={{backgroundColor:'#fff',alignItems: 'center',flex:0,flexDirection: 'row',height:50,width:'100%',justifyContent: 'space-between',paddingLeft:20,paddingRight:20}}>
				<Text style={{color:'#444'}}>推送管理</Text>
				<Icon  name="ios-arrow-forward-outline"  size={24}  color="#999" />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={{marginTop:10}} >
			<View style={{backgroundColor:'#fff',alignItems: 'center',flex:0,flexDirection: 'row',height:50,width:'100%',justifyContent: 'space-between',paddingLeft:20,paddingRight:20}}>
				<Text style={{color:'#444'}}>去评分</Text>
				<Icon  name="ios-arrow-forward-outline"  size={24}  color="#aaa" />
			</View>
		</TouchableOpacity>
		<TouchableOpacity>
			<View style={{backgroundColor:'#fff',alignItems: 'center',flex:0,flexDirection: 'row',height:50,width:'100%',justifyContent: 'space-between',paddingLeft:20,paddingRight:20}}>
				<Text style={{color:'#444'}}>分享给好友</Text>
				<Icon  name="ios-arrow-forward-outline"  size={24}  color="#aaa" />
			</View>
		</TouchableOpacity>
		<TouchableOpacity >
			<View style={{backgroundColor:'#fff',alignItems: 'center',flex:0,flexDirection: 'row',height:50,width:'100%',justifyContent: 'space-between',paddingLeft:20,paddingRight:20}}>
				<Text style={{color:'#444'}}>联系我们</Text>
				<Icon  name="ios-arrow-forward-outline"  size={24}  color="#aaa" />
			</View>
		</TouchableOpacity>
		<TouchableOpacity onPress={()=>this.props.navigation.navigate('Feedback')}>
			<View style={{backgroundColor:'#fff',alignItems: 'center',flex:0,flexDirection: 'row',height:50,width:'100%',justifyContent: 'space-between',paddingLeft:20,paddingRight:20}}>
				<Text style={{color:'#444'}}>问题反馈</Text>
				<Icon  name="ios-arrow-forward-outline"  size={24}  color="#aaa" />
			</View>
		</TouchableOpacity>
		<TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={{flexDirection:'row',alignItems:'center',backgroundColor:'#EC4184',height:50,justifyContent:'center'}} >
			<Text style={{color:"#fff",fontWeight:'bold',fontSize:16}}>退出登陆</Text>
		</TouchableOpacity>
		{/* <Text style={{color:'#ccc',fontSize:14,textAlign:'center',marginTop:20}}>每日币读V2.1</Text> */}
      </ScrollView>
    );
  }
}

export default Tab4;
