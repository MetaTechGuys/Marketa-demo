import { StaticImageData } from 'next/image'
import { PropsWithChildren } from 'react'

interface ServiceCardProps {
  label: string
  img?: StaticImageData
  href?: string
}

export default function ServiceCard({
  label,
  href,
  children,
}: PropsWithChildren<ServiceCardProps>) {
  return (
    <a className="contents" href={href}>
      <div className="cus-hv-center gap-4">
        {children ?? <div className="bg-accent-800 size-12 rounded-full"></div>}
        <div className="font-bold uppercase">{label}</div>
      </div>
    </a>
  )
}
