import Lugar from './Lugar'

const ListaLugares = ({lugares}) => {
  return (
    lugares.map((lugar, key) => (
            <div key={key}>
                <Lugar 
                    numero={key + 1}
                    nome={lugar.properties.name}
                    endereco={lugar.properties.address_line2}
                    distancia={lugar.properties.distance}
                />
            </div>
        ))
  )
}

export default ListaLugares