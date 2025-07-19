import { IProduct } from '@/data/products.server'
import { DataProps } from '@/utils/next'
import { cn } from '@/utils/tailwind'

interface ProductCardProps extends DataProps<IProduct> {
  className?: string
}

export default function AdCard({ className }: ProductCardProps) {
  return (
    <div className={cn('card image-full w-full overflow-clip', className)}>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          className="brightness-75!"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
      </div>
    </div>
  )
}
