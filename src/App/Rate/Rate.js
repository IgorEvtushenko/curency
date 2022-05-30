import React from 'react';
import Calculator from './Calculator/Calculator';
import './Rate.scss';

class Rate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: '',
      curancyRate: {}
    };
    this.curency = ['EUR', 'USD', 'UAH'];
  };
  componentDidMount(){
    this.getRate();
  }
  getRate = () => {
    const curencyURL = "https://api.exchangerate.host/latest";
    fetch(curencyURL).then(data => {return data.json()})
    .then(data => {
      let res = {};
      for(let i=0; i<=this.curency.length-1; i++){
         res[this.curency[i]] = data.rates[this.curency[i]].toFixed(2);
      }
      this.setState({date: data.date, curancyRate: res})
    })
  };
  render(){
    return (
      <>
        <div className='rate'>
          <div className='get-rate-wrapper'>
            <h3>Курс валют на {this.state.date}</h3>
          </div>
          <div className='flex-container'>
            {Object.keys(this.state.curancyRate).map((keyName, i)=>{
              return (
                <div className='bloc flex-item' key={keyName}>
                  <div className='curency-name'>{keyName}</div>
                  <div className='curency-in'>{this.state.curancyRate[keyName]}</div>
                  <div className='curency-out'>За 1 EUR</div>
                </div>
              )
            })}
          </div>
        </div>
        <Calculator rate={this.state.curancyRate}/>
      </>
    );
  }
};

export default Rate;