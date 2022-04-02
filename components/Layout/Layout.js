
import styles from './layout.module.scss'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer' 

const Layout = (props) => {
    return (
        <div className={`${styles.layout}`}>
            <Header />
            <Navbar />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout