import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timeOfDay: '' };
    }

    componentDidMount() {
        const now = new Date();
        const hour = now.getHours();

        let timeOfDay;
        if (hour < 12) {
            timeOfDay = 'Pagi';
        } else if (hour < 18) {
            timeOfDay = 'Siang';
        } else {
            timeOfDay = 'Malam';
        }

        this.setState({ timeOfDay });
    }

    render() {
        return (
            <h3>Selamat {this.state.timeOfDay}!</h3>
        );
    }
}

export default Greeting;
