import React from 'react';
import './Calculator.scss';

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      result: 0
    };
  };
  static getDerivedStateFromProps(props, state){
    return {rate: props.rate};
  };
  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let countCurency = elements['count-curency'].value;
    let typeCurency = elements['type-curency'].value;
    this.setState({result: countCurency / this.state.rate[typeCurency]});
  };
  render(){
    return (
      <div className='calculator'>
        <h3>Калькулятор обмена</h3>
        <div className='container'>
          <div>Я хочу</div>
          <form onSubmit={this.calcRate} className='input-wrapper'>
            <input className='inp' type='number' name='count-curency'/>
            <select name='type-curency' id=''>
              {Object.keys(this.props.rate).map((name, i)=>{
                return <option value={name} key={i}>{name}</option>
              })}
            </select>
            <input className='sub' type='submit' defaultValue='calc'></input>
          </form>
          <div className='result-list'>
            <h4>Результат</h4>
            <ul>
              <li>EUR {this.state.result.toFixed(2)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Calculator;