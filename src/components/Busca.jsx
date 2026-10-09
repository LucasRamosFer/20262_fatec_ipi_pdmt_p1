import React, { Component } from 'react'
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext'

export default class Busca extends Component {
  state = {
    categoria: null,
    raio: 1000,
    erro: null,
  }

  categorias = [
    {
      rotulo: 'Cafés',
      chave: 'catering.cafe'
    },
    {
      rotulo: 'Restaurantes',
      chave: 'catering.restaurant'
    },
    {
      rotulo: 'Parques',
      chave: 'leisure.park'
    },
    {
      rotulo: 'Farmácias',
      chave: 'healthcare.pharmacy'
    },
    {
      rotulo: 'Supermercados',
      chave: 'commercial.supermarket'
    },
    {
      rotulo: 'Museus',
      chave: 'entertainment.museum'
    }
  ]

  onRaioAlterado = (evento) => {
    this.setState({ raio: evento.target.value })
  }

  onFormSubmit = (evento) => {
    evento.preventDefault()

    if (this.state.categoria === null)
      this.setState({ erro: 'Escolha uma categoria' })
    if (this.state.raio < 100 || this.state.raio > 5000)
      this.setState({ erro: 'Informe um raio inteiro entre 100 e 5000 metros.' })

    if (this.state.categoria !== null && this.state.raio >= 100 && this.state.raio <= 5000) {
      this.setState({ erro: null })
      this.props.onBuscaRealizada(this.state.categoria, this.state.raio)
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex justify-center flex-wrap gap-1 m-2'>
          {
            this.categorias.map((categoria, indice) => (
              <div key={indice}>
                <Button
                  type="button"
                  severity="help"
                  rounded
                  onClick={() => {
                    this.setState({ categoria: categoria.chave })
                  }}>
                  {categoria.rotulo}
                </Button>

              </div>

            ))
          }
        </div>

        <InputText
          value={this.state.raio}
          onChange={this.onRaioAlterado}
          className="w-full"
          placeholder={this.props.dica}
        />
        <div className="m-2">
          <Button
            type="submit">
            Buscar
          </Button>

          <label style={{ color: 'red' }}>
            {this.state.erro}
          </label>

        </div>

      </form>

    )
  }
}

Busca.defaultProps = {
  dica: "Raio em metros (100 a 5000)"
}
