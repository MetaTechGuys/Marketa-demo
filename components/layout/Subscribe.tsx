export default function Subscribe() {
  return (
    <div className="hero bg-secondary-100">
      <div className="hero-content py-16 text-center">
        <div className="max-w-md">
          <h1 className="font-se text-5xl font-bold">New Here?</h1>

          <p className="py-6 text-2xl font-extralight tracking-widest">
            Grab 10% Off Your First Order.
          </p>
          <div className="join">
            <div>
              <label className="input input-xl validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-xl btn-neutral join-item">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
