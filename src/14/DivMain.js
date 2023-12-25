import { useRecoilValue } from "recoil";
import Div1 from "./Div1";
import { DivAtom, DivAtom2 } from "./DivAtom"


const DivMain = () => {
    const n = useRecoilValue(DivAtom) ;
    const n2 = useRecoilValue(DivAtom2) ;

    return (
        <main className="w-3/4 bg-lime-600 container justify-center ">
            <div className="flex justify-center align-center m-10 p-10">
                    n = {n} , n2 = {n2}
                <h1 className="w-3/4 h-80 bg-lime-900">
                    <Div1 />
                </h1>
            </div>
        </main>
    )
}

export default DivMain
