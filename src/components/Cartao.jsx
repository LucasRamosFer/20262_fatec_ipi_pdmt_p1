import React from 'react'

const Cartao = (props) => {
  return (
    <div className="card border-round border-1 border-gray-500">
        <div className="card-header text-500 pl-2">
            {props.cabecalho}
        </div>
        <div className="card-body border-1 border-gray-400 pl-2">
            {props.children}
        </div>
    </div>
    
  )
}

export default Cartao