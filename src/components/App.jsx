import React from "react"
import Cartao from "./Cartao"
import Creditos from "./Creditos"
import Loading from "./Loading"
import MeuPonto from "./MeuPonto"
import geoapifyClient from "../utils/geoapifyClient"
import Busca from "./Busca"
import ListaLugares from "./ListaLugares"

class App extends React.Component {
    state = {
        latitude: null,
        longitude: null,
        horarioLocalizacao: null,
        mensagemDeErro: null,
        lugares: [],
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

    onBuscaRealizada = async (categoria, raio) => {
        const { latitude, longitude } = this.state
        try {
            const resposta = await geoapifyClient.get('places', {
                params: {
                    categories: categoria,
                    filter: `circle:${longitude},${latitude},${raio}`,
                    bias: `proximity:${longitude},${latitude}`,
                    limit: 20
                }
            })
            this.setState({ lugares: resposta.data.features }, () => console.log('Lugares no state:', this.state.lugares))

        } catch (erro) {
            console.error('Erro ao buscar locais:', erro)
        }
    }

    render() {

        return (

            <div className="grid">
                {/* Cabeçalho */}
                <div className="col-12">


                    <h1 className="titulo">
                        <i class="pi pi-map-marker " style={{ color: 'red' }}></i>
                        RolêRadar
                    </h1>
                    <p style={this.estiloSubtitulo}>
                        Descubra o que existe perto de você
                    </p>

                    <Creditos />
                </div>

                <div className="col-6 ">

                    <div className="flex justify-content-center">
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
                    <div className="flex justify-content-center gap-4 mt-3 mb-3 " >
                        <Cartao cabecalho="O que você procura?">
                            <Busca onBuscaRealizada={this.onBuscaRealizada} />
                        </Cartao>

                    </div>
                </div>

                <div className="col-6">
                        <ListaLugares 
                            lugares = {this.state.lugares}
                        />
                </div>



                <div className="col-12">
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
