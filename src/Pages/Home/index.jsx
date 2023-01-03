import Banner from "@/components/banner"
import { HomeWrapper } from "./style"

import posts from '@/json/posts.json';
import Post from "@/components/posts"

const Home = () => {
    console.log(posts);
    return(
        <HomeWrapper>
            <Banner />
            <ul className="list__posts">
                {posts.map((iten) => (
                    <Post key={iten.id} post={iten} />
                ))}
            </ul>
        </HomeWrapper>
    )
}

export default Home