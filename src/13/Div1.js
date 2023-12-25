import Div2 from "./Div2"

const Div1 = ({n, setN}) => {
    return (
        <div className="flex justify-center align-center m-10">
            <h1 className="w-3/4 h-60 bg-yellow-700">
                <Div2 n={n} setN={setN}/>
            </h1>
        </div>
    )
}

export default Div1
