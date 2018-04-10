import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../utils/style'
export default class IndexSubTabbar extends Component{
    tabIcons = []
    render() {
        
        return <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => {
            if(this.props.activeTab == i) {
              return <TouchableOpacity key={i} onPress={() => this.props.goToPage(i)} style={[styles.tab,{backgroundColor:"#fffffe"}]}>
              <Text style={{color:style.theme.bcolor,fontSize:14,fontWeight:'bold'}}>
                {this.props.tabNames[i]}
              </Text>
            </TouchableOpacity>;
            }else{
              return <TouchableOpacity key={i} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Text style={{color:'#666',fontSize:14}}>
                {this.props.tabNames[i]}
              </Text>
            </TouchableOpacity>;
            }
            
          })}
        </View>;
      }
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabs: {
    height: 40,
    flexDirection: 'row',
    backgroundColor:"#fffffe",
  },
});
