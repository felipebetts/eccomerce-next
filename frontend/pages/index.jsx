import { useEffect, useState } from 'react'
import axios from 'axios'

import PageTemplate from '../components/PageTemplate'
import Carousel from '../components/common/Carousel/Carousel'
import Card from '../components/common/Card/Card'


function Home(props) {

    const [products, setProducts] = useState([])

    const URL = 'http://localhost:3003/oapi'
    useEffect(async function () {
        const productsFetched = await axios.get(`${URL}/products`).then(resp => resp.data)

        setProducts(productsFetched)
    }, [])

    return (
        <PageTemplate>
            <Carousel />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "20px"}}>
                {products.map(product => (
                    <Card product={product} key={product._id} />
                ))}
            </div>
        </PageTemplate>
    )
}

export default Home