import Carousel from 'react-material-ui-carousel'
import {Button, Paper} from '@material-ui/core'

import styles from './Carousel.module.css'


function Item(props) {

    // console.log(props.item.imageRef)

    return (
        <Paper square  className={styles.carouselItem} style={{ backgroundImage: `url(${props.item.imageSrc})` }}>
            <h2 className={styles.white} >{props.item.name}</h2>
            <p className={styles.white} >{props.item.description}</p>
        
            {/* <img src={`${props.item.imageSrc}`} alt=""/> */}
        
            <Button className={styles.CheckButton} style={{ outline: "none", marginBottom: "10px", color: "#eee", border: "solid 1px #eee" }}>
                Confira!
            </Button>
        </Paper>
    )
}

function MyCarousel(props) {
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageSrc: "/images/paoDeAcucar.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imageSrc: "/images/noiva-no-mato.jpg"
        },
        {
            name: "Random Name #3",
            description: "Show!",
            imageSrc: "/images/catedral.jpg"
        },
        {
            name: "Random Name #4",
            description: "Natureza",
            imageSrc: "/images/lago.jpg"
        }
    ]

    return (
        <div className={styles.carousel}>
            <Carousel swipe={true} >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    )
}

export default MyCarousel