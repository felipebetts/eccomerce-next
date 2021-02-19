import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'

function PageTemplate(props) {
    return (
        <div >
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default PageTemplate