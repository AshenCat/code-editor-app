import React, { PropsWithChildren } from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import appConfig from '../config/app.config'
import { useHistory, withRouter } from 'react-router-dom'

const AuthProvider = (props: PropsWithChildren<any>) => {
    const history = useHistory();
    const onRedirectCallback = (appState: any) => {
        history.push(appState?.returnTo || window.location.pathname)
    }

    return (
        <Auth0Provider
            domain={appConfig.auth0Domain}
            clientId={appConfig.auth0ClientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {props.children}
        </Auth0Provider>
    )
}

export default withRouter(AuthProvider)