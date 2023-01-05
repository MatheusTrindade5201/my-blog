import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterBar from "./components/footer"
import HeaderBar from "./components/header"
import StandardPage from "./components/standardPage"
import AboutMe from "./Pages/AboutMe"
import Home from "./Pages/Home"
import GlobalStyle from "./style/globalStyle"

const AppRouter = () => {
    return(
        <BrowserRouter>
            <HeaderBar />
            <Routes>
                <Route path="/" element={<StandardPage />}>
                    <Route index element={<Home />} />
                    <Route path="aboutMe" element={<AboutMe />} />
                </Route>
            </Routes>
            <GlobalStyle />
            <FooterBar />
        </BrowserRouter>
    )
}

export default AppRouter