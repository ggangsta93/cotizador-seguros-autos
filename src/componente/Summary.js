import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';
import Result from './Result';

class Summary extends Component {

    showSummary = ()=>{
        const {brand,year,plan} = this.props.data; 
        if(!brand || !year || !plan) return null;
        return(
            <div className="resumen">
                <h2>Resumen de cotización.</h2>
                <li>Marca: {primeraMayuscula(brand)}</li>
                <li>Año: {primeraMayuscula(year)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
            </div>
        )
    }
    render(){       
        return(
            <div >
                {this.showSummary()}
                <Result
                    result = {this.props.result}
                />
            </div>
        )
    }
}

export default Summary;