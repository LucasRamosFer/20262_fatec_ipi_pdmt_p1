import React, { Component } from 'react'
import { GEOAPIFY_KEY } from '../utils/chaves'
import { Button } from '@primereact/ui/button';

class meuPonto extends Component {
    state = {
        agora: Date.now()
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                agora: Date.now()
            })
            console.log('executando timer')
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('MeuPonto removido')
    }

    render() {
        const {
            latitude,
            longitude,
            horarioLocalizacao,
            onAtualizar

        } = this.props

        const segundos = Math.floor((this.state.agora - horarioLocalizacao) / 1000)
        const hemisferio = latitude < 0 ? 'Hemisfério Sul' : 'Hemisfério Norte'

        const url = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=300&center=lonlat:${longitude},${latitude}&zoom=16&marker=lonlat:${longitude},${latitude};color:%23d32f2f;size:48&apiKey=${GEOAPIFY_KEY}`

        return (
            <div className="flex flex-column align-items-center text-center w-full">
                <img
                    src={url}
                    alt="Mapa da sua localização"
                    className="w-full max-w-30rem my-3"
                />

                <p>
                    Latitude: {latitude.toFixed(4)} | Longitude: {longitude.toFixed(4)} | {hemisferio} | Localização obtida há {segundos} s
                </p>
            
                <Button
                    className="mb-3 p-3 border-2 border-round cursor-pointer bg-white"
                    onClick={onAtualizar}
                    style={{
                        borderColor: '#4F46E4',
                        color: '#4F46E4',
                        fontSize: '14px',
                        borderRadius: '6px'}}>
                    <i className="pi pi-refresh mr-2" />
                    Atualizar localização
                </Button>
            </div>
        )
    }


}

export default meuPonto