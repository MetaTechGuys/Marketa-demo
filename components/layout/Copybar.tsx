import pckg from '@/package.json'

export default function Copybar() {
  return (
    <div className="navbar bg-base-200 text-base-content min-h-auto shadow-sm">
      <div className="container mx-auto flex flex-1 justify-between text-sm">
        <div className="flex justify-start">
          <span className="link link-hover w-full truncate">
            © 2025 by MTG LLC,
            <span> </span>
            <span title={new Date(pckg['version.stamp']).toLocaleString()}>
              v{pckg.version}
            </span>
          </span>
        </div>
        <div className="flex justify-end gap-4 max-sm:hidden">
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Your Privacy Rights & Choices</a>
        </div>
      </div>
    </div>
  )
}
