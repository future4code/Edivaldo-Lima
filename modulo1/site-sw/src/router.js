import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterListPage } from "./pages/CharacterListPage/CharacterListPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage/CharacterDetailPage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CharacterListPage />} />
                <Route path="/characterdetail" element={<CharacterDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}