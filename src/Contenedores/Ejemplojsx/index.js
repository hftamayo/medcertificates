import React from 'react';

export function Saludo1(props){
    console.log('props', props);
    return <p style={{color: props.color, 
    backgroundColor: props.backgroundColor}}>
        {props.text}</p>
}

export function Saludo2(props){
    return <p>Saludo2: Apreciables saludos por segunda vez</p>
}

export function Saludo3(params){
    return (
        <div className="saludo3">Saludo3:
        <Envoltura>
            <Saludo1 text="este es un saludo1" color="blue" />
            <Saludo2 />
        </Envoltura>
        </div>
    );
}

export function Envoltura(props){
    console.log('envoltura props', props);
    return (
      <div style={props.styles}>
      <p>Grupo de componentes</p>
      {props.children}
    </div>
    );
  }  

export default Saludo3;