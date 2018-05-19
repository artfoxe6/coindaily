import React, { Component } from 'react';
// const UIManager = require('NativeModules').UIManager;
import { View, Text,TouchableOpacity,Image,Dimensions,ScrollView,TextInput  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import style from '../utils/style'
class IcoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5
        };
        this._scrollview = null;
        this._comment = null;
    }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
      layout(q,w,e,r) {
        console.log(e)
      }
    gotoComments() {
        // this.refs.progressBar.measure((a, b, width, height, px, py) =>
        //    console.log(width)
        // );
        // this._comment.measureInWindow((x,y,q,w)=>{
        //     console.log(x)
        // })
        // console.log(this._comment);
        // var handle = React.findNodeHandle(this._comment);
        // UIManager.measureLayoutRelativeToParent(
        // this._comment, 
        // (e) => {console.error(e)}, 
        // (x, y, w, h) => {
        //     console.log('offset', x, y, w, h);
        // });
        // this._scrollview.scrollTo({x: 0, y: 1000, animated: true})
    }
  render() {
    return (
		
      	<View style={{flex:1,backgroundColor:'#fff'}}>
	  		<View style={{height:20,backgroundColor:style.theme.bcolor}} ></View>
			<View style={{height:50,backgroundColor:style.theme.bcolor,justifyContent:'space-between',alignItems  :'center',flexDirection:'row',paddingRight:10}} >
				<Icon name="ios-arrow-back" style={{width:40,textAlign:'center'}}   size={30}  color="#fff" onPress={()=>this.props.navigation.goBack()} />
				<Text style={{color:'#fff',fontWeight:'bold'}}>项目主页</Text>
				<Icon
					onPress={()=>{this.props.navigation.navigate("Search",{haha:'iii'})}}
					name={'ios-more'}
					style={{width:40,textAlign:'center'}}
					size={30}
					color={'#fff'}
				/>
            </View>
            <ScrollView ref={(scrollView) => { this._scrollview = scrollView; }}>
			<View style={{height:120,padding:20,width:'100%',backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}} >
				<Image
					source={require('../images/coin2.png')}
					style={{width:100,height:100,borderRadius:1}} />
				<View style={{alignContent:'center',justifyContent:'space-between',width:Dimensions.get('window').width-160,alignItems:'flex-start'}}>
					<View style={{height:100,justifyContent: 'flex-start',backgroundColor:'#fff',width:'100%'}}>
						<Text style={{fontSize:18,color:"#333",marginBottom:10}}>Ubcoin</Text>
						<Text style={{fontSize:15,color:"#ff536a"}}>综合评分：8.3</Text>
						<Text style={{color:'#999',fontSize:12,lineHeight:20}}>项目类型：智能合约 | 地区：美国</Text>
						<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:'100%'}}>
						<Text style={{color:style.theme.bcolor}}>官网</Text>
						<Text style={{color:style.theme.bcolor,marginLeft:10,marginRight:10}}>|</Text>
						<Text style={{color:style.theme.bcolor}}>白皮书</Text>
						{/* <Text style={{color:style.theme.bcolor}}>美国</Text> */}
						{/* <Text style={{color:'#666',fontSize:14,lineHeight:20}}>官网 白皮书 美国</Text> */}
						</View>
					</View>
				</View>
			</View>
			<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',height:40,borderBottomColor:'#eee',borderBottomWidth:1,borderTopColor:'#eee',borderTopWidth:1}}>
				<TouchableOpacity><Text style={{color:style.theme.bcolor}}>项目简介</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=>this.gotoComments()}><Text style={{color:style.theme.bcolor}}>评论 564</Text></TouchableOpacity>
				<Text style={{color:'#ccc'}}>代投</Text>
			</View>

            <View style={{padding:20}}>
                <Text>{
`ICO日期：

2018/04/02-2018/05/31

产品类型： 平台 应用程序

行业： 移动支付

描述： 一个可以使用密码货币购买和出售商品的生态系统。

项目所在地： 东欧（俄罗斯团队）

特点: 对于大众消费者

人们有能力获得UBC硬币而无需挖掘或使用密码货币兑换平台。成为密码货币的持有者或投资者就像在Ubcoin市场上出售商品一样简单。

对于矿工和密码货币投资者

矿工和投资者同样可以通过在真实世界购买商品来享受他们的密码货币财富。 不需要转换为法定货币，而交易以智能合约方式用数字货币结算。`
}
                </Text>
            </View>
            <View style={{width:'70%',marginLeft:'15%',alignItems:'center',borderTopColor:'#eee',borderTopWidth:1,margin:10}}></View>
            <View onLayout={()=>this.layout()} style={{alignItems:'center',marginTop:10}}>
                <Text style={{color:"#ff536a"}}>元芳，你打几分呢？</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <StarRating
                    starSize={30}
                    disabled={false}
                    halfStarEnabled={true}
                    maxStars={5}
                    fullStarColor={"#ff536a"}
                    starStyle={{margin:10}}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <Text style={{color:"#aaa",fontSize:12}}>用户评分：7.8 (56人打分)</Text>
            </View>
            <View style={{width:'70%',marginLeft:'15%',alignItems:'center',borderTopColor:'#eee',borderTopWidth:1,margin:10}}></View>
            <View style={{flexDirection:'row',width:'70%',backgroundColor:'#fff',marginLeft:'15%',alignItems:'flex-start'}}>
                {/* <Image
                source={require('../images/touxiang.jpg')}
                style={{width:30,height:30,borderRadius:15,}}/> */}
                <TextInput
                    // value=""
                    underlineColorAndroid={'transparent'}
                    multiline={true}
                    onChangeText={(text) => this.setState({content:text})}
                    placeholder="添加评论..."
                    style={{height:100,textAlignVertical:'top',flex:1,color:'#666',lineHeight:25}}
                />
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'#ff536a',width:80,height:30,justifyContent:'center',alignItems:"center",marginRight:20,borderRadius:15,}}>
                    <Text style={{color:"#fff"}} >提交评论</Text>
                </TouchableOpacity>
            </View>
            <View style={{width:'70%',marginLeft:'15%',alignItems:'center',borderTopColor:'#eee',borderTopWidth:1,margin:10}}></View>

            <View style={{margin:20}}>
                <View style={{flexDirection:'row',width:'100%',backgroundColor:'#fff',alignItems:'center'}}>
                    <Image
                    source={require('../images/touxiang.jpg')}
                    style={{width:30,height:30,borderRadius:15}}/>
                    <Text style={{color:"#555",marginLeft:10}}>微微一笑:</Text>
                </View>
                <View >
                    <Text style={{marginLeft:40,color:"#666",lineHeight:25}}>0x是一个点对点交易的开源协议，以促进以太坊区块链中erc20代币的交易。该协议旨在作为开放标准和通用构建模块，推动包括交易所功能的去中心化应用（dapps）之间的互操作性。</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:10,alignItems:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}><Icon name={'md-text'} size={25} color={'#666'} style={{margin:5}}  /><Text style={{color:"#666"}}>9</Text></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:15,marginTop:-3}}><Icon name={'md-thumbs-up'} size={25} color={'#666'} style={{margin:5}}  /><Text style={{color:"#666"}}>9</Text></TouchableOpacity>
                    
                </View>
            </View>
            
			</ScrollView>
      </View>
    );
  }
}

export default IcoDetail;
