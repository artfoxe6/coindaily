import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions,FlatList,Image,ScrollView,TextInput,Button,StyleSheet,StatusBar,AsyncStorage,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
export default class CommentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token:0,
            content:"",
            
        }
    }
    render() {
        return (
            <View  style={{flex:1,backgroundColor:'#fff'}}>
                <StatusBar barStyle="default" />
				<View style={{height:25}} ></View>
                <View style={{height:55,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'#fff',width:'100%',borderBottomColor:'#eee',borderBottomWidth:1}}>
                    <Icon onPress={()=>this.props.navigation.goBack()} name="ios-close"   size={40}  style={{marginLeft:20}} color="#4EBAC8" />
                </View>
                <View style={{padding:10}}>
                    <View style={{flexDirection:'row',width:'100%',backgroundColor:'#fff',alignItems:'center'}}>
                        <Image
                        source={require('../images/touxiang.jpg')}
                        style={{width:40,height:40,borderRadius:20}}/>
                        <Text style={{fontSize:16,color:"#555",marginLeft:10}}>微微一笑:</Text>
                    </View>
                    <View >
                        <Text style={{marginLeft:50,fontSize:15,color:"#555",lineHeight:25}}>0x是一个点对点交易的开源协议，以促进以太坊区块链中erc20代币的交易。该协议旨在作为开放标准和通用构建模块，推动包括交易所功能的去中心化应用（dapps）之间的互操作性。</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:10}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}><Icon name={'md-thumbs-up'} size={25} color={'#000'} style={{margin:5}}  /><Text style={{color:"#000"}}>9</Text></TouchableOpacity>
                    </View>
				</View>
            </View>
        )
    }
}