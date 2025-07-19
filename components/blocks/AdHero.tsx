import { IBanner } from '@/data/banners.server'
import { DataProps } from '@/utils/next'
import { cn } from '@/utils/tailwind'
import Image from 'next/image'
import { ComponentProps } from 'react'

export default function AdHero({
  className,
  mini,
  data,
}: ComponentProps<'div'> & DataProps<IBanner> & { mini?: true }) {
  return (
    <div
      className={cn('hero rounded-box overflow-clip', className)}
      style={{
        backgroundImage: mini ? undefined : `url(${data.img.src})`,
      }}
    >
      {mini ? null : <div className="hero-overlay"></div>}
      <div
        className={cn('hero-content text-neutral-content p-8 text-center', {
          'p-0': mini,
        })}
      >
        {mini ? (
          <Image src={data.img} alt="" />
        ) : (
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        )}
      </div>
    </div>
  )
}
