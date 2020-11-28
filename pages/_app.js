import '../styles/globals.css';
import 'rsuite/dist/styles/rsuite-default.css';
import 'antd/dist/antd.css';

import { Header, Content, Footer,Container } from 'rsuite';

import Header_Layout from "./Components/Layout/Header_Layout.";
import Footer_Layout from "./Components/Layout/Footer_Layout";



function MyApp({ Component, pageProps }) {
    return(
        <Container>
            <Header >    <Header_Layout/>  </Header>
            <Content >   <Component {...pageProps} />    </Content>
            <Footer id="footer">  <Footer_Layout/>     </Footer>
        </Container>
    )
}

export default MyApp
