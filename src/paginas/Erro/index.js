import React from 'react';
import CaixaTexto from '../../components/CaixaTexto'
import Button from '../../components/Button';


class Erro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dica: [],
            msgErro: []
        }
    }


    handleVoltar = () => {
       
       this.props.history.push({
           pathname: '/'
       })       
} 

render(){

    return(
        <div>
    <CaixaTexto
        titulo='OPA! PARECE QUE ITAN NÃO ESTEVE AQUI'
        texto='Clique em voltar para continuar ajudando Inaê na busca por Itan...'
    />

    <Button
        handleClick={this.handleVoltar}
    > >>Voltar</Button>
        </div >
    )
}
}


export default Erro
