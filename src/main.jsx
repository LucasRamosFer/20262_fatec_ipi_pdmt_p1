import { createRoot } from 'react-dom/client'
import {PrimeReactProvider} from '@primereact/core'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import 'primeflex/themes/primeone-light.css'
import App from "./components/App";
import './styles.css'
import { PRIMEUI_LICENSE } from './utils/chaves';

createRoot(document.getElementById('root')).render(
    <PrimeReactProvider license= {PRIMEUI_LICENSE}>
        <App />
    </PrimeReactProvider>
)