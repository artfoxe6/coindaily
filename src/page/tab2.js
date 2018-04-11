import React,{Component} from 'react'
import {View,Text,Dimensions,FlatList,Image,Alert,TouchableOpacity} from 'react-native'
import SwipeableViews from 'react-swipeable-views-native'
import ImageCache from '../utils/imagecache'
import style from '../utils/style'
const data = require('../utils/data.json')
import Icon from 'react-native-vector-icons/Ionicons';
import * as C from '../utils/common'
export default class Tab2 extends Component{
    constructor() {
        super()
        this.state = {
            data:[],
            refreshing:true,
            rand:0
        } 
        this.index = 0
    }
    componentDidMount() {
        setTimeout(()=>{
            this.fresh()
        },1000)
    }
    fresh() {
        this.setState({data:[...this.state.data,...data],refreshing:false})
    }
    changestyle(e) {
        elem = e._targetInst;
        console.log(elem)
        elem.pendingProps.style.backgroundColor='red'
        // this.setState({rand:Math.random()})
        // var props = {};  
        // while(obj) {  
        //     Object.getOwnPropertyNames(obj).forEach(function(p) {  
        //     props[p] = true;  
        //     });  
        //     obj = Object.getPrototypeOf(obj);  
        // }  
        // console.log(Object.getOwnPropertyNames(props))
        // that.currentTarget.style
    }
    gettime(index) {
        index = index%24
        var t = new Date().getHours()-index;
        if( t < 0 ) {
            t = 24 - Math.abs(t)
        }
        return t
    }
    renderRowItem(data) {
        index = data.index+1
        return(
          <View >
            <View style={{margin:20,backgroundColor:'#fff'}}>
              <View style={{marginBottom:10,padding:20,backgroundColor:'#4EBAC8'}}>
                  <Text style={{fontSize:18,lineHeight:30,color:'#fff',fontWeight:'bold'}}>{data.item.name} - {data.item.title}</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,paddingRight:10,marginTop:10,alignItems:'center'}}>
                      <Text  style={{color:"#fff"}}>
                      每日币读 | 2018/12/20
                      </Text>
                      <TouchableOpacity onPress={()=>{ C.tip('未完待续') }}>
                      {/* <Text  style={{color:"#fff"}}>分享</Text> */}
                      <Icon name={'md-share'} size={30} color={'#fff'} />
                      </TouchableOpacity>
                  </View>
              </View>
              <View style={{padding:20}}>
                  <Text style={{color:index%6==0?'#ff536a':'#555',lineHeight:25,fontSize:14}}>
                  {data.item.intro}
                  </Text>
              </View>
            </View>
          </View>
        )
    }
    _refresh() {
        this.setState({data:[],refreshing:true})
        console.log('refresh')
        // this.setState({refreshing:true})
        setTimeout(()=>{
            this.setState({data:[...data],refreshing:false})
        },1000)
    }
    _keyExtractor = (item, index) => index.toString()
    render() {

        return (
            
            <View  style={{flex:1,backgroundColor:'#eee'}}>
                <FlatList
                    refreshing={this.state.refreshing}
                    onRefresh={()=>this._refresh()}
                    // bounces={false}
                    data={this.state.data}
                    numColumns={1}
                    horizontal={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderRowItem.bind(this)}
                    onEndReachedThreshold={10}
                    onEndReached={() => {
                        this.fresh()
                    } }
                />
            </View>
        )
    }
}
