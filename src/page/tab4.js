import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions,FlatList,Image,ScrollView} from 'react-native'
import style from '../utils/style'
export default class Tab4 extends Component{
    constructor() {
        super()
        this.state = {
            data:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',]
        }
    }
    renderRowItem(data) {
        var tmp = 10;
        // if( data.index == 1 || data.index==4 ) {
        //     tmp = 4.5;
        // }
        return <View style={{position:'relative',width:Dimensions.get('window').width/2-15,height:Dimensions.get('window').width/2+30,marginLeft:tmp,marginTop:4.5}} >
            <Image
                source={require('../data/5.jpg')}
                style={{width:Dimensions.get('window').width/2-15,height:Dimensions.get('window').width/2-15}}>
            </Image>
            <Text style={{fontSize:12,paddingTop:5,paddingBottom:5,color:style.theme.bcolor}}>请检查所有网线是否都已连好请检查所有网线是否都已连好.</Text>
        </View>
    }
    _keyExtractor = (item, index) => index
    render() {

        return (

            <ScrollView style={{backgroundColor:'#fff'}} >
               <View style={{position:'relative',marginTop:10,height:140,}} >
                    <Image
                        source={require('../data/5.jpg')}
                        style={{width:130,height:130,borderRadius:10,position:'absolute',left:15,top:5}}>
                    </Image>
                    <View style={{marginLeft:150,flex:1,alignContent:'center',padding:10,justifyContent:'space-between',width:Dimensions.get('window').width-160}}>
                        <View >
                            <Text style={{fontWeight:'bold',fontSize:20,color:style.theme.bcolor}}>Tom Huao</Text>
                            <Text style={{color:'#666',fontSize:14,height:45,marginTop:15}}>我在美国洛杉矶，有事请留言我在美国洛杉矶，有事请留言我在美国洛杉...</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("UserDetail")} style={{position:'absolute',left:10,bottom:10,}}>
                            <Text style={{color:'#666'}}>更多信息 ></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:45,backgroundColor:style.theme.ocolor,marginTop:15,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
                    <TouchableOpacity >
                        <Text style={{color:style.theme.bcolor}}>上传</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{color:style.theme.bcolor}}>关注</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{color:style.theme.bcolor}}>粉丝</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{color:style.theme.bcolor}}>设置</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:45,backgroundColor:'#fff',justifyContent:'center',position:'relative',marginTop:10}} >
                    <Text style={{color:style.theme.bcolor,fontSize:20,marginLeft:10 }}>最近收听</Text>
                </View>
                <FlatList
                    bounces={false}
                    data={this.state.data}
                    numColumns={2}
                    horizontal={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderRowItem}
                />
                
            </ScrollView>
        )
    }
}