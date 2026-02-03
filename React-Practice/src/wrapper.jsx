function Wrapper({children})
{
    return (
        <div style={{color:"green" , border:"1px solid red", padding:"10px", margin:"10px"}}>
          {children}
        </div>
    )
}

export default Wrapper;