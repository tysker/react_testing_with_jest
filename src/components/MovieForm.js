import React, {Component} from 'react';

class MovieForm extends Component {
    state = {
        text: 'hello'
    };

    render() {
        const {submitForm} = this.props;
        const {text} = this.state;
        return (
            <form data-testid='movie-form' onSubmit={() => submitForm({text})}>
                <label htmlFor="text">
                    Text
                    <input type="text" id="text" onChange={e => this.setState({text: e.target.value})}/>
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

export default MovieForm;