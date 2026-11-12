import { useState, useEffect } from "react";

type Post ={
    userId: number,
    Id: number,
    title: string,
    body: string
}

const PostsPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const getPosts = async () => {     
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');  
            const jsonResp = await response.json();
            setPosts(jsonResp);
        }
    

    useEffect(() => {
            getPosts();
        }, []); 

    return (
        <section>            
            <div>Posts Page</div>

            {posts.map((postItem) => {
                    return (
                        <div key={postItem.Id}>
                            <h3>{postItem.title}</h3>
                            <p>{postItem.body}</p>
                        </div>
                        )
                    }
                ) 
            }      
        </section>
    )
};

export default PostsPage;