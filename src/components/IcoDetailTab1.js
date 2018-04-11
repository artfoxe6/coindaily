import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class componentName extends Component {
  render() {
	return (
	  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
		<Text> {this.props.text} </Text>
	  </View>
	);
  }
}

export default componentName;
