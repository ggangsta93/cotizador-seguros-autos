import React, {Component} from 'react';
import Header from './Header';
import Form from './Form';
import Summary from './Summary';


import {obtenerDiferenciaAnio, calcularMarca,obtenerPlan} from '../helper';

class App extends Component {

  state = {
    result:'',
    data:{}
  }

  quoteInsurence = (info)=>{
    const {brand, year, plan} = info;

    //Agrega una base de 2000,
    let result = 2000;

    //Obtener la diferencia de años y 
    const difference = obtenerDiferenciaAnio(year);
    //por cada año restar el 3% al valor del seguro
    result -= (difference*result*0.03);
  
    //Americano 15%, Asiatico 5% y Europeo 30% de incremento al valor inicial
    result = calcularMarca(brand)*result;

    //el plan del auto, el basico incrementa el valor 20% y 
    //cobertura  completa 50%
    let planIncrement =obtenerPlan(plan);

    //dependiendo del plan incrementar
    result = parseFloat(planIncrement * result).toFixed(2);

    //Se crea objeto para el resumen
    const summary ={
      brand:brand,
      year:year,
      plan:plan
    }

    //ya tenemos el costo
    this.setState({
      result:result,
      data:summary
    })

  }
  
  render(){
    return (
      <div className="container">
        <Header title='Cotizador de seguros de Autos'/>
        <div className="form-container">
          <Form 
            quoteInsurance={this.quoteInsurence}
          />
          <Summary
            data = {this.state.data}
            result = {this.state.result}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
