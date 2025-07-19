export default function Topbar() {
  return (
    <nav className="navbar bg-accent text-secondary-content min-h-auto shadow-sm">
      <div className="container mx-auto flex flex-1 justify-between">
        <div className="flex justify-start">
          <a className="link link-hover w-full truncate">
            Up to 50% OFF | Back-to-School Deal Week
          </a>
        </div>
        <div className="flex justify-end gap-4 max-sm:hidden">
          <a className="link link-hover">Rewards</a>
          <a className="link link-hover">Financing</a>
          <a className="link link-hover">Professional</a>
          <a className="link link-hover">Free & Easy Delivery Over $35*</a>
        </div>
      </div>
    </nav>
  )
}
