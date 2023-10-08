export function ContactPage(){

  return(
    <div className="flex flex-col w-screen p-36 screen items-center bg-orange-50 justify-center">
      <div className="p-10 space-y-5 border rounded border-orange-40 bg-white">
        <h2 className="uppercase text-center">Contact US</h2>
        <form className="flex flex-col justify-center items-center space-y-6">
          <div>
            <label form="email">Email: </label>
            <input type="email"placeholder="name@email.com" id="email" name="email"required/></div>
          <div>
            <textarea className="overflow-y-scroll border rounded w-60 h-36 max-h-36" type="text" placeholder="Write here ..." id="text" name="text" required/></div>
            <button type="submit"className="w-36 bg-orange-50 shadow-md p-2 rounded-md hover:underline hover:text-red-400">Submit</button>
        </form>
      </div>
    </div>
  )
}


