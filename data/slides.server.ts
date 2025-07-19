import { StaticImageData } from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { MEDIA } from './media'
import { UniqueData } from './common'

export interface ISlide extends UniqueData {
  img: StaticImageData
}

export async function getSlides(): Promise<ISlide[]> {
  return [
    {
      id: uuidv4(),
      img: MEDIA.slides.slid1,
    },
    {
      id: uuidv4(),
      img: MEDIA.slides.slid2,
    },
    {
      id: uuidv4(),
      img: MEDIA.slides.slid3,
    },
  ]
}
