import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import configureStore from './store';
import * as weatherActions from './actions/weatherActions';
import Card from './components/card';

const store = configureStore();

export default class Init extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const clientId = document.getElementById('clientId').value;
        this.props.weatherActions.getWeatherAsync(clientId, 'noida', 'in');
    }

    render() {
        const todayWeather = this.props.weatherFeeds.length > 0 ? this.props.weatherFeeds[0] : {};

        return (
            <div className='container'>
                <Card city={'Noida'} todayWeather={todayWeather} feeds={this.props.weatherFeeds} />
            </div>
        );
    }
};

const mapStateToProps = function (state) {
    return {
        weatherFeeds: state.weatherFeeds
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch)
    };
};

const App = connect(mapStateToProps, mapDispatchToProps)(Init);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container'));
