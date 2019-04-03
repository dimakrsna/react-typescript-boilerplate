import * as React from "react"

import { TitleComponent } from './Title/components/TitleComponent'
import ButtonContainer from './Button/containers/ButtonContainer'
import TextComponent from './Text/component/TextComponent'
import InputContainer from './Input/containers/InputContainer'

import { NoTSExample } from './NoTSExample.d'

export class App extends React.Component {

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
