import React, { Component } from 'react';
import {
  Animated,Text,View
} from 'react-native';

class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test : new Animated.ValueXY({x:0,y:0})
    };
    console.log(this.state.test.x)
  }
  componentDidMount() {
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.test,                      // 动画中的变量值
      {
        toValue: {x:1000,y:1000},
        duration:5000                             // 透明度最终变为1，即完全不透明
      }
    ).start();                                  // 开始执行动画

  }
  render() {
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
		  ...this.props.style,
		  height:this.state.test.y,
		  width:this.state.test.x,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Test extends Component{
    render() {
        return (
          <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
          </FadeInView>
        )
      }
}