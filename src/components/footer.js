export function Footer(){
  return(
    <div className="container mx-auto">
      <div className="flex flex-col ">
        <ul className="flex place-content-center space-x-20 cursor-pointer text-sm mt-20">
          <li><h4 className="uppercase">Support</h4>
            <ul>
              <li className="hover:underline hover:text-red-400">FAQ</li>
              <li className="hover:underline hover:text-red-400">Documentation</li>
              <li className="hover:underline hover:text-red-400">Guides</li>    
              <li className="hover:underline hover:text-red-400">Contact</li>
            </ul>   
          </li>    
          <li><h4 className="uppercase">Company</h4>
            <ul>
              <li className="hover:underline hover:text-red-400">About</li>
              <li className="hover:underline hover:text-red-400">Blog</li>
              <li className="hover:underline hover:text-red-400">Jobs</li>    
              <li className="hover:underline hover:text-red-400">Partners</li>
            </ul>
          </li>
          <li><h4 className="uppercase">Legal</h4>
            <ul>
              <li className="hover:underline hover:text-red-400">claim</li>
              <li className="hover:underline hover:text-red-400">Privacy</li>
              <li className="hover:underline hover:text-red-400">Terms</li>    
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}