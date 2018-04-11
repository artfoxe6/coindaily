
import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import { NavigationActions } from 'react-navigation'


// 定义一个前进页面  清空之前的路由信息
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Index'})
    ]
})
export default class Boot extends Component{
    constructor()  {
        super()
        
        setTimeout(()=>{
            this.props.navigation.dispatch(resetAction);
        },300000)
    }
    render() {

        return (
            <View onStartShouldSetResponder={()=>{this.props.navigation.dispatch(resetAction)}} style={{flex:1,backgroundColor:'#4EBAC8',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',fontSize:38,fontWeight:'bold',marginTop:-160}}>每日币读</Text>
                <Text style={{color:'#fff',fontSize:18,marginTop:20}}>我们专注于ICO项目评级</Text>
                <Text style={{color:'#fff',fontSize:12,marginTop:10,position:'absolute',bottom:10}} >www.coindaily.io</Text>
            </View>
        )
    }
}