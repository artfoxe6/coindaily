import { StackNavigator } from 'react-navigation';
import Index from './index';
import Chat from './chat';
// import UserDetail from './userdetail';
import Gallerys from './gallery';
import Boot from './boot';
import Music from './music';
import Player from './player';

const RootNavigator = StackNavigator(
    {
        Index: { screen: Index },
        Player: { screen: Player },
        
        Music: { screen: Music },
        Boot: { screen: Boot },
        
        Chat: { screen: Chat },
        // UserDetail: { screen: UserDetail },
        Gallerys: { screen: Gallerys },
    },
    { headerMode: 'none'}
);

// export default RootNavigator;

function mapDispatchToProps(dispatch) {
    return {
      addToCounter: () => dispatch(addToCounter())
    }
}
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

const Root = connect(mapStateToProps, mapDispatchToProps)(RootNavigator);

export default function App() {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    );
}