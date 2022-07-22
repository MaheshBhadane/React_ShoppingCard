const Select =(props) => {
    return(
        <>
        <div onClick={()=> {
        props.cardSelect();
        }} style={{
          position:"Fixed ",
          zIndex: "1",
          width: "5%",
          height: "5%",
          left: "89%",
          top:"84%",
        borderRadius:"30px",
        display:"flex",
        justifyContent:"center",
        alineItems:"center",
           }}>
          <h5> <button>Delete</button></h5>           
        </div>

        </>
    )
}


export default Select;