import { StaticImageData } from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { MEDIA } from './media'
import { UniqueData } from './common'

export interface IBanner extends UniqueData {
  img: StaticImageData
}

export async function getBanners(): Promise<IBanner[]> {
  return [
    {
      id: uuidv4(),
      img: MEDIA.banners.banner1,
    },
    {
      id: uuidv4(),
      img: MEDIA.banners.banner2,
    },
    {
      id: uuidv4(),
      img: MEDIA.banners.banner3,
    },
    {
      id: uuidv4(),
      img: MEDIA.banners.banner4,
    },
    {
      id: uuidv4(),
      img: MEDIA.banners.banner5,
    },
  ] as const
}
