import { Carousel,Grid, Row, Col } from 'rsuite';

const Slider=()=>{
    return(
        <Grid id='home' fluid>
            <Row className="show-grid">
                <Col>
                    <div className="slider-session">
                        <Carousel   placement='left'  className="custom-slider" autoplay>
                            <div className="slider-img">
                                <img src="/slider-2.jpg"/>
                                <span className="img-caption">
                                        Hukuk
                                </span>
                                <i className="fas fa-angle-double-down"/>
                            </div>

                            <div className="slider-img">
                                <img src="/slider.jpg"/>
                                <span className="img-caption">
                                        Sizi Görmek Güzel...
                                </span>
                                <i className="fas fa-angle-double-down"/>
                            </div>

                            <div className="slider-img">
                                <img src="/slider-2.jpg"/>
                                <span className="img-caption">
                                        VERCEL HUKUK...
                                </span>
                                <i className="fas fa-angle-double-down"/>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}
export default Slider;