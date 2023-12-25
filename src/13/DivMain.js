import { useState } from "react";
import Div1 from "./Div1";

const DivMain = () => {

    const [n, setN] = useState(0);

    return (
        <main className="w-3/4 bg-lime-600 container justify-center ">
            <div className="flex justify-center align-center m-10 p-10">
                    n={n}, n2={n*2}
                <h1 className="w-3/4 h-80 bg-lime-900">
                    <Div1 n={n} setN={setN}/>
                </h1>
            </div>
        </main>
    )
}

export default DivMain
