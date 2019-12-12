import React from 'react';

import './style.css'

function CaixaTexto(props) {
    return (
        <div className='caixa-container'>
            <div className='caixa-texto'>
                <h3 className='caixa-descricao'>{props.titulo}</h3>
                <p className='caixa-descricao' >{props.texto}</p>
                <p className='caixa-descricao' ><span className='caixa-span'>{props.span2}</span>{props.texto2}</p>
                <p className='caixa-descricao' ><span className='caixa-span'>{props.span3}</span>{props.texto3}</p>
                <p className='caixa-descricao' ><span className='caixa-span'>{props.span4}</span>{props.texto4}</p>
                <p className='caixa-descricao' ><span className='caixa-span'>{props.span5}</span>{props.texto5}</p>
                
            </div>                      

        </div>
    )
}

export default CaixaTexto