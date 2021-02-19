import { useState, useEffect, Component } from 'react';
import { useRouter } from 'next/router'

import PageTemplate from '../../components/PageTemplate'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { ShoppingCart } from '@material-ui/icons'
// import Zoom from 'react-img-zoom'
// import ReactImageZoom from 'react-image-zoom'
// import ReactImageMagnify from 'react-image-magnify'

// import Breadcrumbs from '../components/common/Breadcrumbs/Breadcrumbs'

import axios from 'axios';
import styles from '../../styles/Product.module.css'

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    _id: '6015a7052eec51043c2ea9b4'
                }
            }
        ],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const _id = context.params._id

    return {
        props: {
            _id
        }
    }
}

function Product(props) {
    const [ valor, setValor ] = useState(0)
    const [ product, setProduct ] = useState({})
    // const user = auth.user || localStorage.getItem('_eccomerce_user')
    // console.log(user)
    
    const URL = 'http://localhost:3003/oapi/products'
    useEffect(async function() {
        if(props._id) {
            const productFetched = await axios.get(`${URL}/${props._id}`).then(resp => resp.data)
            return setProduct(productFetched)
        }
    }, [props._id])
    
    // const { product } = props
    
    // console.log(product)
    // const product = props.products[props._id - 1] ? props.products[_id - 1] : props.products[0]

    const onChange = value => setValor(value);
    
    // function handleButtonClick() {
    //     // e.preventDefault()
    //     // const user = props.auth.user
    //     console.log(user)
    //     const cartUser = { ...user }
    //     const email = `${user.email}`
    //     if(email) {
    //         console.log(email)
    //         props.addToCart(props.product, email, cartUser)
    //     }
    //     // else {
    //     //     props.addToCart(props.product)
    //     // }
    //     // console.log(props.cart)
    // }

    // const imgProps = {width: 450, height: 400, zoomWidth: 500, img: props.product.imageSrc || '/images/eu.jpg'}
    
    // if(props.imageSrc === undefined) {
    //     return (
    //         <div className={styles.productPage}>
    //             Loading...
    //         </div>
    //     )
    // }

    if(product) {
        return (
            <PageTemplate>
                <div className={styles.productPage}>
                    <div className={styles.breadcrumbs}>
                        {/* <Breadcrumbs /> */}
                    </div>
                    <div className={styles.product}>
                        <div className={styles.carouselContainer}>
                            <Carousel slidesPerPage={1} value={valor} onChange={onChange}>
                                {/* <Zoom
                                    img={props.product.imageSrc}
                                    zoomScale={3}
                                    width={450}
                                    height={450}
                                /> */}
                                {/* <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: props.product.imageSrc
                                    },
                                    largeImage: {
                                        src: props.product.imageSrc,
                                        width: 1200,
                                        height: 1800
                                    }
                                }} /> */}
                                {/* <Zoom
                                    img={props.product.imageSrc ? props.product.imageSrc : 'https://picsum.photos/400'}
                                    zoomScale={3}
                                    width={450}
                                    height={450}
                                />
                                <Zoom
                                    img={props.product.imageSrc ? props.product.imageSrc : 'https://picsum.photos/400'}
                                    zoomScale={3}
                                    width={450}
                                    height={450}
                                />
                                <Zoom
                                    img={props.product.imageSrc ? props.product.imageSrc : 'https://picsum.photos/400'}
                                    zoomScale={3}
                                    width={450}
                                    height={450}
                                /> */}
                                <img key={1} src={product.imageSrc} style={{ height: '450px', width: '400px' }} />
                                <img key={2} src={product.imageSrc} style={{ height: '450px', width: '400px' }} />
                                <img key={3} src={product.imageSrc} style={{ height: '450px', width: '400px' }} />
                                {/* <ReactImageZoom {...imgProps} /> */}
                                {/* <ReactImageZoom {...imgProps} /> */}
                            </Carousel>
                            <Dots
                                value={valor}
                                onChange={onChange}
                            thumbnails={[
                                (<img key={1} src={product.imageSrc} className={styles.carouselImageSmall} alt={product.name} />),
                                (<img key={2} src={product.imageSrc} className={styles.carouselImageSmall} alt={product.name} />),
                                (<img key={3} src={product.imageSrc} className={styles.carouselImageSmall} alt={product.name} />),
                            ]}
                            />
                        </div>
                        <div className="styles.productDescription">
                            <h2 className="styles.title">{product.name}</h2>
                                <Divider />
                            <div className="styles.description">{product.shortDescription}</div>
                                <Divider />
                            <p className="styles.price">Por apenas R$ <strong>{product.price}</strong></p>
                            <Button variant="contained"
                                color="primary" 
                                fullWidth 
                                size="large" 
                                onClick={() => handleButtonClick()}
                            >
                                <ShoppingCart style={{ marginRight: "10px"}} />  Adicionar ao carrinho
                            </Button>
                        </div>
                    </div> 
                    <div className="styles.bigDescription">
                        
                    </div>   
                </div>
            </PageTemplate>
        ) 
    } else {
        return (
            <PageTemplate>
                <div className={styles.productPage}>
                    <div className={styles.breadcrumbs}>
                        {/* <Breadcrumbs /> */}
                    </div>
                    <div className={styles.product}>
                        <div className={styles.carouselContainer}>
                            
                        </div>
                        <div className="styles.productDescription">
                            {/* <h2 className="styles.title">{product.name}</h2>
                                <Divider />
                            <div className="styles.description">{product.shortDescription}</div>
                                <Divider />
                            <p className="styles.price">Por apenas R$ <strong>{product.price}</strong></p> */}
                            <div>Carregando...</div>
                            <Button variant="contained"
                                color="primary" 
                                fullWidth 
                                size="large" 
                                onClick={() => handleButtonClick()}
                            >
                                <ShoppingCart style={{ marginRight: "10px"}} />  Adicionar ao carrinho
                            </Button>
                        </div>
                    </div> 
                    <div className="styles.bigDescription">
                        
                    </div>   
                </div>
            </PageTemplate>
        )
    }
}

export default Product