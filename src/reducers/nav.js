
import {AppNavigator} from '../navigator'

// let initialState = AppNavigator.router.getStateForAction("Index");
let initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Boot'));

export default navReducer = (state = initialState, action) => {
    return AppNavigator.router.getStateForAction(action, state) || state;
};

