import React,{Component} from 'react'
import {View,Text,StatusBar,TextInput,TouchableOpacity,Image} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import Tab1 from './tab1'
import Tab2 from './tab2'
// import Tab3 from './tab3'
import Tab4 from './tab4'
import Tabbar from '../utils/tabbar'
import style from '../utils/style'
import Sound from 'react-native-sound'
Sound.setCategory('Playback');
import * as C from '../utils/common'
class Index extends Component {
    constructor() {
        super()
        this.state = {
            searchInputBackColor:'rgba(255,255,255,0.1)',
            music : undefined,
            queue:[],
            musicthis:undefined
        }
        console.log(this)
    } 
    freshmusicpage(queue,status) {
        if( !this.state.musicthis ) return
        try{
            this.state.musicthis.setState({musics:queue,playstatus:status})
        }catch(error) {
            this.state.musicthis = undefined
        }
    }
    checkpause(url,index) {
        // 更新数据源中的播放状态
        for( var i=0;i<this.state.queue.length;i++ ) {
            if( this.state.queue[i].uri == url ) {
                this.state.queue[i].playing = true
            }else{
                this.state.queue[i].playing = false
            }
        }

        this.freshmusicpage(this.state.queue,true)
        if( this.state.music ) {
            url = url?url:this.state.queue[index].uri
            // 检查点击行是不是当前播放的资源
            if( this.state.music._filename == encodeURI(url) ) {
                if( this.state.music._playing ){
                    this.freshmusicpage(this.state.queue,false)
                    this.state.music.pause()
                } else{
                    this.state.music.play()
                }
                return false
            }
            // 如果和当前播放资源不一致 就立即释放
            this.state.music.release()    
        }
        return true   
    }
    play(url=undefined,index=0) {
        console.log("playing "+index)
        // 异常情况
        if( this.state.queue.length == 0 )  return

        if( !url )  url = this.state.queue[index].uri
        // 检查重复点击  暂停／播放
        if( !this.checkpause(url,index) ) return 

        this.setState({
			music:new Sound(encodeURI(url),'', (err)=>{
				if( !err ) {
                    console.log('play start')
					this.state.music.setCurrentTime(parseInt(this.state.music.getDuration()*0.3))
					this.state.music.play((success)=>{
						if( success ) {
                            console.log('play over')
							// 播放完成后继续播放队列中的下一首
							for( var i=0;i<this.state.queue.length;i++ ) {
								if( encodeURI(this.state.queue[i].uri) == this.state.music._filename ) {
									var j = i + 1 
									if( j == this.state.queue.length )
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
		})
    }
    login() {
        this.props.logining()
    }
    render() {
        const tabIconNames = ["star-o","comments-o","user-o"];
        const tabNames = ["动态","联系人","收藏"];
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <StatusBar barStyle="light-content" />
                <View style={{height:20,backgroundColor:style.theme.bcolor}} ></View>
                <View style={{height:50,backgroundColor:style.theme.bcolor,justifyContent:'flex-end',alignItems  :'center',flexDirection:'row'}} >
                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center',position:'absolute',left:'5%'}} onPress={()=>this.props.navigation.dispatch(resetAction)}>
                        <Image style={{width:30,height:30,borderRadius:15}} source={{uri: this.props.user.userhead}} />
                        <Text style={{color:'#fff',marginLeft:5,fontSize:16}}>光头小强</Text>
                    </TouchableOpacity>
                    <Icon
                        onPress={()=>{this.login()}}
                        style={{marginRight:20}}
                        name={'ios-search'}
                        size={30}
                        color={'#fff'}
                    />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Player',{indexthis:this})}>
                    <Icon
                        style={{marginRight:20}}
                        name={'ios-musical-notes'}
                        size={30}
                        color={'#fff'}
                    />
                    </TouchableOpacity>
                </View>
                <ScrollableTabView
                    ref = {(tabview)=>this.tabview = tabview}
                    locked={true}
                    tabBarPosition={'bottom'}
                    initialPage={0}
                    renderTabBar={() => <Tabbar tabNames={tabNames} tabIconNames={tabIconNames} />}
                    >
                    <Tab1 indexthis={this} tabLabel="React1"  />
                    <Tab2 indexthis={this} tabLabel="React2" navigation={this.props.navigation} />
                    {/* <Tab3 tabLabel="React3" navigation={this.props.navigation} /> */}
                    <Tab4 tabLabel="React4" navigation={this.props.navigation} />
        
                </ScrollableTabView>
            </View>
        )
        
    }
}

const mapStateToProps = (state) => ({
    user:state.user
});
const mapDispatchToProps = (dispatch) => {
    return {
        logining: () => dispatch({type:"LOGIN"})
    }
}

export default IndexC = connect(mapStateToProps,mapDispatchToProps)(Index);

