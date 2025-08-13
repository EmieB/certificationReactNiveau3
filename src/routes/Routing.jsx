import { MemoryRouter, Route, Routes } from "react-router-dom";
import Test from "../components/Test";

export default function Routing() {
    return (
        <MemoryRouter>
            <div>
                <Routes>
                    <Route
                        index
                        element={
                            <Test />
                        } />

                </Routes>
            </div>
        </MemoryRouter>
    );
}
