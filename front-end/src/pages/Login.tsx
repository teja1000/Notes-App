import { Link } from "react-router-dom"
const Login=()=>{
  return(
    <div className="flex justify-center items-center h-screen bg-[url('https://wallpapers.com/images/featured/dark-nature-background-sf5wu61v1au0kwfk.jpg')] bg-cover bg-center ">
    <div className=" bg-gray-300 p-6 rounded-lg">
      <div className="my-2 text-lg font-medium">UserId</div>
      <input className="border-2 border-black"/>
      <div className="my-2 text-lg font-medium">Password</div>
      <input className="border-2 border-black mb-2"/>
      <div className="flex justify-center mt-2">
      <button className="text-center shadow-md px-2 bg-lime-600 text-lg font-bold">Signin</button>
      </div>
      <div className=" flex justify-center my-2">
        <h1 className="text-lg  font-semibold">--or--</h1>
        </div>
        <div>
          <Link to="/Signup" className="flex justify-center font-semibold">Signup</Link>
        </div>
    </div>
    </div>
  )
}

export default Login