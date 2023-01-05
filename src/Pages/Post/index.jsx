import { useParams } from "react-router-dom"
import { PostPageWrapper } from "./style"
import ReactMarkdown from "react-markdown";

import posts from '@/json/posts.json';
import PostBody from "@/components/postBody";

const Post = () => {

    const path = useParams();
    const post = posts.find((post) => {
        return post.id === Number(path.id)
    })

    if(!post){
        return <h1 style={{marginTop: '2.5rem'}}>Post not found</h1>
    }

    return(
        <PostPageWrapper>
            <PostBody 
            bannerPath={`/posts/${post.id}/capa.png`} 
            title={post.titulo}
            >
                <ReactMarkdown className="post-markdown-container">
                    {post.texto}
                </ReactMarkdown>
            </PostBody>
        </PostPageWrapper>
    )
}

export default Post