'use client'
import { IProduct } from '@/data/products.server'
import { ListProps } from '@/utils/next'
import ProductCard from './ProductCard'
import { cn } from '@/utils/tailwind'
import { CarouselProps, Carousel as Nuka } from 'nuka-carousel'

interface ProductsCarouselProps
  extends ListProps<IProduct>,
    Omit<CarouselProps, 'children'> {
  size?: 'xs' | 'sm' | 'md'
  className?: string
}

export default function ProductsCarousel({
  list,
  size,
  className,
  ...props
}: ProductsCarouselProps) {
  return (
    <Nuka {...props} className={cn('mt-2', className)}>
      {list.map((data) => (
        <ProductCard
          key={data.id}
          data={data}
          size={size}
          className="me-4 min-w-64!"
        />
      ))}
    </Nuka>
  )
}
