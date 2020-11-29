import {Grid} from 'rsuite';
import {List} from 'antd';

const Blog=({posts})=>{
    return(
        <Grid id='blog' fluid className="grid-blog">
            <h1>Blog</h1>

            <List
                className="blog-list"
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 2,
                }}
                dataSource={posts}

                renderItem={item => (

                    <List.Item
                        key={item.title}
                        actions={[]}
                        extra={
                            <img
                                width={250}
                                alt="post_cover"
                                src={`${process.env.API_BASE_URL}${item.cover[0].url}`}
                            />
                        }
                    >
                        <List.Item.Meta
                            title={<a href={`/posts/${item.id}`}><h3>{item.title}</h3></a>}
                            description={<h6>{`${item.body.slice(0,300)}...`}</h6>}
                        />
                        {<p className={'blog-post-date'}><i className="far fa-calendar-alt"/>   {item.created_at.toString().slice(0,10)}</p>}
                    </List.Item>

                )}
            />

        </Grid>

    )
}



export default Blog;