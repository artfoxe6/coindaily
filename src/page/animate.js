import React, { Component } from 'react';
import {
  Animated,Text,View
} from 'react-native';
const test  = new Animated.Value(0)
class FadeInView extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
    // };
    console.log(Animated)
  }
  componentDidMount() {
    Animated.timing(                            // 随时间变化而执行的动画类型
      test,                      // 动画中的变量值
      {
        toValue: 1,
        duration:5000                             // 透明度最终变为1，即完全不透明
      }
    ).start();                                  // 开始执行动画
  }
  render() {
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
          ...this.props.style,
          opacity: test,          // 将透明度指定为动画变量值
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