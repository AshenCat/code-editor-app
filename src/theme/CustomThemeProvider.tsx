import { createTheme, ThemeProvider } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'
import { useAppSelector } from '../state/hooks'
import { appColors, darkModeColors } from './colors'

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
    const darkMode = useAppSelector(state => state.darkMode)
    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: appColors.primary,
            },
        },
        background: darkMode ? darkModeColors.background : appColors.background,
        font: darkMode ? darkModeColors.font : appColors.font,
    })
    return (
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    )
}

export default CustomThemeProvider

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        background: string,
        font: string
    }
    interface ThemeOptions {
        background: string,
        font: string,
    }
}