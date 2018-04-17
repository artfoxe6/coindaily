
import { StackNavigator,addNavigationHelpers } from 'react-navigation';
import React from 'react';
import { connect } from 'react-redux';
import Index from './page/index';
import Boot from './page/boot';
import IcoDetail from './page/icodetail';
import Search from './page/search';
import Animate from './page/animate';
import Login from './page/login';
import Register from './page/register';
import Forget from './page/forget';
import Feedback from './page/feedback';
// import { View } from 'react-native';
import Video from 'react-native-video'

const Pages = {
    // Animate: { screen: Animate},
    Login: { screen: Login},
    Feedback: { screen: Feedback},
    
    Forget: { screen: Forget},
    
    Register: { screen: Register},
    
    Index: { screen: Index},
    Search: { screen: Search },
    IcoDetail: { screen: IcoDetail },
    Boot: { screen: Boot }
}
export const AppNavigator = StackNavigator(Pages,{ headerMode: 'none'});

class AppWithNavigationState extends React.Component {
    render() {
      return (
        // <View style={{flex:1}}>
          <AppNavigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener:()=>{},
          })} />
        // </View>
      );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);