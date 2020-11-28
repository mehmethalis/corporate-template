import { Grid, Row, Col,Divider } from 'rsuite';
import Image from "next/image";
const Information=()=>{
    return(
        <Grid id='about' fluid >
            <Row className="show-grid" className="row-info">
                <Col xs={24} md={12} className="info">
                    <div>
                        <h2>Vercel Hukuk & Danışmanlık</h2>
                        <h4>Geniş yelpazede donanımlı hizmet veren
                            bir avukatlık bürosuyuz..</h4>
                        <Divider />
                        <h6>Ticari yaşamın ve ticari ilişkilerin her geçen gün multi-disipliner bir hâl alması neticesinde, profesyonel hukuki danışmanlık hizmetinin kritik bir önemi haiz olduğunun bilincindeyiz.</h6>
                        <br/>
                        <h6>Bu kapsamda, statik değil, aktif ve değişime açık bir hukuki anlayış ile avukatlık mesleğini amatör bir ruh, profesyonel bir bakış açısıyla icra etmekteyiz.</h6>
                    </div>
                </Col>
                <Col xs={24} md={12} className="info-img">
                    <Image
                        src="/vercel.svg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                    />
                </Col>
            </Row>
        </Grid>

    )

}
export default Information;