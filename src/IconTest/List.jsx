import React, { Component } from 'react';
import IconSpan from './IconSpan.jsx';

class List extends Component {

    render() {
        return (

            <div>
                {
                    this.props.value.map((v, k) => {
                        return (
                            <IconSpan key={k} onClick={() => { this.props.click(k) }} icon={k + '.jpg'} Choosed={this.props.choose}>
                                {v}
                            </IconSpan>
                        )
                    })
                }

            </div>
        )
    }
}
export default List;





