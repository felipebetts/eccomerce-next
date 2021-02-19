import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'


import styles from './Card.module.css'

function Card(props) {


  // const handleButtonClick = (e) => {
  //   e.preventDefault()
  //   props.addToCart(props.product)
  // }

    return (
      <a href={`/produtos/${props.product._id}`} style={{ textDecoration: 'none'}}>
        <Paper className={styles.card} elevation={0}>
            {/* <Paper className={styles.cardImageContainer} elevation={0} square>
            </Paper> */}
            <div className={styles.cardImageContainer}>
                <img src={props.product.imageSrc} alt="" className={styles.cardImage} />
            </div>
            <article className={styles.cardText}>
                <div className={styles.cardPrice}>
                  <span className={styles.oldPrice}>De R${parseInt(props.product.price * 1.2) + 0.99}</span>
                  <br />
                  <strong className={styles.newPrice}>Por R${props.product.price}</strong>
                </div>
                <div >
                  <h3 className={styles.cardTitle}>{props.product.name}</h3>
                </div>
                <div className={styles.cardSubtitle}>
                  <span>{props.product.shortDescription}</span>
                </div>
                {/* <div className="styles.cardButton">
                  <Button variant="contained" color="secondary" onClick={(e) => handleButtonClick(e)}><strong><ShoppingCartIcon /> Adicionar ao carrinho</strong></Button>
                </div> */}
            </article>
        </Paper>
      </a>
  )
}

export default Card