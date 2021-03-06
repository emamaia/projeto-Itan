import React from 'react';
import Header from '../../components/Header'
import Button from '../../components/Button'

import { getPistas } from '../../service/base'

import principal from '../../assets/principal.png'


import './style.css'
import CaixaTexto from '../../components/CaixaTexto';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dica: [],
            dicaAtual: [],
            msgErro: []
        }
    }

    componentDidMount() {
        getPistas()
            .then(response => {
                console.log(response.data)
                this.setState({
                    dica: response.data,
                    dicaAtual: response.data[0],
                    index: 0
                })

            })
            .catch(error => {
                console.error(error)
            })
                           
    }

    randOrd = () => {
        return (Math.round(Math.random())-0.5);        
    }


    handleMudaPista = () => {
        let mudaIndex = this.state.index + 1
        this.setState({
            dicaAtual: this.state.dica[mudaIndex],
            index: mudaIndex
        })

    }

    handleErro = () => {
        this.setState({
            msgErro: this.state.dica[5]
        })
        this.props.history.push({
            pathname: '/erro'
        })

    }

    handleResposta = (value) => {
        if (value) {
            this.handleMudaPista()
        } else {
            this.handleErro()
        }
    }


    render() {

        return (
            <div>
                <Header
                    titulo='A Jornada de Itan'
                    imagem={principal}
                    historia='Itan tinha poucos anos de vida quando foi levado à força para um navio negreiro, junto à sua mãe, Inaê. Nascidos em um povoado na costa africana, mãe e filho tiveram suas vidas submetidas à escravidão em meados de 1840. 
            Ao chegar na costa brasileira, Inaê e Itan foram separados, vendidos como mercadoria a pessoas diferentes. Anos se passaram até que Inaê conseguiu  comprar sua liberdade, à custa de vender quitutes como ganhadeira. Já liberta, Inaê foi em busca do seu filho perdido. Ela sabia que a jornada seria extramamente difícil, mas com a rede de apoio formada por africanos libertos e escravizados, Inaê partiu em busca de Itan.'
                    instrucao='Você pode fazer parte desta rede e ajudar Inaê? Basta seguir as pistas para acharmos ITAN:'
                />

                {this.state.dicaAtual.options === undefined ?

                    <div className='game-pista'>
                        <h3>{this.state.dicaAtual.titulo}</h3>
                        <p>{this.state.dicaAtual.descricao}</p>
                    </div> :
                    <div className='game-container'>
                        <div className='game-pista'>
                            <h3>{this.state.dicaAtual.titulo}</h3>
                            <p>{this.state.dicaAtual.descricao}</p>

                        </div>

                        <div className='game-options'>

                            {this.state.dicaAtual.options.sort(this.randOrd).map(item => {

                                return (
                                    <Button
                                        handleClick={() => this.handleResposta(item.value)}
                                    >
                                        {item.label}
                                    </Button>

                                )
                            })
                            }
                        </div>


                    </div>
                }


            </div>
        )
    }
}

export default Home