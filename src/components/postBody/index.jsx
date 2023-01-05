import { PostBodyWrapper } from "./style";

const PostBody = ({title, children, bannerPath, postPhoto}) => {
    return(
        <PostBodyWrapper>
            <div className="about__me-banner"
                style={{backgroundImage: `url(${bannerPath})`}}
            >
                <h2 className="title">{title}</h2>
            </div>

            <div className="content">
            <img className="biography__photo" src={postPhoto} />
            {children}
            </div>
        </PostBodyWrapper>
    )
}

export default PostBody