import Post from "@/components/postsCard"
import { RecomendationWrapper } from "./style"
import posts from '@/json/posts.json'

const Recomendation = ({currentPost}) => {
    const recomendations = posts.filter(post => post.id !== currentPost).slice(0, 4)

    return(
        <RecomendationWrapper>
            <h2>Recomendations:</h2>
            <div className="cards">
                {recomendations.map(recomendation => <Post key={recomendation.id} post={recomendation}/>)}
            </div>
        </RecomendationWrapper>
    )
}

export default Recomendation 