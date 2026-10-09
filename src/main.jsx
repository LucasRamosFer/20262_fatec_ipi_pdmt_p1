import { createRoot } from 'react-dom/client'
import {PrimeReactProvider} from '@primereact/core'
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import 'primeflex/themes/primeone-light.css'
import App from "./components/App";
import './styles.css'
import { PRIMEUI_LICENSE } from './utils/chaves';

const primereact = {
  theme: {
    preset:Aura
  },
  license: PRIMEUI_LICENSE
}

createRoot(document.getElementById('root')).render(
    <PrimeReactProvider {...primereact}>
        <App />
    </PrimeReactProvider>
)