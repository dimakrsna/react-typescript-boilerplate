import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux' 

import { changeInputValueAction } from '../actions/changeInputValueAction' 

interface IProps {
    dispatch: Dispatch<{}>;
    inputValue: string
}

class InputContainer extends React.Component<IProps> {
    inputHandler = (event: any) => {
        this.props.dispatch(changeInputValueAction(event.target.value))
    }

    render(){
        return <input placeholder='Enter any text' onChange={this.inputHandler} value={this.props.inputValue}></input>
    }
}

const mapStateToProps = (state: any) => {
    return {
        inputValue: state.inputValue
    }
}

export default connect(mapStateToProps)(InputContainer)