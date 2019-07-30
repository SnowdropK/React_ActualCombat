import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getItemDeleteAction } from './store/actionCreators';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render(){
    let { list, inputValue } = this.state
    return <div style={{ marginLeft:10, marginTop:10, border: '1px solid blue'}}>
      <Input
        value={inputValue}
        placeholder="前进吧，少女" 
        style={{width:'300px'}}
        onChange={this.handleInputChange.bind(this)}
      />
      <Button type="primary" style={{ marginLeft:10 }} onClick={this.handleClick}>提交</Button>
      <List
        style={{width:'300px', marginTop:10}}
        bordered
        dataSource={list}
        renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
      />
    </div>
  }

  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleClick(){
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index){
    //const list = [...this.state.list]
    //list.splice(index,1)
    const action = getItemDeleteAction(index)
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(store.getState())
  }


}

export default TodoList;