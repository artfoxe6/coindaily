
import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {connect } from 'react-redux'


class Boot extends Component{
    constructor()  {
        super()
    }
    render() {

        return (
            <View style={{flex:1,backgroundColor:'#124267',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.props.goindex()}>
                <Image source={require('../images/qq.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}
  
export default connect(null,(dispatch)=>{
    return {
        goindex: () => dispatch({type: "Navigation/NAVIGATE", routeName: "Index"})
    }
})(Boot);
