import React from "react"
import Cartao from "./Cartao"
import Creditos from "./Creditos"
import Loading from "./Loading"
import MeuPonto from "./MeuPonto"

class App extends React.Component {
    state = {
        latitude: null,
        longitude: null,
        horarioLocalizacao: null,
        mensagemDeErro: null
    }

    componentDidMount() {
        this.obterLocalizacao()
    }

    estiloSubtitulo = {
        marginTop: 8,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: '24px',
        color: '#7C7C7C',
        width: '100%',
        textAlign: 'center',
    }

    obterAno = () => {
        const data = new Date()
        const anoAtual = data.getFullYear()
        return anoAtual
    }

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    horarioLocalizacao: Date.now(),
                    mensagemDeErro: null
                })
            },
            (erro) => {
                console.log(erro)
                this.setState({
                    latitude: null,
                    longitude: null,
                    horarioLocalizacao: null,
                    mensagemDeErro: 'Não foi possível obter sua localização. Libere o acesso no navegador e atualize a página.'
                })
            }
        )

    }

    render() {

        return (

            <div>
                {/* Cabeçalho */}
                <div>


                    <h1 className="titulo">
                        <i class="pi pi-map-marker " style={{ color: 'red' }}></i>
                        RolêRadar
                    </h1>
                    <p style={this.estiloSubtitulo}>
                        Descubra o que existe perto de você
                    </p>

                    <Creditos />


                    <div>
                        {
                            (!this.state.latitude && !this.state.mensagemDeErro) ?
                                <Loading
                                    mensagem=" Aguardando permissão de localização..."
                                />
                                :
                                this.state.mensagemDeErro ?
                                    <p className="text-center">
                                        {this.state.mensagemDeErro}
                                    </p>
                                    :
                                    <Cartao cabecalho="Você está aqui">
                                        <MeuPonto
                                            latitude={this.state.latitude}
                                            longitude={this.state.longitude}
                                            horarioLocalizacao={this.state.horarioLocalizacao}
                                            onAtualizar={this.obterLocalizacao}
                                        />
                                    </Cartao>
                        }
                    </div>
                </div>


                <div>
                    {/* Rodapé */}
                    <footer style={{ textAlign: 'center', color: '#7C7C7C' }}>
                        RolêRadar © {this.obterAno()}
                    </footer>
                </div>
            </div>
        )
    }
}



export default App
