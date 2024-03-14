import {Link,useNavigate} from 'react-router-dom'


export const SignUp = () => {

  const navigate = useNavigate()

  async function handleform(event) {

    event.preventDefault();
    const details = {
      "name":event.target.name.value,
      "email":event.target.email.value,
      "password":event.target.password.value,
    }
  
    const response = await fetch('http://localhost:8000/register',{
      method :'POST',
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(details)
    })
    const data =await response.json();
    console.log(data);
    if(data.accessToken){
    navigate('/login')
  }

  }
  return (
  <section className="border-red-500 bg-white min-h-screen flex items-center justify-center dark:bg-gray-800">
    <div className="bg-gray-300 p-5 m-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div className="md:w-1/2 px-5">
        <h2 className="text-2xl font-bold text-[#002D74]">Register Here</h2>
        <p className="text-sm mt-4 text-[#002D74]">If you Don't have an account, please SignUp</p>
        <form onSubmit={handleform}className="mt-6" action="#" method="POST">
        <div className="mt-4">
            <label className="block text-gray-700">User Name</label>
            <input type="text" name="name" id="" placeholder="UserName" minLength="6" className="w-full px-4 py-2 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required/>
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input type="email" name="email" placeholder="Enter Email Address" className="w-full px-4 py-2 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete='false' required/>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password"  placeholder="Enter Password" minLength="6" className="w-full px-4 py-2 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required/>
          </div>
          <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Sign Up</button>
        </form>

        <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-500" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-500" />
        </div>

        <div className="text-sm flex justify-between items-center mt-3">
          <p>If you already have an account...</p>
          <Link to= "/login" className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Login</Link>
        </div>
      </div>

      <div className="w-1/2 md:block hidden ">
        <img src="../../assests/Login.jpg" className="rounded-2xl" alt="page img"/>
      </div>

    </div>
  </section>

  )
}

