import { Grid, Row, Col, Panel, PanelGroup } from 'rsuite';

const Services=()=>{
    return(
        <Grid id='services' fluid className="grid-info" >
            <h1>Faaliyet Alanlarımız</h1>
            <Row className="show-grid row-services">
                <Col sm={12} md={6}><Panel className="service-card" header="Aile Hukuku" shaded><i
                    className="fas fa-users"/></Panel> </Col>
                <Col sm={12} md={6}><Panel className="service-card" header="Ceza Hukuku" shaded><i
                    className="fas fa-gavel"/></Panel></Col>
                <Col sm={12} md={6}><Panel className="service-card" header="Gayrimenkul Hukuku" shaded><i
                    className="fas fa-home"/></Panel></Col>
                <Col sm={12} md={6}><Panel className="service-card" header="İcra ve İflas Hukuku" shaded><i
                    className="fas fa-chart-area"/></Panel></Col>
            </Row>
            <Row className="show-grid row-services">
                <Col sm={12} md={6}><Panel className="service-card" header="İdare ve Vergi Hukuku" shaded><i
                    className="fas fa-copy"/></Panel></Col>
                <Col sm={12} md={6}><Panel className="service-card" header="İş ve Sosyal Güvenlik Hukuku" shaded><i
                    className="fas fa-user-shield"/></Panel></Col>
                <Col sm={12} md={6}><Panel className="service-card" header="Sigorta Hukuku" shaded><i
                    className="fas fa-car-crash"/></Panel></Col>
                <Col sm={12} md={6}><Panel className="service-card" header="Ticaret Hukuku" shaded><i
                    className="fas fa-store"/></Panel></Col>
            </Row>
        </Grid>

    )
}

export default Services;