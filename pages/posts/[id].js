import axios from "axios";
import  {Col, Grid, Row,Panel} from 'rsuite';


const Post_Detail=({post})=>{

    return(
        <Grid id='blog' fluid className="grid-blog">
            <Row>
                <Col>
                    <Panel className='post-detail-card'  bordered header={<h4>{post.title} <p className={'blog-post-detail-date'}><i className="far fa-calendar-alt"/>   {post.created_at.toString().slice(0,10)}</p></h4>}>
                        <div className='post-body'>
                            {post.body}
                        </div>
                    </Panel>

                </Col>
            </Row>

        </Grid>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    // fetch posts from a url endpoint
    const response = await axios.get(`${process.env.API_BASE_URL}/posts`);
    const posts = await response.data;

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => `/posts/${post.id}`)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // fetch posts from a url endpoint
    const response = await axios.get(`${process.env.API_BASE_URL}/posts/${params.id}`);
    const post = await response.data;

    // Pass post data to the page via props
    return { props: { post } }
}
export default Post_Detail;