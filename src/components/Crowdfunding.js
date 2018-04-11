import React, { Component } from 'react';
import { View, Text, Image,ImageBackground,ScrollView ,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
const {width,height} = Dimensions.get("window")
import { connect } from 'react-redux';
class Crowdfunding extends Component {
	constructor() {
		super()
		this.state = {
			show:false,
			list:[
				{
					image:require("../images/coin1.jpg"),
					name:"EOS",
					title:"快速高效的分布式应用架构",
					rank:"A",
					love:897
				},
				{
					image:require("../images/coin2.png"),
					name:"Midex",
					title:"基于区块链的金融平台（交易所）",
					rank:"BBB",
					love:94
				},
				{
					image:require("../images/coin3.png"),
					name:"ubcoin",
					title:"一个可以使用密码货币购买和出售商品的生态系统",
					rank:"BBB",
					love:120
				},
				{
					image:require("../images/coin4.png"),
					name:"Academy",
					title:"教育解决方案",
					rank:"BBB",
					love:342
				},
				{
					image:require("../images/coin1.jpg"),
					name:"EOS",
					title:"快速高效的分布式应用架构",
					rank:"A",
					love:897
				},
				{
					image:require("../images/coin2.png"),
					name:"Midex",
					title:"基于区块链的金融平台（交易所）",
					rank:"BBB",
					love:94
				},
				{
					image:require("../images/coin3.png"),
					name:"ubcoin",
					title:"一个可以使用密码货币购买和出售商品的生态系统",
					rank:"BBB",
					love:120
				},
				{
					image:require("../images/coin4.png"),
					name:"Academy",
					title:"教育解决方案",
					rank:"BBB",
					love:342
				},
				{
					image:require("../images/coin1.jpg"),
					name:"EOS",
					title:"快速高效的分布式应用架构",
					rank:"A",
					love:897
				},
				{
					image:require("../images/coin2.png"),
					name:"Midex",
					title:"基于区块链的金融平台（交易所）",
					rank:"BBB",
					love:94
				},
				{
					image:require("../images/coin3.png"),
					name:"ubcoin",
					title:"一个可以使用密码货币购买和出售商品的生态系统",
					rank:"BBB",
					love:120
				},
				{
					image:require("../images/coin4.png"),
					name:"Academy",
					title:"教育解决方案",
					rank:"BBB",
					love:342
				}
			]
		}
	}
	componentDidMount(){
        setTimeout(()=>{
            this.setState({
                show:true
            });
        },10)
	}
	renderItem(val,key) {
		// console.log(val)
		return (
			<TouchableOpacity onPress={()=>this.props.goDetail('20')} key={key} style={{alignItems:'center'}}>
				<View style={{width:'96%',height:80,backgroundColor:'transparent',borderRadius:5,flexDirection:'row',alignItems:'center',borderColor:'#ddd',borderWidth:1,marginTop:10,padding:10,justifyContent:'space-between'}} >
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<Image source={val.image} style={{height:50,width:50}} />
						<View style={{maxWidth:'70%',marginLeft:20,justifyContent:'center'}}>
							<Text style={{color:'#333',fontWeight:'bold',marginBottom:3}}>{val.name} <Text style={{color:'#ff5300',fontWeight:'normal'}}>（评级 {val.rank}）</Text></Text>
							<Text style={{color:"#666",lineHeight:17}}>{val.title}</Text>
						</View>
					</View>
					<View style={{alignItems:'center'}}>
						<Icon name={'md-heart'} size={30} color={'#999'} />
						<Text style={{color:'#999'}}> {val.love} </Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
	renderSwiper() {
		if( this.state.show  && this.props.type == 1) {
			return(
				<Swiper autoplay={true} style={{backgroundColor:'transparent'}} height={140} width={width}>
					<Image style={{width:'100%',height:140}} source={require('../images/slide.jpg')} resizeMode={'cover'} />
					<Image style={{width:'100%',height:140}} source={require('../images/slide5.png')} resizeMode={'cover'} />
				</Swiper>
			)
		}
	}
	render() {
		return (
			<View style={{flex:1}}>
				<ScrollView >
					<View style={{flex:1}}>
						{this.renderSwiper()}
					</View>
					{this.state.list.map((val,key)=>this.renderItem(val,key))}
				</ScrollView>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        goDetail: (id) => dispatch({type:"Navigation/NAVIGATE",routeName:"IcoDetail",params:{id:id}}),
        // goSearch:()=>dispatch({type})
    }
}

export default connect(null,mapDispatchToProps)(Crowdfunding);

