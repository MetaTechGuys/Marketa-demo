'use client'

import { ISlide } from '@/data/slides.server'
import { ListProps } from '@/utils/next'
import Image from 'next/image'
import { CarouselProps, Carousel as Nuka } from 'nuka-carousel'

export default function Carousel({
  list,
  ...props
}: ListProps<ISlide> & Omit<CarouselProps, 'children'>) {
  return (
    <Nuka {...props}>
      {list.map((slide) => (
        <div
          id={slide.id}
          key={slide.id}
          className="carousel-item relative w-full"
        >
          <Image src={slide.img} className="w-full" alt="" />
        </div>
      ))}
    </Nuka>
  )
}
