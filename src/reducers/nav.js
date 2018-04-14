
import {AppNavigator} from '../navigator'

// let initialState = AppNavigator.router.getStateForAction("Index");
let initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Animate'));

export default navReducer = (state = initialState, action) => {
    return AppNavigator.router.getStateForAction(action, state) || state;
};

