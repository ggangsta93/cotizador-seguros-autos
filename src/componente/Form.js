import React, { Component} from 'react';

class Form extends Component {

    /*El argumento e, junto con el preventDefault hace que no se muestre
    en la URL los valores que se capturanron en los campos*/

    /*Para encontrar los valores de los campos que se han solicitado,
        en React se utiliza por lo general lo que se llama refs, los refs
        son para leer los valroes de los campos de un formulario*/
    
    constructor(props){
        super(props);
        this.brandRef = React.createRef();
        this.yearRef = React.createRef();
        this.basicPlanRef = React.createRef();
        this.fullPlanRef = React.createRef();
        /*Si los atributos estuvieran por fuera del constructor no sería necesesario el this,
        de preferencia es mejor trabajar sin el constructor porque hace lo mismo*/ 
    }

    quoteInsurance = (e)=>{
        e.preventDefault();

        //Obtener los datos
        console.log(this.brandRef.current.value);

        //Crear el objeto

        //enviarlo al componente principal
    }

    render(){
        return(            
            <form className="car-quote" onSubmit={this.quoteInsurance} >
                  {/*En los formularios normalmente se define un action, por ejemplo
                  action="enviar.php", de ahí lo enlazaba automaticamente, en React para 
                  los formularios se usa onSubmit */}
                  <div className="field">
                    <label>Marca</label>
                    <select name="brand" ref={this.brandRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                  </div>
  
                  <div className="field">
                      <label>Año</label>
                      <select name="year" ref={this.yearRef} >
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                          <option value="2016">2016</option>
                          <option value="2015">2015</option>
                          <option value="2014">2014</option>
                          <option value="2013">2013</option>
                          <option value="2012">2012</option>
                          <option value="2011">2011</option>
                          <option value="2010">2010</option>
                          <option value="2009">2009</option>
                          <option value="2008">2008</option>
                      </select>
                  </div>
                  <div className="field">
                      {/*En las etiquetas que no tienen cierre como input, 
                      en JSX es necesario que terminen con "/">*/}
                      <label>Plan:</label>
                      <input type="radio" ref={this.basicPlanRef}  name="plan" value="basico"/> Básico
                      <input type="radio" ref={this.fullPlanRef}  name="plan" value="completo"/> Completo
                  </div>
  
                  <button type="submit" className="boton">Cotizar</button>
            </form>
        )
    }

}


export default Form;