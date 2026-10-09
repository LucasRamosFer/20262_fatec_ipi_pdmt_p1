import Cartao from './Cartao'

const Lugar = ({ numero,nome,endereco,distancia }) => {

    const formatarDistancia = (distancia) => {
        if (distancia < 1000) {
            const [inteira, decimal] = distancia.toString().split(".")
            return `A ${inteira} m`
        }

        if (distancia > 1000)
            return `A ${distancia} km`
    }

    return (

        <div className='m-1'>
            <Cartao cabecalho={formatarDistancia(distancia)}>
                <div className="flex flex-wrap justift-content-start m-2">
                    <div className="m-2">
                        {numero}
                    </div>
                    <div className="flex flex-column">
                        <div className="flex">{nome}</div>
                        <div className="flex">{endereco}</div>
                    </div>
                </div>
            </Cartao>
        </div>

    )
}

export default Lugar