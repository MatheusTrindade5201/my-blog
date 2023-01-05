import { Link } from "react-router-dom"
import { PostWrapper } from "./style"

const Post = ({post}) => {
    return (
        <Link to={`post/${post.id}`} style={{textDecoration: 'none'}}>
            <PostWrapper>
                <img className="post__image" src={`/posts/${post.id}/capa.png`} />
                <p>{post.titulo}</p>
                <button>Read</button>
            </PostWrapper>
        </Link>
    )
}

export default Post