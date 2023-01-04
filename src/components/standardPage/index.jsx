import { Outlet } from "react-router-dom"
import Banner from "@/components/banner"

const StandardPage = () => {
    return(
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}

export default StandardPage