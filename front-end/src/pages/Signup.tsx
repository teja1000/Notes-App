

const Signup=()=>{
  return(
    <div className="flex justify-center items-center h-screen bg-[url(https://wallpapers.com/images/featured/sky-mvehfqz6w2ges2dj.jpg)] bg-cover bg-center  ">
     <div className=" p-6 bg-cyan-200 ">
     <div className="font-semibold">Full Name</div>
     <input className="my-2" type="text" required/>
     <div className="font-semibold">phone Number</div>
     <input className="my-2"type="number" required/>
     <div className="font-semibold">e-mail</div>
     <input className="my-2" type="email" required/>
     <div className="font-semibold">Date of birth</div>
     <input className="my-2" type="date" required/>
     <div className="font-semibold">Password</div>
     <input className="my-2" type="text" required/>
     <div className="flex justify-center mt-2">
      <button className="text-center bg-sky-600 shadow-md font-bold text-lg px-2">
        Submit
      </button>
     </div>

     </div>
    </div>
  )
}

export default Signup