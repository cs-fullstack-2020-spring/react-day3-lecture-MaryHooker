import React, { Component } from 'react';
import Dogs from './Dogs';

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDog: 'MY dog',
            leastFav: 'mean dog',
        }
    }

    componentDidMount() {
        console.log('The component Pet did mount');
        // Using setState to change the value of the objects given above in the state under the constructor WHEN this component is rendered
        this.setState({ favDog: 'YOUR dog' });
        this.setState({ leastFav: 'NICE dog' });
    }

    render() {
        return (
            <div>
                <h1 className='pink'>List of Pets</h1>
                <Dogs />
                {/* Using this.state because it is stated in its own component under the constructor */}
                <h3 className='yellow'>My favorite dog is {this.state.favDog}.</h3>
                {/* Using this.props because its coming from the parent component*/}
                <h3 className='yellow'>The color of my dog is {this.props.color}.</h3>
                <h3 className='yellow'>My least favorite dog is a {this.state.leastFav}.</h3>
            </div>
        )
    }
}

export default Pets;