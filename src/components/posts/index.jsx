import { PostWrapper } from "./style"

const Post = ({post}) => {
    return (
        <PostWrapper>
            <img className="post__image" src={`/posts/${post.id}/capa.png`} />
            <p>{post.titulo}</p>
            <button>Read</button>
        </PostWrapper>
    )
}

export default Post