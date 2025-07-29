'use client'

import { useCallback, useEffect, useState } from 'react'

export default function MegaMenu() {
  const [items, setItems] = useState<string[]>([])
  const handleDemo = useCallback(async () => {
    try {
      const res = await fetch(
        'http://localhost:13000/api/product_categories:list',
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoiYXBpLWNsaWVudCIsImlhdCI6MTc1MzcxMTA1NCwiZXhwIjozMzMxMTMxMTA1NH0.2e7wkfQRTZA26V1j7zoxtThuD9vLbzY2sTHbV2xs4TU',
          },
        }
      )
      const data = await res.json()
      setItems(data.data.map((d) => d.name))
    } catch (e: unknown) {
      console.log('fetch error', e)
    }
  }, [])
  useEffect(() => {
    handleDemo()
  }, [handleDemo])
  return (
    <nav className="navbar text-primary-content min-h-auto shadow-sm">
      <ul className="menu lg:menu-horizontal z-50 p-0">
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
        {items.map((it) => (
          <li key={it}>
            <a>{it}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
