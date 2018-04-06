import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Dimensions,FlatList,Image,ScrollView,TextInput,Button,StyleSheet,StatusBar,ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../utils/style'
import PhotoView from 'react-native-photo-view';   
import Modal from 'react-native-modalbox';
export default class Chat extends Component{
    constructor() {
        super()
        this.state = {
            data:['https://zcqy520.com/Data/Story/20160405/1459838501.jpg','https://zcqy520.com/Data/Story/20160405/1459836773.jpg','https://zcqy520.com/Data/Story/20170427/1493263443.jpg','https://zcqy520.com/Public/images/340.jpg'],
            currentImage:'https://zcqy520.com',
            model1:false,
            loading:-1
        }
    }
    displayImage(item) {
        this.setState({loading:9,model1:true,currentImage:item});
        setTimeout(function(){
            this.setState({loading:-1})
        }.bind(this),700)
    }
    renderRowItem(data) {
        return (
            <TouchableOpacity onPress={(index)=>this.displayImage(data.item)}>
            <Image  style={{height:(Dimensions.get('window').width-70)/3,width:(Dimensions.get('window').width-70)/3,borderRadius:1,marginRight:10,marginTop:10}} source={{uri:data.item}} /></TouchableOpacity>
        )
    }
    _keyExtractor = (item, index) => index
    render() {

        return (

            <View style={{flex:1,backgroundColor:'#fff'}}>
                    <StatusBar barStyle="light-content" />
                    <View style={{height:25,backgroundColor:style.theme.bcolor}} ></View>
                    <View style={{height:55,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:style.theme.bcolor,width:'100%'}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          <Icon onPress={()=>this.props.navigation.goBack()} name="md-arrow-back" style={{position:'absolute',left:0,width:50,height:55,lineHeight:55,textAlign:'center'}} size={22}  color="#fff" />
                          <Text style={{color:"#fff",fontSize:16}} >Tom Hua</Text>
                          <Icon onPress={()=>this.props.navigation.goBack()} name="ios-more" style={{position:'absolute',right:0,width:50,height:55,lineHeight:55,textAlign:'center'}} size={26}  color="#fff" />
                        </View>
                    </View>
                    <ScrollView style={{backgroundColor:'#fff',paddingLeft:20,paddingRight:20}}>

                        <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:0,paddingTop:10,paddingBottom:10,borderBottomWidth: 1, borderBottomColor: '#f5f5f5'}}>
                            <View style={{flex:2,flexDirection:'row'}}>
                                <Text style={{color:'#999',fontSize:14}}>性别:</Text>
                            </View>
                            <View style={{flex:4,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{color:'#666',fontSize:14}}>女</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:0,paddingTop:10,paddingBottom:10,borderBottomWidth: 1, borderBottomColor: '#f5f5f5'}}>
                            <View style={{flex:2,flexDirection:'row'}}>
                                <Text style={{color:'#999',fontSize:14}}>地区:</Text>
                            </View>
                            <View style={{flex:4,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{color:'#666',fontSize:14}}>四川成都</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:0,paddingTop:10,paddingBottom:10,borderBottomWidth: 1, borderBottomColor: '#f5f5f5'}}>
                            <View style={{flex:2,flexDirection:'row'}}>
                                <Text style={{color:'#999',fontSize:14}}>生日:</Text>
                            </View>
                            <View style={{flex:4,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{color:'#666',fontSize:14}}>1998-09-23 </Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:0,paddingTop:10,paddingBottom:10,borderBottomWidth: 1, borderBottomColor: '#f5f5f5'}}>
                            <View style={{flex:2,flexDirection:'row'}}>
                                <Text style={{color:'#999',fontSize:14}}>婚况:</Text>
                            </View>
                            <View style={{flex:4,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{color:'#666',fontSize:14}}>未婚</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:0,paddingTop:10,paddingBottom:10,borderBottomWidth: 1, borderBottomColor: '#f5f5f5'}}>
                            <View style={{flex:2,flexDirection:'row'}}>
                                <Text style={{color:'#999',fontSize:14}}>身高:</Text>
                            </View>
                            <View style={{flex:4,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{color:'#666',fontSize:14}}>160 cm</Text>
                            </View>
                        </View>
                        <View style={{paddingTop:10}}>
                            <Text style={{color:'#999',fontSize:14}}>简介:</Text>
                        </View>
                        <View style={{backgroundColor:'#fff',alignItems: 'center',flex:0,flexDirection: 'row',width:'100%',marginTop:10,justifyContent: 'flex-start',}}>
                            <Text style={{fontSize:14,color:"#666"}}>要是连一个自己爱的女人的无理取闹都接受不了，还做什么男人！男人就像一枚硬币，前面是1，后面是菊花。记忆中的完美 那些逝去的青春 当光阴堆积了尘埃 谁挥霍了谁的年华张田亮，赶紧给你们俩孩儿定个娃娃亲吧。</Text>
                        </View>
                        <View style={{paddingTop:10,marginBottom:10}}>
                            <Text style={{color:'#999',fontSize:14}}>最近照片:</Text>
                        </View>
                        <FlatList
                            bounces={false}
                            data={this.state.data}
                            numColumns={3}
                            horizontal={false}
                            keyExtractor={this._keyExtractor}
                            renderItem={this.renderRowItem.bind(this)}
                        />
                        <View style={{height:70}} ></View>
                        
                    </ScrollView>
                    <View style={{height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:10,width:Dimensions.get('window').width,position:'absolute',bottom:0,left:0,backgroundColor:'#eee'}}>
                        <TouchableOpacity style={{width:'33%',backgroundColor:'#fff'}}><Text style={{color:style.theme.bcolor,height:50,textAlign:'center',lineHeight:50}}>举报</Text></TouchableOpacity>
                        <TouchableOpacity style={{width:'34%',backgroundColor:'#fff'}}><Text style={{color:style.theme.bcolor,height:50,textAlign:'center',lineHeight:50}}>加好友</Text></TouchableOpacity>
                        <TouchableOpacity style={{width:'33%',backgroundColor:'#fff'}}><Text style={{color:style.theme.bcolor,height:50,textAlign:'center',lineHeight:50}}>关注</Text></TouchableOpacity>
                    </View>
                    <ActivityIndicator
                        size="large"
                        style={[styles.loading,{zIndex:this.state.loading}]}
                    />
                    <Modal position={"top"} swipeToClose={false} backdrop={false}  isOpen={this.state.model1} backdropColor={'red'} onClosed={ ()=>this.setState({model1:false})}>
                        <PhotoView
                            onTap = {()=>{this.setState({model1:false})}}
                            source={{uri: this.state.currentImage}}
                            minimumZoomScale={1}
                            maximumZoomScale={3}
                            androidScaleType="center"
                            // onLoad={() => this.setState({loading:-1})}
                            style={{width: '100%',backgroundColor:'red', height: Dimensions.get('window').height}} />
                    </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading:{
        height:100,width:100,position:'absolute',
        width:'100%',height:Dimensions.get('window').height,
        backgroundColor:'#000',top:0,left:0,
        flex:1,alignItems:'center',justifyContent:'center'
      }
})