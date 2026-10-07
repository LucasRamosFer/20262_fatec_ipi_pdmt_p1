import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className='flex flex-column'>
        <div className='flex align-items-center justify-content-center'>
            <i class="pi pi-spin pi-spinner " style={{ fontSize: '2rem'}}></i>
        </div>

        <div className='flex align-items-center justify-content-center mt-2'>
            <p className='text-primary'>
                {this.props.mensagem}
            </p>
        </div>
      </div>
    )
  }
}

Loading.defaultProps = {
    mensagem: "Carregando..."
}