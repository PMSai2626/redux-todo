import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"black", height:"50px", alignItems:"center"}}>
      <Link to='/' style={{color:"white", fontSize:"20px"}}>E-Shop</Link>
      <Link to='/cart' style={{color:"white", fontSize:"20px"}}>Cart</Link>
    </div>
  )
}

export default Navbar
