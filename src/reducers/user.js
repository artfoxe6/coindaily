

const initState = {
    login:false,
    userhead:'https://img.zcool.cn/community/01460b57e4a6fa0000012e7ed75e83.png@1280w_1l_2o_100sh.png'
}

export default userReducer = (state = initState,action) =>{
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                login:true,userhead:"https://img.zcool.cn/community/01786557e4a6fa0000018c1bf080ca.png"
            }
        default:
            return state
    }
}

