import { Grid, Row, Col } from 'rsuite';

const Footer_Layout=()=>{
    return(
        <div className={"footer"}>
            <Grid fluid className={"footer-grid"}>
                <Row className="show-grid row-footer" >
                    <Col xs={24} md={8} >
                        <img alt="logo" src="/vercel.svg"/>

                    </Col>
                    <Col xs={24} md={8} className='footer-about' >
                        <p> Ticari yaşamın ve ticari ilişkilerin her geçen gün multidisipliner bir hâl alması neticesinde, profesyonel hukuki danışmanlık hizmetinin kritik bir önemi haiz olduğunun bilincindeyiz.
                        </p>
                    </Col>
                    <Col xs={24} md={8} className="footer-link">
                        <a href='https://github.com/mehmethalis' target='_blank' rel='noreferrer' ><i className="fab fa-github" /></a>
                        <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i className="fab fa-linkedin-in" /></a>
                        <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i className="fab fa-instagram"/></a>
                        <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i
                            className="fab fa-twitter"/></a>
                        <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i
                            className="fab fa-facebook-f"/></a>
                    </Col>
                </Row>
                <hr className="solid"/>

                <p>©   {new Date().getFullYear()} Tüm Hakları Saklıdır. <span id='footer-designer'>|    Designed <i className="fas fa-heart"/> <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mehmethalis/'>  Halis</a></span>
                </p>
            </Grid>
        </div>

    )
}

export default Footer_Layout;