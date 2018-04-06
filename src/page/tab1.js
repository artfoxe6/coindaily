import React,{Component} from 'react'
import {View,Text,Dimensions,Image,Alert,TouchableOpacity,StyleSheet} from 'react-native'
import SwipeableViews from 'react-swipeable-views-native'
import ImageCache from '../utils/imagecache'
import { connect } from 'react-redux';
class Tab1 extends Component{
    constructor() {
        super()
        this.state = {
            data:[18884,10406,11706,17880,21258],
            refreshing:false,
            page:1
        }
    }
    render() {

        return (
            <SwipeableViews index={1}  >
            {this.state.data.map((url,i)=>{
                return (
                    <TouchableOpacity key={i} activeOpacity={1} onPress={()=>this.props.goMusic()} > 
                    <View  style={styles.slide}>
                        <View style={{width:'96%',height: Dimensions.get('window').width*0.9+100,backgroundColor:'#fff',alignItems:'center'}}>
                            <ImageCache
                                uri={"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1522030166&di=0a77b2155705f8af1b8252b299f59b9d&src=http://img4.duitang.com/uploads/item/201212/14/20121214224334_wdc3v.jpeg"}
                                style={{width:'100%',height: '80%'}} />
                            <Text style={{fontSize:14,marginTop:20,color:'#999'}}> @ 光头小强  2017/12/22 </Text>
                            <Text style={{fontSize:22,marginTop:20,color:'#555',textAlign:'center',lineHeight:27}}> 在得与失之间游刃有余</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                )
            })}
          </SwipeableViews> 
        )
    }
}
const styles = StyleSheet.create({

    slide: {
      width:'100%',backgroundColor:'#fff',height:Dimensions.get('window').height-130,
      justifyContent:'center',alignContent:'center',alignItems:'center'
    }
  });


const mapStateToProps = (state) => ({
    user:state.user
});
const mapDispatchToProps = (dispatch) => {
    return {
        goMusic: () => dispatch({type: "Navigation/NAVIGATE", routeName: "Music"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tab1);

