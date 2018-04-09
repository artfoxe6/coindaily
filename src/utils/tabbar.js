import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../utils/style'
export default class Tabbar extends Component{
    tabIcons = []
    render() {
        
        return <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => {
            if(this.props.activeTab == i) {
              return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={[styles.tab,{backgroundColor:"#3C93A0"}]}>
              <Icon
                name={this.props.tabIconNames[i]}
                size={25}
                color={"#fff"}
                ref={(icon) => { this.tabIcons[i] = icon; }}
              />
              <Text style={{color:"#fff",fontSize:12}}>
                {this.props.tabNames[i]}
              </Text>
            </TouchableOpacity>;
            }else{
              return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={this.props.tabIconNames[i]}
                size={25}
                color={'#eee'}
                ref={(icon) => { this.tabIcons[i] = icon; }}
              />
              <Text style={{color:'#eee',fontSize:12}}>
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
    height: 55,
    flexDirection: 'row',
    backgroundColor:style.theme.bcolor,
  },
});
