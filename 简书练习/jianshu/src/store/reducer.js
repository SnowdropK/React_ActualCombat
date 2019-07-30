import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'

const defaultValue = {
    inputValue: '前进吧，少女',
    list:['水冰月','小樱','芽美','夏莉']
}
export default (state = defaultValue, action) =>{
    let { type } = action
    let newState = JSON.parse(JSON.stringify(state))
    if(type === CHANGE_INPUT_VALUE){
        //let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState;
    }
    if(type === ADD_TODO_ITEM){
        //let newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list, newState.inputValue]
        newState.inputValue = ''
        return newState;
    }
    if(type === DELETE_TODO_ITEM){
        //let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState;
    }
    return state
}