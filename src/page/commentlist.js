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
                <ScrollView>
                { [1,2,3,4].map(()=>{
                    return(
                        <View style={{padding:10}}>
                            <View style={{width:'100%',backgroundColor:'#fff',alignItems:'flex-start',justifyContent:'center'}}>
                                <Image
                                source={require('../images/touxiang.jpg')}
                                style={{width:30,height:30,borderRadius:15}}/>
                                <Text style={{fontSize:12,color:"#5AB7CC",marginLeft:10}}>微微一笑:</Text>
                            </View>
                            <View >
                                <Text style={{marginLeft:40,fontSize:13,color:"#666",lineHeight:25}}>0x是一个点对点交易的开源协议，以促进以太坊区块链中erc20代币的交易。该协议旨在作为开放标准和通用构建模块，推动包括交易所功能的去中心化应用（dapps）之间的互操作性。</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:10}}>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}><Icon name={'md-text'} size={20} color={'#888'} style={{margin:5}}  /><Text style={{color:"#888"}}>9</Text></TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:15,marginTop:-3}}><Icon name={'md-thumbs-up'} size={20} color={'#888'} style={{margin:5}}  /><Text style={{color:"#888"}}>9</Text></TouchableOpacity>
                            </View>
                        </View>
                    )
                }) }
                </ScrollView>
                
            </View>
        )
    }
}