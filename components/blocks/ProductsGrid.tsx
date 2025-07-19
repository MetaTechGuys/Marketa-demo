import { IProduct } from '@/data/products.server'
import { ListProps } from '@/utils/next'
import ProductCard from './ProductCard'
import { cn } from '@/utils/tailwind'
import { ResponsiveHelper } from '../ResponsiveHelper'

interface ProductsCarouselProps extends ListProps<IProduct> {
  size?: 'xs' | 'sm' | 'md'
  className?: string
}
export default function ProductsGrid({
  list,
  size,
  className,
}: ProductsCarouselProps) {
  return (
    <div className="@container mt-2">
      <div
        className={cn(
          'relative grid grid-cols-1 gap-2 @2xs:grid-cols-2 @xs:grid-cols-4',
          className
        )}
      >
        <ResponsiveHelper container />
        {list.slice(0, 4).map((data) => (
          <ProductCard
            data={data}
            size={size}
            className="carousel-item aspect-square size-full"
            key={data.id}
          />
        ))}
      </div>
    </div>
  )
}
