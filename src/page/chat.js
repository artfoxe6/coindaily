import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions,FlatList,Image,ScrollView,KeyboardAvoidingView,TextInput,Button,StyleSheet,StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../utils/style'
export default class Chat extends Component{
    constructor() {
        super()
        this.state = {
            data:[{me:false},{me:false},{me:true},{me:false},{me:true},{me:false},{me:false}],
            sendButtonColor:'#fff',
            sendMessage:'',
            refreshing:false,
            myuid:10
        }
    }
    /**
     * 添加一行聊天对话
     * @param {fid,tid,content,stime,} data 
     */
    addLine(data) {
        // console.log(data); return;
        if( data.me ) {
            return <View style={[styles.chatLine,{justifyContent:'flex-end'}]} >
                <View style={[styles.chatLineMessage,{alignItems:'flex-end'}]}>
                    <Text style={styles.chatLineText}>擦啊</Text>
                </View>
                <Image style={styles.chatLineHead} source={require('../data/7.jpg')} />
            </View>
        }else{
            return <View style={[styles.chatLine,{justifyContent:'flex-start'}]} >
                <Image style={styles.chatLineHead} source={require('../data/7.jpg')} />
                <View style={[styles.chatLineMessage,{alignItems:'flex-start'}]}>
                    <Text style={styles.chatLineText}>深夜，我在红酒里醉透了心房。想你，念你，可在远方的你，可否一样，也如我一般沉醉在如梦的往事般？举一杯红酒，窝在沙发里，</Text>
                </View>
            </View>
        }
        
    }
    renderRowItem(data) {
        return this.addLine(data.item);
    }
    changeSendMessage(text) {
        var tmp = '#fff'
        if( text ) {
            tmp = '#ff536a'
        }
        this.setState({sendButtonColor:tmp,sendMessage:text})
    }
    _refresh() {
        this.setState({refreshing:true})
        setTimeout(function(){
            this.setState({refreshing:false})
        }.bind(this),3000)
    }
    _keyExtractor = (item, index) => index
    render() {

        return (

            <View style={{flex:1,backgroundColor:'#fff'}}>
                    <StatusBar barStyle="light-content" />
                    <View style={{height:25,backgroundColor:style.theme.bcolor}} ></View>
                    <View style={{height:55,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:style.theme.bcolor,width:'100%',paddingLeft:15}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                          <Icon onPress={()=>this.props.navigation.goBack()} name="angle-left"   size={32}  color="#fff" />
                          {/* <Text style={{color:"rgba(0,158,208,1)",fontSize:25,marginLeft:10}} >|</Text> */}
                          <Text style={{color:"#fff",fontSize:18,marginLeft:20}} >Tom Huao</Text>
                        </View>
                        <Icon onPress={()=>this.openaction()} name="ellipsis-h"   size={20} style={{position:'absolute',right:15}}  color="#fff" />
                    </View>
                    <View style={{height:(Dimensions.get('window').height-120),backgroundColor:'#fff',flex:1,}}>
                    <FlatList
                        refreshing={this.state.refreshing}
                        onRefresh={()=>this._refresh()}
                        // bounces={false}
                        data={this.state.data}
                        numColumns={1}
                        horizontal={false}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderRowItem.bind(this)}
                    />
                    </View>
                    <KeyboardAvoidingView behavior={"position"} contentContainerStyle={{backgroundColor:'#fff',width:'100%',justifyContent:'space-between',flexDirection:'row',alignItems:'center',paddingBottom:5,}}>
                        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center' }}>
                          <Icon onPress={()=>{}} name="smile-o"  size={35} style={{marginLeft:10}} color="#666" />
                          <Icon onPress={()=>{}} name="plus-o"  size={35} style={{marginLeft:10}} color="#666" />
                          <TextInput
                              ref="chatinput"
                              style={{paddingLeft:15,height:40,borderRadius:2,backgroundColor:'rgba(255,255,1,0.7)',width:(Dimensions.get('window').width-150),marginLeft:10,borderBottomWidth:1,marginTop:1,borderBottomColor:'transparent'}}
                              value={this.state.text}
                              placeholder={''}
                              underlineColorAndroid='transparent'
                              onChangeText={(text) =>this.changeSendMessage(text)}
                          />
                          
                        </View>
                        <Button title="发送" color={this.state.sendButtonColor} onPress={()=>{}}/>
                    </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chatLine:{
        flexDirection:'row',padding:10
    },
    chatLineHead:{
        height:50,width:50,borderRadius:25
    },
    chatLineMessage:{
        flex:1,justifyContent:'center',
    },
    chatLineText:{
        color:'#333',fontSize:16,margin:10,backgroundColor:'#ececec38',padding:10,marginTop:0,
    }
})