import { BrowserRouter, Routes, Route } from "react-router-dom"
import FcstMain from "./FcstMain"
import FcstNav from "./FcstNav"
import UltraSrtFcst from "./UltraSrtFcst"
import VillageFcst from "./VillageFcst"
const Fcst = () => {
    return (
        <BrowserRouter>
            <main className="container mx-auto">
                <FcstNav />
                <Routes>
                    <Route path="/" element={<FcstMain />} />
                    <Route path="/ultra/:dt/:area/:x/:y" element={<UltraSrtFcst />} />
                    <Route path="/village/:dt/:area/:x/:y" element={<VillageFcst />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Fcst
