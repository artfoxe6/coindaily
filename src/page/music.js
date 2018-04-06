import React, { Component } from 'react'
import {View,Text,Image ,TouchableOpacity,Dimensions,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../utils/style'
import ImageCache from '../utils/imagecache'
import * as C from '../utils/common'
import { connect } from 'react-redux';
import Sound from 'react-native-sound'
Sound.setCategory('Playback');
class Music extends Component{

    constructor(props) {
		super(props)
		this.state = {
			data:{
				musics:[]
			},
			musics:[],
			playstatus:false
		}
		setTimeout(()=>{
			console.log(this)
		},1000)
		
	}
	componentWillMount() {
		this.fresh()
	}
	fresh() {
		let jdata = {
			title:'在得与失之间游刃有余',
			content:'看那被雪弄得支离破碎的荒原',
			ptime:'2018/03/22',
			uid:18884,
			author:'光头小七',
			musics:[
				{song:'灰色头像',singer:'许嵩',uri:'https://www.zcqy520.com/music/灰色头像.mp3',playing:false},
				{song:'半城烟沙',singer:'许嵩',uri:'https://www.zcqy520.com/music/半城烟沙.mp3',playing:false},
				{song:'素颜',singer:'许嵩',uri:'https://www.zcqy520.com/music/素颜.mp3',playing:false},
				{song:'有何不可',singer:'许嵩',uri:'https://www.zcqy520.com/music/有何不可.mp3',playing:false},
			]
		}
		// 如果当前列表中有 正在播放的uri  就标记为正在播放
		// if( this.indexthis.state.music ) {
		// 	for( var i=0;i<jdata.musics.length;i++ ) {
		// 		if( encodeURI(jdata.musics[i].uri) == this.indexthis.state.music._filename ){
		// 			jdata.musics[i].playing = true
		// 			if( this.indexthis.state.music._playing )
		// 				this.setState({playstatus:true})
						
		// 			break
		// 		}
		// 	}
		// }
		this.setState({data:jdata,musics:jdata.musics})
	}
	compare(a,b) {
		if( a.length != b.length ) {
			return false
		}
		for( var i=0;i<a.length;i++ ) {
			if( a[i].uri != b[i].uri ) {
				return false
			}
		}
		return true
	}
	checkpause(url,index) {
		// 更新数据源中的播放状态
		var tmplist = this.props.player.playlist
        for( var i=0;i<tmplist.length;i++ ) {
            if( tmplist[i].uri == url ) {
                tmplist[i].playing = true
            }else{
                tmplist[i].playing = false
            }
		}
		this.props.freshplaylist(tmplist)
		console.log(this.state.musics)
        // if( this.props.player.player ) {
        //     url = url?url:this.props.player.playlist[index].uri
        //     // 检查点击行是不是当前播放的资源
        //     if( this.props.player.player._filename == encodeURI(url) ) {
        //         if( this.props.player.palyer._playing ){
        //             this.props.player.player.pause()
        //         } else{
        //             this.props.player.player.play()
        //         }
        //         return false
        //     }
        //     // 如果和当前播放资源不一致 就立即释放
        //     this.props.player.player.release()    
        // }
        return true   
    }
    play(url=undefined,index=0) {
        // console.log("playing "+index)
		// 异常情况
        if( this.props.player.playlist.length == 0 )  return
        if( !url )  url = this.props.player.playlist[index].uri
        // 检查重复点击  暂停／播放
        if( !this.checkpause(url,index) ) return 
			this.music && delete this.music
			this.music = new Sound(encodeURI(url),'', (err)=>{
				if( !err ) {
					// console.log(this.state.musics)
					// console.log(music)
					this.props.play(this.music)
					this.music.setCurrentTime(parseInt(this.music.getDuration()*0.9))
					this.music.play((success)=>{
						if( success ) {
                            // console.log('play over')
							// 播放完成后继续播放队列中的下一首
							for( var i=0;i<this.props.player.playlist.length;i++ ) {
								if( encodeURI(this.props.player.playlist[i].uri) == this.props.player.player._filename ) {
									var j = i + 1 
									if( j == this.props.player.playlist.length )
										j = 0;
									this.play(undefined,j)
									break;
								}
							}  
						}else{
							C.tip('音频解码错误')
						}
					})
				}else{
					C.tip('播放出错了')
				}
			})
    }
	playitem(index) {
		
		if( !this.compare(this.props.player.playlist,this.state.data.musics) ) {
			console.log('false')
			if( index == -1 ) index = 0
			this.props.freshplaylist(this.state.data.musics)
		}else{
			console.log('true')
			if( index == -1 ) {
				for( var i=0;i<this.props.player.playlist.length;i++ ) {
					if( encodeURI(this.props.player.playlist[i].uri) == this.props.player.player._filename ) {
						index = i;
					}
				}
			}
		}
		setTimeout(()=>{
			this.play(undefined,index)
		},200)
	}
	
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
				<View style={{height:25,backgroundColor:style.theme.bcolor}} ></View>

				<View style={{height:50,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:style.theme.bcolor,width:'100%'}}>
					<Icon onPress={()=>this.props.navigation.goBack()} name="ios-arrow-back" style={{marginLeft:15}}   size={32}  color="#fff" />
					<Text style={{color:"#fff",fontSize:18}} >{this.state.data.title}</Text>
					<Icon name="ios-more"   size={32} style={{marginRight:15}}  color="#fff" />
				</View>
				
				<ScrollView>
					<ImageCache
						uri={"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522030166&di=0a77b2155705f8af1b8252b299f59b9d&src=http://img4.duitang.com/uploads/item/201212/14/20121214224334_wdc3v.jpeg"}
						style={{width:'100%',height: Dimensions.get('window').width*0.8}}/>
						
					<View style={{position:'absolute',top:Dimensions.get('window').width*0.8-25,right:25,width:50,height:50,zIndex:99}} >
						<TouchableOpacity onPress={()=>{this.playitem(-1)}} >
							<Image
								source={this.state.playstatus?require('../images/pause-button.png'):require('../images/play-button.png')}
								style={{width:50,height: 50}} />
						</TouchableOpacity>
					</View>

					<View style={{padding:10}}>
						<View style={{marginTop:20,flexDirection:'row'}}>
							<Text style={{color:'#999'}}>@</Text> 
							<TouchableOpacity>
								<Text style={{color:'#999',textDecorationLine:'underline'}}>{this.state.data.author}</Text>
							</TouchableOpacity>
							<Text style={{color:'#999'}}>  {this.state.data.ptime} </Text> 
						</View>
						<Text style={{fontSize:22,marginTop:20,color:'#555',textAlign:'left',lineHeight:27}}>{this.state.data.title}</Text>
						<Text style={{color:'#666',textAlign:'left',lineHeight:27,marginTop:20}}>
						{this.state.data.content}
						</Text>
					</View>
					
					{/* 分割线 */}
					<View style={{borderTopColor:'#eee',borderTopWidth:1,width:'96%',height:0,marginLeft:'2%',marginTop:10}} ></View>

					<View style={{width:'100%',justifyContent:'center',}}>
					{this.state.musics.map((val,i)=>{
						return(
							<TouchableOpacity key={i} onPress={()=>{this.playitem(i)}}>
							<View style={{height:55,width:'100%',marginTop:10,padding:5,flexDirection:'row',justifyContent:'flex-start'}} >
								<Text style={{width:55,lineHeight:35,textAlign:'center',color:val.playing?'#ff536a':'#333',fontSize:14}}>{i+1}.</Text>
								<View style={{flexDirection:'column',justifyContent:'space-around'}}>
									<Text style={{color:val.playing?'#ff536a':'#666',fontSize:15}}>{val.song}</Text>
									<Text style={{color:val.playing?'#ff536a':'#999'}}>{val.singer}</Text>
								</View>
							</View>
							</TouchableOpacity>
						)
					})}	
					<View style={{height:30}}></View>
					</View>

				</ScrollView>
            </View>
        )
        
    }

}

const mapStateToProps = (state) => ({
    player:state.player
});
const mapDispatchToProps = (dispatch) => {
    return {
		freshplaylist:(d)=>dispatch({type:'freshplaylist',data:d}),
		play:(obj)=>dispatch({type:'player',player:obj})
    }
}

export default MusicC = connect(mapStateToProps,mapDispatchToProps)(Music);
