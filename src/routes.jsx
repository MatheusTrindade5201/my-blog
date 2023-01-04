import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterBar from "./components/footer"
import HeaderBar from "./components/header"
import AboutMe from "./Pages/AboutMe"
import Home from "./Pages/Home"
import GlobalStyle from "./style/globalStyle"

const AppRouter = () => {
    return(
        <BrowserRouter>
            <HeaderBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutMe" element={<AboutMe />} />
            </Routes>
            <GlobalStyle />
            <FooterBar />
        </BrowserRouter>
    )
}

export default AppRouter