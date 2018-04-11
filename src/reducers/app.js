

const initState = {
    tabIndex:0,
    tabName:"项目评级"
}
const tabNames = ["项目评级","币读资讯","币友交流","我的"];
export default appReducer = (state = initState,action) =>{
    switch(action.type) {
        case "tabIndex":
            return {
                ...state,
                tabIndex:action.tabIndex,
                tabName:tabNames[action.tabIndex]
            }
        default:
            return state
    }
}

