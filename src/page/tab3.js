import React, { Component } from 'react';
import {  View, Text, TouchableOpacity,Image,Dimensions,ScrollView,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../utils/style'
const data = require('../utils/data.json')	
export default class componentName extends Component {
	constructor() {
		super()
		this.state = {
            data:[],
            refreshing:true,
            rand:0
        } 
	}
	componentDidMount() {
        setTimeout(()=>{
            this.fresh()
        },1000)
    }
    fresh() {
        this.setState({data:[...this.state.data,...data],refreshing:false})
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
	renderRowItem() {
		return (
			<View style={{flexDirection:'row',backgroundColor:'#fff',padding:10}}>
                <View>
                <TouchableOpacity  >
                    <Image
                    source={require('../images/head.jpg')}
                    style={{width:45,height:45,borderRadius:8,opacity:0.8}}/>
                    </TouchableOpacity>
                    {/* <Text style={{marginTop:10}}>02/12</Text> */}
                </View>
                <View style={{width:Dimensions.get('window').width-80,marginLeft:10}}>
                    <Text style={{color:'#444',lineHeight:22}}>
                    开发一个好的应用程序，需要从设计一开始就重点考虑用户体验。
                    </Text>
                    <Text style={{color:'#bbb',marginTop:5,fontSize:12}}>发布于 2018/12/12</Text>
                    <ScrollView horizontal={true} style={{marginTop:10,flexDirection:'row'}}>
                      <TouchableOpacity >
                      <Image
                          source={require('../images/slide.jpg')}
                          style={{width:120,height:120,borderRadius:2,marginRight:10}}/> 
                      </TouchableOpacity>   
                      <TouchableOpacity >
                      <Image
                          source={require('../images/slide5.png')}
                          style={{width:120,height:120,borderRadius:2,marginRight:10}}/> 
                      </TouchableOpacity>      
                    </ScrollView>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:15,marginBottom:10}}>
                    <TouchableOpacity  style={{flexDirection:'row',alignItems:'center',}}><Icon name={'ios-heart-outline'} size={25} color={'#666'} style={{margin:5}}  /><Text style={{color:'#666'}}>99+</Text></TouchableOpacity>

                    <TouchableOpacity  style={{flexDirection:'row',alignItems:'center',}}><Icon name={'ios-text-outline'} size={25} color={'#666'} style={{margin:5,marginLeft:20}} /><Text style={{color:'#666'}}>67</Text></TouchableOpacity>
                    </View>
                  
                </View>
            </View>
		)
	}

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
		);
  	}
}
