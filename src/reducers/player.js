
import Sound from 'react-native-sound'
Sound.setCategory('Playback');

const initState = {
	player:undefined,
	playlist:[]
}

export default player = (state=initState,action)=>{
	// console.log(action)
	switch(action.type){
		// 更新播放列表
		case "freshplaylist":
			return {
				...state,playlist:action.data
			}
		case "player":
			return {
				...state,player:action.player
			}
		// case "play":
		// 	if( state.playlist.length == 0 )  return
		// 	if( !action.url )  action.url = state.playlist[action.index].uri
		// 	// 更新数据源中的播放状态
		// 	for( var i=0;i<state.playlist.length;i++ ) {
		// 		if( state.playlist[i].uri == action.url ) {
		// 			state.playlist[i].playing = true
		// 		}else{
		// 			state.playlist[i].playing = false
		// 		}
		// 	}
		// 	// 检查重复点击  暂停／播放
		// 	if( state.player ) {
		// 		// 检查点击行是不是当前播放的资源
		// 		if( state.player._filename == encodeURI(action.url) ) {
		// 			if( state.player._playing ){
		// 				state.player.pause()
		// 			} else{
		// 				state.player.play()
		// 			}
		// 			return state
		// 		}
		// 		// 如果和当前播放资源不一致 就立即释放
		// 		state.player.release()    
		// 	}
		// 	state.player = new Sound(encodeURI(action.url),'', (err)=>{
		// 		if( !err ) {
        //             // console.log('play start')
		// 			state.player.setCurrentTime(parseInt(state.player.getDuration()*0.9))
		// 			state.player.play((success)=>{
		// 				if( success ) {
        //                     // console.log('play over')
		// 					// 播放完成后继续播放队列中的下一首
		// 					for( var i=0;i<state.playlist.length;i++ ) {
		// 						if( encodeURI(state.playlist[i].uri) == state.player._filename ) {
		// 							var j = i + 1 
		// 							if( j == state.playlist.length )
		// 								j = 0;
		// 								player(state,{type:'play',url:undefined,index:j})
		// 							break;
		// 						}
		// 					}  
		// 					return state
		// 				}else{
		// 					console.log('音频解码错误')
		// 				}
		// 			})
		// 		}else{
		// 			console.log('播放出错了')
		// 		}
		// 	})
		// 	return state
		default:
			return state
			
	}
}