import React, { Component } from 'react'
import {View,Text,Image ,TouchableOpacity,Dimensions,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../utils/style'
import ImageCache from '../utils/imagecache'
import Sound from 'react-native-sound'
Sound.setCategory('Playback');
const {width,height} = Dimensions.get('window')
export default class Player extends Component{

    constructor(props) {
		super(props)
		this.state = {
			isplay:false,
			music:undefined,
			process:0,
			status:'ios-play',
			song:'',
			singer:'',
			duration:'',
			currenttime:''
		}
		this.indexthis = this.props.navigation.state.params.indexthis
	}
	fresh() {
		if( this.indexthis.state.music ) {
			this.setState({
				isplay:this.indexthis.state.music._playing
			})
			for( var i=0;i<this.indexthis.state.queue.length;i++ ) {
				if( this.indexthis.state.music._filename == 
					encodeURI(this.indexthis.state.queue[i].uri) ) {
					this.setState({
						song:this.indexthis.state.queue[i].song,
						singer:this.indexthis.state.queue[i].singer,
						duration:this.indexthis.state.music.getDuration()
					})
				}
			}

			setInterval(()=>{
				this.indexthis.state.music.getCurrentTime((val)=>{
					this.setState({
						process:(width*val)/this.indexthis.state.music.getDuration(),
						currenttime:val
					})
				})
			},1000)
		}
	}
	componentWillMount() {
		this.fresh()
	}
	musictime(time) {
		var minute = parseInt(time/60)
		var second = parseInt(time%60)
		minute = minute < 10 ? "0"+minute:minute
		second = second < 10 ? "0"+second:second
		return minute+":"+second
	}
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#eee'}}>
				<View style={{height:25,backgroundColor:style.theme.bcolor}} ></View>

				<View style={{height:50,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'#fff',width:'100%'}}>
					<Icon onPress={()=>this.props.navigation.goBack()} name="ios-arrow-back" style={{marginLeft:15}}   size={32}  color="#333" />
					<Text style={{color:"#666",fontSize:18}} >在得与失之间游刃有余</Text>
					<Icon name="ios-more"   size={32} style={{marginRight:15}}  color="#333" />
				</View>

				<View>
					<ImageCache
						uri={"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522030166&di=0a77b2155705f8af1b8252b299f59b9d&src=http://img4.duitang.com/uploads/item/201212/14/20121214224334_wdc3v.jpeg"}
						style={{width:'80%',height:Dimensions.get('window').width*0.8,marginLeft:'10%',marginTop:Dimensions.get('window').width*0.05}} />
					<View  style={{height:55,width:'100%',marginTop:Dimensions.get('window').width*0.05,padding:5,justifyContent:'center',alignItems:'center'}} >
						<Text style={{color:'#444',fontSize:18}}>不要用我的爱来伤害我</Text>
						<Text style={{color:'#777',marginTop:10,fontSize:16}}>韩晶</Text>
					</View>
				</View>

				<View style={{width:'100%',height:20,backgroundColor:'transparent',position:'absolute',bottom:133,left:0,flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}} >
					<Text style={{color:'#999'}}>{this.musictime(this.state.currenttime)}</Text>
					{/* <Text style={{marginLeft:5,marginRight:5}}>/</Text> */}
					<Text style={{color:'#999'}}>{this.musictime(this.state.duration)}</Text>
				</View>
				<View style={{width:'100%',height:3,backgroundColor:'#ddd',position:'absolute',bottom:130,left:0,flexDirection:'row'}} >
					<View style={{width: this.state.process,height:3,backgroundColor:'#aaa'}} ></View>
				</View>
				<View style={{backgroundColor:'#fff',width:'100%',height:130,position:'absolute',bottom:0,left:0,flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center'}} >
					<Icon onPress={()=>this.props.navigation.goBack()} name="ios-heart-outline"  size={30}  color="#ff536a" />
					<Icon onPress={()=>this.props.navigation.goBack()} name="ios-skip-backward" size={30}  color="#333" />
					<Icon onPress={()=>this.props.navigation.goBack()} name={this.state.isplay ? "ios-pause":"ios-play"}  size={60}  color="#333" />
					<Icon onPress={()=>this.props.navigation.goBack()} name="ios-skip-forward"  size={30}  color="#333" />
					<Icon onPress={()=>this.props.navigation.goBack()} name="ios-list-outline"  size={34}  color="#333" />
					
				</View>
				
            </View>
        )
        
    }

}