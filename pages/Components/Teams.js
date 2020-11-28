import {Grid, Row, Col, Panel} from 'rsuite';

const Teams=()=>{
    return(
        <Grid id='teams' fluid className="grid-teams">
            <h2>Avukatlar</h2>

            <Row className="show-grid row-services">
                <Col sm={12} md={6}>
                    <Panel className='card-team' shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                        <img src="/person-3.webp" height="240" />
                        <Panel header="Av. John Doe">
                            <p>
                                <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                            </p>
                        </Panel>
                    </Panel>
                </Col>
                <Col sm={12} md={6}>
                    <Panel className='card-team' shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                        <img src="/person-3.webp" height="240" />
                        <Panel header="Av. John Doe">
                            <p>
                                <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                            </p>
                        </Panel>
                    </Panel>
                </Col>
                <Col sm={12} md={6}>
                    <Panel className='card-team' shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                        <img src="/person-3.webp" height="240" />
                        <Panel header="Av. John Doe">
                            <p>
                                <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                            </p>
                        </Panel>
                    </Panel>
                </Col>
                <Col sm={12} md={6}>
                    <Panel className='card-team' shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                        <img src="/person-3.webp" height="240" />
                        <Panel header="Av. John Doe">
                            <p>
                                <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
                            </p>
                        </Panel>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    )
}

export default Teams;