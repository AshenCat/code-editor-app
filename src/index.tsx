import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import AuthProvider from './auth/AuthProvider'
import ReduxProvider from './state/ReduxProvider'
import CustomThemeProvider from './theme/CustomThemeProvider'

ReactDom.render(
    <ReduxProvider>
        <Router>
            <AuthProvider>
                <CustomThemeProvider>
                    <App />
                </CustomThemeProvider>
            </AuthProvider>
        </Router>
    </ReduxProvider>, 
    document.getElementById('root'))