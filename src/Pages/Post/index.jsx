import { Route, Routes, useParams } from "react-router-dom"
import { PostPageWrapper } from "./style"
import ReactMarkdown from "react-markdown";

import posts from '@/json/posts.json';
import PostBody from "@/components/postBody";
import Page404 from "../Error404";
import StandardPage from "@/components/standardPage";
import Recomendation from "@/components/recomendations";

const Post = () => {

    const path = useParams();
    const post = posts.find((post) => {
        return post.id === Number(path.id)
    })

    if (!post) {
        return <Page404 />
    }

    return (
        <Routes>
            <Route path="*" element={<StandardPage />}>
                <Route index element={
                    <PostPageWrapper>
                    <PostBody
                        bannerPath={`/posts/${post.id}/capa.png`}
                        title={post.titulo}
                    >
                        <ReactMarkdown className="post-markdown-container">
                            {post.texto}
                        </ReactMarkdown>
                    </PostBody>
                    <Recomendation currentPost={post.id} />
                </PostPageWrapper>
                }/>
            </Route>
        </Routes>

    )
}

export default Post