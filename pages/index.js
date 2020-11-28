import Head from 'next/head';

import Slider from "./Components/Slider";
import Information from "./Components/Information";
import Services from "./Components/Services";
import Teams from "./Components/Teams";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import axios from "axios";

const Home=({posts})=> {
    return (

        <div >
            <Head>
                <title>Vercel | Hukuk Danışmanlık</title>
                <link rel="icon" href={'/favicon.ico'} type="image/x-icon"/>
            </Head>
            <Slider/>
            <Information/>
            <Services/>
            <Teams/>
            <Blog posts={posts}/>
            <Contact/>
        </div>

    )
}

Home.getInitialProps = async (ctx) => {
    // fetch posts from a url endpoint
    const response = await axios.get(`${process.env.API_BASE_URL}/posts`);
    const data = await response.data;
    return { posts: data}
}

export default Home;