//reducer本质是一个函数

export default function countReducer(preState,action){
    const {type,data} = action
    if(type === 'increment'){
        return preState + data
    }else if(type === 'decrement'){
        return preState - data
    }else{
        if(preState === undefined){
            preState = 0
        }
        return preState
    }
}