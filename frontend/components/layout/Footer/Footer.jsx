import styles from './Footer.module.css'

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.cols}>
                <div className={styles.col}>
                    Copyright &copy; 2021
                    <br/>
                    <br/>
                    <i>Ecommerce</i>
                </div>
                <div className={styles.col}>
                    <a href="#/curso" className={styles.footerLink}><strong>Produtos</strong></a>
                    <a href="#/ebook" className={styles.footerLink}>Encomendas</a>
                    <a href="#/produto" className={styles.footerLink}>Projetos</a>
                </div>
                <div className={styles.col}>
                    <a href="#/empresa" className={styles.footerLink}><strong>Empresa</strong></a>
                    <a href="#/sobre" className={styles.footerLink}>Sobre</a>
                    <a href="#/noticias" className={styles.footerLink}>Notícias</a>
                    <a href="#/eventos" className={styles.footerLink}>Eventos</a>
                    <a href="#/blog" className={styles.footerLink}>Blog</a>
                </div>
            </div>
            <div className={styles.credits}>
                <p>Desenvolvido por <a href="https://github.com/felipebetts" target="_blank" rel="noreferrer">Felipe Betts</a></p>
            </div>
        </div>
    )
}

export default Footer