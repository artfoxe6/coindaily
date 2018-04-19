import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions,FlatList,Image,ScrollView,TextInput,Button,StyleSheet,StatusBar,AsyncStorage,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
export default class Cmdynamic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token:0,
            content:"",
            
        }
    }
    render() {
        return (
            <View  style={{flex:1}}>
                <StatusBar barStyle="default" />
				<View style={{height:25}} ></View>
                    <View style={{height:55,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'#fff',width:'100%',borderBottomColor:'#eee',borderBottomWidth:1}}>
                        <Icon onPress={()=>this.props.navigation.goBack()} name="ios-close"   size={40}  style={{marginLeft:20}} color="#4EBAC8" />
                        <TouchableOpacity style={{backgroundColor:'#4EBAC8',width:60,height:30,justifyContent:'center',alignItems:"center",marginRight:20,borderRadius:15}}>
                        <Text style={{color:"#fff",fontSize:17}} >回复</Text>
						</TouchableOpacity>
                    </View>

					{/* <View style={{marginTop:10,padding:20,backgroundColor:'#fff'}}>
						<Text style={{fontSize:18,lineHeight:30,color:'#999',fontWeight:'bold'}}>次俗称对策户撒出生地   成绩上帝哦雌激素低哦出生地</Text>
					</View> */}

                    <View style={{flexDirection:'row',width:'100%',backgroundColor:'#fff',borderBottomColor:'#eee',borderBottomWidth:1}}>
						<Image
                    	source={require('../images/touxiang.jpg')}
                    	style={{width:40,height:40,borderRadius:20,margin:10}}/>
						<TextInput
							underlineColorAndroid={'transparent'}
							multiline={true}
							onChangeText={(text) => this.setState({content:text})}
							placeholder="添加评论..."
							style={{height:Dimensions.get('window').height/3,paddingTop:10,paddingRight:20,textAlignVertical:'top',marginTop:10,flex:1,color:'#666',}}
						/>
					</View>
					<Icon onPress={()=>this.props.navigation.goBack()} name="md-image"   size={40}  style={{textAlign:'left',marginLeft:10,marginTop:10}} color="#999" />
                    
            </View>
        )
    }
}