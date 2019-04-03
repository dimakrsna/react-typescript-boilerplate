import * as React from 'react'
import { connect } from 'react-redux'

type Props = {
    outputText: string[]
}

const TextComponent: React.FC<Props> = (props) => {
    return <div className="">{
        props.outputText.map((item, index) => {
            return <p key={`value-${index}`}>{item}</p>
        })
    }</div>
}

const mapStateToProps = (state: any) => {
    return {
        outputText: state.outputText
    }
}

export default connect(mapStateToProps)(TextComponent)