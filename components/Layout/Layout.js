
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, blueGrey } from '@mui/material/colors';

import styles from './layout.module.scss'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[800],
        },
        secondary: {
            main: deepPurple[800],
        },
        light: {
            main: blueGrey[50],
        },
    },
});

const Layout = (props) => {
    return (
        <div className={`${styles.layout}`}>
            <Header />
            <Navbar />
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
            <Footer />
        </div>
    )
}

export default Layout