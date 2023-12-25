import ButtonBlue from "../comm/ButtonBlue"

const Div3 = ({n,setN}) => {
    const handleUp = () => {
        setN(n+1);
    }
    const handleDown = () => {
        setN(n-1);
    }
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 my-10">
      <ButtonBlue caption={"증가"} handleClick={handleUp}/>
      <ButtonBlue caption={"감소"} handleClick={handleDown}/>
    </div>
    
  )
}

export default Div3
