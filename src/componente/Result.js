import React, {Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Result extends Component{

    render(){
        const result = this.props.result;
        const message = (!result)? 'Elije marca, Año y tipo de Seguro':'El total es: $';
        return(
            <div className="gran-total">
                {message}
                <TransitionGroup component="span" className="result">
                    <CSSTransition
                        classNames="resultado"
                        key={result}
                        timeout={{enter:500, exit:500}}>
                        <span>{result}</span>
                    </CSSTransition>
                </TransitionGroup>

            </div>
        )

    }
}

export default Result;