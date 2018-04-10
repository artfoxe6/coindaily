
import { StackNavigator,addNavigationHelpers } from 'react-navigation';
import React from 'react';
import { connect } from 'react-redux';
import Index from './page/index';
import Boot from './page/boot';
import Music from './page/music';
import Player from './page/player';
import { View } from 'react-native';
import Video from 'react-native-video'

const Pages = {
    Index: { screen: Index},
    Player: { screen: Player },
    Music: { screen: Music },
    Boot: { screen: Boot }
}
export const AppNavigator = StackNavigator(Pages,{ headerMode: 'none'});

class AppWithNavigationState extends React.Component {
    render() {
      return (
        <View style={{flex:1}}>
          <AppNavigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener:()=>{},
          })} />
        </View>
      );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);