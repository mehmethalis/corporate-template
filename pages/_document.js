import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400&display=swap" rel="stylesheet"/>

                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
                          crossOrigin="anonymous"/>

                    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
