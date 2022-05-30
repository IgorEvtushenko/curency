import React from 'react';
import './About.scss';

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
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos dolor numquam. Dicta repudiandae recusandae eligendi eius assumenda? Est quidem, maiores dolorum dicta sunt architecto perferendis voluptas iste! Doloribus modi rem libero accusantium debitis? Minima optio eos numquam, similique repellat quia? Nulla voluptas et labore expedita accusamus eum dolore. Repudiandae eius id reiciendis voluptatibus voluptas labore! Facilis repellat at doloribus culpa, fugit quaerat cum eius esse ullam distinctio placeat deserunt qui vitae aspernatur a nam exercitationem nostrum quibusdam repellendus magnam sed tempore beatae ipsa. Ullam quisquam tempora velit alias quam rem? Sequi cum veritatis asperiores quibusdam soluta cumque iusto similique?
      </div>
    );
  }
};

export default Calculator;