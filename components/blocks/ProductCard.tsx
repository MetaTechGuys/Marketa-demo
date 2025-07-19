'use client'

import { IProduct } from '@/data/products.server'
import { DataProps } from '@/utils/next'
import { cn } from '@/utils/tailwind'
import Image from 'next/image'
import Icon from '../icon/Icon'
import { useState } from 'react'

interface ProductCardProps extends DataProps<IProduct> {
  size?: 'xs' | 'sm' | 'md'
  className?: string
}
export default function ProductCard({
  size,
  data,
  className,
}: ProductCardProps) {
  const [fav, setFav] = useState(false)
  return (
    <div
      className={cn(
        'group card relative w-64 border',
        size === 'xs' ? 'border-none' : 'bg-base-100 border-base-300',
        className
      )}
    >
      <figure
        className={cn('size-full overflow-clip', {
          'rounded-box': size === 'xs',
        })}
      >
        <Image
          src={data.img}
          alt="Shoes"
          className="size-full object-cover object-center"
        />
      </figure>

      <div className="absolute end-2 top-2 leading-0">
        <button onClick={() => setFav((f) => !f)} className="">
          {fav ? (
            <Icon name="heart_fill" className="text-error size-5" />
          ) : (
            <Icon
              name="heart_outline"
              className="group-hover:text-error/70 text-error/30 size-5 transition-colors duration-500"
            />
          )}
        </button>
      </div>

      <div className="cus-hv-center absolute start-2 top-2 z-10 gap-1">
        {data.verified ? (
          <div
            className="tooltip tooltip-right rounded-full bg-white leading-0"
            data-tip="Trusted seller"
          >
            <Icon name="check-badge" className="text-primary-700 size-5" />
          </div>
        ) : null}

        {data.discount ? (
          <div
            className="tooltip tooltip-right rounded-full bg-white leading-0"
            data-tip="Disconted offer"
          >
            <img src="/discount-2.svg" className="text-secondary-700 size-5" />
          </div>
        ) : null}
      </div>

      <div
        className={cn('card-body p-4 pt-2', {
          hidden: size === 'xs',
          'shadow-accent-50 absolute inset-0 top-auto bg-white/30 shadow':
            size === 'sm',
        })}
      >
        <h2 className="card-title tooltip truncate" data-tip={data.title}>
          {data.title}
        </h2>
        <div className="card-actions items-center justify-end">
          <div className="badge badge-warning">${data.cost}</div>
          <div className="badge badge-soft badge-white badge-sm">Fashion</div>
          <div className="badge badge-white badge-sm">Products</div>
        </div>
      </div>
    </div>
  )
}
