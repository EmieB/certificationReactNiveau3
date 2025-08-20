import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";


export default function Routing() {
    return (
        <MemoryRouter>
            <div>
                <Routes>
                    <Route
                        index
                        element={
                            <Home />
                        } />

                </Routes>
            </div>
        </MemoryRouter>
    );
}
