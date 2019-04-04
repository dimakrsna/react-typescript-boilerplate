import React, { Component } from "react"

import { TitleComponent } from './Title/components/title-component'
import ButtonContainer from './Button/containers/button-container'
import TextComponent from './Text/component/text-component'
import InputContainer from './Input/containers/input-container'

import { NoTSExample } from './NoTSExample.d'

export class App extends Component {

    render() {
        return (
            <React.Fragment>
                <TitleComponent />
                <InputContainer />
                <ButtonContainer />
                <TextComponent />
                <NoTSExample />
            </React.Fragment>
        )
    }
}
