import * as React from "react"

import { TitleComponent } from './Title/components/TitleComponent'
import Button from './Button/containers/ButtonContainer'
import TextComponent from './Text/component/TextComponent'
import InputContainer from './Input/containers/InputContainer'

export class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <TitleComponent />
                <InputContainer />
                <Button />
                <TextComponent />
            </React.Fragment>
        )
    }
}
