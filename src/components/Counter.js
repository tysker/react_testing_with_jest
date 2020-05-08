import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    }
    // prevState or previous State can be called anything
    count = () => {
        this.setState( (prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        const count = this.state.count
        return (
            <div>
                <button onClick={this.count} data-testid='counter-button'>{count}</button>
                <select data-testid='counter-select'>Hallo</select>
            </div>
        );
    }
}
export default Counter;