import { useEffect, useState } from 'react'
import axios from 'axios'

import PageTemplate from '../../components/PageTemplate'
import Card from '../../components/common/Card/Card'
import styles from '../../styles/Browse.module.css'

function Browse(props) {

    const [products, setProducts] = useState([])

    const URL = 'http://localhost:3003/oapi'
    useEffect(async function () {
        const productsFetched = await axios.get(`${URL}/products`).then(resp => resp.data)

        setProducts(productsFetched)
    }, [])

    return (
        <PageTemplate>
            <main>
                <div className={styles.browsePage}>
                    {/* <div className="styles.navAside">
                    <Paper className="styles.paper">
                        <div className="styles.categories">
                            <a href="/produtos" className="styles.categoriesTitle">
                                <h2>Categorias</h2>
                            </a>
                            {categories.map((category) => (
                                <h5 key={category} >
                                <a href={`/produtos/${category}`} 
                                    onClick={() => {
                                        setCategory({ ...initialCategoryState                </div> */}
                    <div className={styles.browser}>
                        {products.map((product, index) => (
                            <Card product={product} key={index} className={styles.card} />
                        ))}
                        {products.map((product, index) => (
                            <Card product={product} key={index} className={styles.card} />
                        ))}
                        {products.map((product, index) => (
                            <Card product={product} key={index} className={styles.card} />
                        ))}
                        {products.map((product, index) => (
                            <Card product={product} key={index} className={styles.card} />
                        ))}
                    </div>
                    {/* <CardCarousel /> */}
                </div>
            </main>
        </PageTemplate>
    )
}

export default Browse