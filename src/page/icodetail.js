import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../utils/style'
class IcoDetail extends Component {
  render() {
    return (
		
      	<View style={{flex:1,backgroundColor:'#fff'}}>
	  		<View style={{height:20,backgroundColor:style.theme.bcolor}} ></View>
			<View style={{height:50,backgroundColor:style.theme.bcolor,justifyContent:'space-between',alignItems  :'center',flexDirection:'row',paddingRight:10}} >
				<Icon name="ios-arrow-back" style={{width:40,textAlign:'center'}}   size={30}  color="#fff" onPress={()=>this.props.navigation.goBack()} />
				<Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Ubcoin</Text>
				<Icon
					onPress={()=>{this.props.navigation.navigate("Search",{haha:'iii'})}}
					name={'ios-more'}
					style={{width:40,textAlign:'center'}}
					size={30}
					color={'#fff'}
				/>
			</View>
			<View style={{height:120,padding:20,width:'100%',backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomColor:'#eee',borderBottomWidth:1}} >
				<Image
					source={require('../images/coin2.png')}
					style={{width:100,height:100,borderRadius:10}} />
				<View style={{marginLeft:15,flex:1,alignContent:'center',justifyContent:'space-between',width:Dimensions.get('window').width-160,alignItems:'flex-start'}}>
					<View style={{marginLeft:10}}>
						<Text style={{fontWeight:'bold',fontSize:20,color:"#ff536a",marginBottom:20}}>综合评分：8.3</Text>
						<Text style={{color:'#666',fontSize:14,lineHeight:20}}>市场：87   			团队：87</Text>
						<Text style={{color:'#666',fontSize:14,lineHeight:20}}>技术：87   			营销：87</Text>
					</View>
				</View>
			</View>
			
      </View>
    );
  }
}

export default IcoDetail;
