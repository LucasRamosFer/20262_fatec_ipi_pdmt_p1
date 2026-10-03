const App = () => {
    const estiloSubtitulo = {
        marginTop: 8,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: '24px',
        color: '#7C7C7C',
        width: '100%',
        textAlign: 'center',
    }

    const obterAno = () => {
        const data = new Date()
        const anoAtual = data.getFullYear()
        return anoAtual
    }

    return (

        <div>
            {/* Cabeçalho */}
            <div>
                <h1 className="titulo">
                    RolêRadar
                </h1>
                <p style={estiloSubtitulo}>
                    Descubra o que existe perto de você
                </p>
            </div>



            <div>
                {/* Rodapé */}
                <footer style={{ textAlign: 'center', color: '#7C7C7C' }}>
                    RolêRadar © {obterAno()}
                </footer>
            </div>
        </div>
    )

}



export default App
