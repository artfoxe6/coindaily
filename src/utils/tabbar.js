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
              return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={[styles.tab,{borderBottomColor:style.theme.bcolor}]}>
              <Icon
                name={this.props.tabIconNames[i]}
                size={25}
                color={style.theme.bcolor}
                ref={(icon) => { this.tabIcons[i] = icon; }}
              />
              <Text style={{color:style.theme.bcolor}}>
                {this.props.tabNames[i]}
              </Text>
            </TouchableOpacity>;
            }else{
              return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={this.props.tabIconNames[i]}
                size={25}
                color={'#333'}
                ref={(icon) => { this.tabIcons[i] = icon; }}
              />
              <Text style={{color:'#333'}}>
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
    borderBottomColor:'#fff',
    borderBottomWidth:2,
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    backgroundColor:'#fff',
    borderTopColor:'#ddd',
    borderTopWidth:1
  },
});
