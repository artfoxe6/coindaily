import React,{Component} from 'react'
import {View,Text,Dimensions,FlatList,Image,Alert,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../utils/style'
export default class Tab3 extends Component{
    constructor() {
        super()
        this.state = {
            data:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'],
            refreshing:false,
            page:1
        }
    }
    fresh() {
        this.setState({data:[...this.state.data,...this.state.data]})
    }
    renderRowItem(data) {
        return <View style={{position:'relative',marginTop:10,height:110,}} >
            <Image
                source={require('../data/5.jpg')}
                style={{width:100,height:100,borderRadius:10,position:'absolute',left:15,top:5}}>
            </Image>
            <View style={{marginLeft:120,flex:1,alignContent:'center',padding:10,justifyContent:'space-between',width:Dimensions.get('window').width-130}}>
                <View >
                    <Text style={{fontSize:18,color:style.theme.bcolor}}>Hello dooooom!</Text>
                    <Text style={{color:'#666',fontSize:12,height:25,marginTop:12}}>我在美国洛杉矶，有事请留言我在美国洛杉矶，有事请留言我在美国洛杉</Text>
                </View>
                <View style={{position:'absolute',left:10,bottom:10,flexDirection:'row'}}>
                    <Icon
                        style={{marginRight:10}}
                        name={'user-o'}
                        size={12}
                        color={'#666'}
                    />
                    <Text style={{color:'#666',fontWeight:'bold',marginTop:-1.5}}>19.3k</Text>
                </View>
                <TouchableOpacity style={{height:25,width:70,position:'absolute',right:10,bottom:5,alignItems:'center',backgroundColor:'rgba(0,0,0,0.05)',justifyContent:'center'}}>
                    <Text style={{color:style.theme.bcolor}}>加 入</Text>
                </TouchableOpacity>
            </View>
        </View>
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

            <View  style={{flex:1}}>
                <FlatList
                    refreshing={this.state.refreshing}
                    onRefresh={()=>this._refresh()}
                    // bounces={false}
                    data={this.state.data}
                    numColumns={1}
                    horizontal={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderRowItem}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        if( this.state.data.length <5 ){
                            return false;
                        }
                        if( this.state.page >20 ) {
                            Alert.alert(
                                '温馨提示',
                                '拉取太频繁了，请稍后再试...',
                                [
                                    {text: '知道了', onPress: () => {}},
                                ]
                            )
                            return false;
                        }
                        this.setState({page:this.state.page+1});
                        console.log(this.state.page);
                        this.fresh();
                    } }
                />
            </View>
        )
    }
}