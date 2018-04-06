import {Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'

function R(params) {
	let defaults = {
		msg:false,
		url:"",
		body:"",
		callback:()=>{},
		filter:true,
		begin:()=>{},
		error:()=>{},
		end:()=>{},
		prefix:"https://www.zcqy520.com/api/wap/",
		method:"POST",
		header:{'Content-Type': 'application/x-www-form-urlencoded'}
	}
	let param = {...defaults,...params};

	param.begin();
    fetch(param.prefix+param.url, {
        method: param.method,
        headers: param.header,
        body:param.body
    }).then((res)=>{
		param.end();
		let jdata = res._bodyText;
		if( !param.filter ){
			param.callback(jdata); return;
		}
		if( jdata == '500' ) {
			if( param.msg ) {
				Alert.alert(
					'请求错误', '',
					[
						{text: '确定', onPress: () => {}}
					]
				)
			}
		}else{
			if( jdata.substr(0,3) == '400' ) {
				if( param.msg ){
					Alert.alert(
						'提示信息',
						jdata.substr(4,jdata.length),
						[
							{text: '确定', onPress: () => {}}
						]
					)
				}
			}else{
				param.callback(jdata);
			}
		}
	}).catch(param.error);
}

function tip(data) {
	Alert.alert(
		'提示信息',
		data,
		[
			{text: '确定', onPress: () => {}}
		]
	)
}

function isError(jdata) {
	if( jdata ){
		if( jdata.substr(0,3) == '400' ) {
			return false;
		}else{
			return true;
		}
	}	
}
function inArray(arr,val) {
	for( var i=0;i<arr.length;i++ ) {
		if( val == arr[i] ) {
			return true;
		}
	}
	return false;
}
const baseURL = "https://www.zcqy520.com";
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({ routeName: 'Login'})
	]
})
export {tip,inArray,isError,R,baseURL,resetAction} ;