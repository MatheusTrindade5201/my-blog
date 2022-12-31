import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeaderBar from "./components/header"
import AboutMe from "./Pages/AboutMe"
import Home from "./Pages/Home"

const AppRouter = () => {
    return(
        <BrowserRouter>
        <HeaderBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutMe" element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter