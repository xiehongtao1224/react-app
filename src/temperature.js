import React from 'react';
import './temperature.css';

const constants = {
    c: '摄氏度',
    f: '华氏温度'
}

class Temperature extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    TemperatureChange(e, scale) {
        this.setState({
            temperature: e.target.value,
            scale
        })
    }

    handleClick() {
        console.log(this.state.scale);
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput 
                    scale="c"
                    temperature={ celsius }
                    onTemperatureChange={ (e) => { this.TemperatureChange(e, 'c') } }
                    button={
                        <button onClick={ () => this.handleClick() }>props.button</button>
                    }
                ></TemperatureInput>

                <TemperatureInput 
                    scale="f"
                    temperature={ fahrenheit }
                    onTemperatureChange={ (e) => { this.TemperatureChange(e, 'f') } }
                >
                    <button onClick={ () => this.handleClick() }>props.children</button>
                </TemperatureInput>
                <Boiling  celsius={ celsius } />
            </div>
        );
    }
}

class TemperatureInput extends React.Component {
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>{ constants[scale] }</legend>
                <input 
                    value={ temperature }
                    onChange={ (e) => { this.props.onTemperatureChange(e) } }
                ></input>
                { this.props.button }
                { this.props.children }
            </fieldset>
        );
    }
}

function Boiling(props) {
    if(props.celsius >= 100) {
        return <p>水滚了</p>
    }else {
        return <p>水还没滚</p>
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export { Temperature };

