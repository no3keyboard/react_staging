//引入Store
import {configureStore} from 'redux'

//引入为Count组件服务的reducer
import countReducer from '. /countReducer'

export default configureStore(countReducer)