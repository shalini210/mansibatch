import Footer from "./Footer";

export default function Menu()
{
    return(
        <>
        <div style={{backgroundColor:'orange',
        height:'50px',}}> 
           <ul style={{display:'flex',width:'50%',justifyContent:'space-evenly',
           listStyle:'none',
           alignItems:'center',height:'50px'}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Gallery</a></li>
           </ul>
           </div>
        </>
    )
}