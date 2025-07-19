export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex flex-1 justify-between gap-8">
        <div className="cus-hv-center flex-none text-4xl font-black uppercase">
          <a className="">
            <img src="/logo.png" alt="" className="h-12" />
          </a>
        </div>
        <div className="flex min-w-lg flex-none items-center max-lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-24 flex-1 md:w-auto"
          />
        </div>
        <div className="flex-none max-sm:hidden">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Cart</a>
            </li>
            <li>
              <details className="z-50">
                <summary>Sign In</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
