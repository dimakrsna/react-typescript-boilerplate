import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { getTextValueAction } from '../actions/getTextValueAction'
import { changeInputValueAction } from '../../Input/actions/changeInputValueAction'

interface IProps {
    dispatch: Dispatch<{}>;
    inputValue: string
}

class ButtonContainer extends Component<IProps>{

    btnHandler = () => {
        this.props.dispatch(getTextValueAction([this.props.inputValue]))
        this.props.dispatch(changeInputValueAction(''))
    }

    render(){
        return <button onClick={this.btnHandler}>Click me</button>
    }
}

const mapStateToProps = (state: any) => {
    return {inputValue: state.inputValue }
}

export default connect(mapStateToProps)(ButtonContainer)