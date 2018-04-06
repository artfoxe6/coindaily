import React,{Component} from 'react'
import {View,Text,Dimensions,FlatList,Image,Alert,TouchableOpacity} from 'react-native'
import style from '../utils/style'
export default class Tab2 extends Component{
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
        return <TouchableOpacity onPress={()=>this.props.navigation.navigate("Chat")} ><View  style={{position:'relative',marginTop:10,height:70,}} >
            <Image
                source={require('../data/5.jpg')}
                style={{width:60,height:60,borderRadius:30,position:'absolute',left:15,top:5}}>
            </Image>
            <View style={{marginLeft:90,flex:1,alignContent:'center',justifyContent:'center',width:Dimensions.get('window').width-130}}>
                <Text style={{fontSize:16,color:style.theme.bcolor}}>Time Hua</Text>
                <Text style={{color:'#666',fontSize:12,height:25,marginTop:5}}>我在美国洛杉矶，有事请留言我在美国洛杉矶，有事请留言我在美国洛杉</Text>
            </View>
            <View style={{backgroundColor:'#eee',position:'absolute',right:20,top:10,width:28,height:18,borderRadius:9,alignContent:'center',padding:4,justifyContent:'center',alignItems:'center',overflow:'hidden'}} >
                <Text style={{color:style.theme.bcolor,fontSize:11,fontWeight:'100'}}>9+</Text>
            </View>
        </View></TouchableOpacity>
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
                    // numColumns={1}
                    horizontal={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderRowItem.bind(this)}
                    // onEndReachedThreshold={0.1}
                    // onEndReached={() => {
                    //     if( this.state.data.length <5 ){
                    //         return false;
                    //     }
                    //     if( this.state.page >20 ) {
                    //         Alert.alert(
                    //             '温馨提示',
                    //             '拉取太频繁了，请稍后再试...',
                    //             [
                    //                 {text: '知道了', onPress: () => {}},
                    //             ]
                    //         )
                    //         return false;
                    //     }
                    //     this.setState({page:this.state.page+1});
                    //     console.log(this.state.page);
                    //     this.fresh();
                    // } }
                />
            </View>
        )
    }
}