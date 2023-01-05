import { BiographyWrapper } from "./style";

const Biography = ({title, children, bannerPath, biographyPhoto}) => {
    return(
        <BiographyWrapper>
            <div className="about__me-banner"
                style={{backgroundImage: `url(${bannerPath})`}}
            >
                <h2 className="title">{title}</h2>
            </div>

            <div className="content">
            <img className="biography__photo" src={biographyPhoto} />
            {children}
            </div>
        </BiographyWrapper>
    )
}

export default Biography