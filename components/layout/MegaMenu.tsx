'use client'

export default function MegaMenu() {
  return (
    <nav className="navbar text-primary-content min-h-auto shadow-sm">
      <ul className="menu lg:menu-horizontal z-50 p-0">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <details>
            <summary>Parent item</summary>
            <ul className="menu xl:menu-horizontal text-base-content rounded-box lg:min-w-max">
              <li>
                <a>Solutions</a>
                <ul>
                  <li>
                    <a>Design</a>
                  </li>
                  <li>
                    <a>Development</a>
                  </li>
                  <li>
                    <a>Hosting</a>
                  </li>
                  <li>
                    <a>Domain register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Enterprise</a>
                <ul>
                  <li>
                    <a>CRM software</a>
                  </li>
                  <li>
                    <a>Marketing management</a>
                  </li>
                  <li>
                    <a>Security</a>
                  </li>
                  <li>
                    <a>Consulting</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Products</a>
                <ul>
                  <li>
                    <a>UI Kit</a>
                  </li>
                  <li>
                    <a>WordPress themes</a>
                  </li>
                  <li>
                    <a>WordPress plugins</a>
                  </li>
                  <li>
                    <a>Open source</a>
                    <ul>
                      <li>
                        <a>Auth management system</a>
                      </li>
                      <li>
                        <a>VScode theme</a>
                      </li>
                      <li>
                        <a>Color picker app</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a>Company</a>
                <ul>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                  <li>
                    <a>Privacy policy</a>
                  </li>
                  <li>
                    <a>Press kit</a>
                  </li>
                </ul>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </nav>
  )
}
