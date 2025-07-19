import { StaticImageData } from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { MEDIA } from './media'
import { UniqueData } from './common'
import { faker } from '@faker-js/faker'

export interface IProduct extends UniqueData {
  img: StaticImageData
  verified?: boolean
  cost: string
  discount?: number
  title: string
}

function getfakeMeta() {
  return {
    id: uuidv4(),
    cost: faker.commerce.price({ min: 10, max: 100, dec: 1 }),
    title: faker.commerce.productName(),
    verified: Math.random() > 0.5,
    discount: Math.random() > 0.5 ? Math.round(Math.random() * 10) : undefined,
  }
}

export async function getChairsA(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair1,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair2,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair3,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair4,
    },
  ]
}

export async function getChairsB(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair5,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair6,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair7,
    },
  ]
}

export async function getChairsC(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair8,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair9,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair10,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair11,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair12,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair13,
    },
  ]
}

export async function getFurnitures(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture1,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture2,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture3,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture4,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture5,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture6,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture7,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture8,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture9,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture10,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.furniture11,
    },
  ]
}

export async function getPots(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.pot1,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.pot2,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.pot4,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.pot5,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.pot6,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.pot7,
    },
  ]
}

export async function getPetwares(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.petware1,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.petware2,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.petware3,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.petware4,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.petware5,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.petware6,
    },
  ]
}

export async function getMakeup(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.makeup1,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.makeup2,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.makeup3,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.makeup4,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.makeup5,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.makeup6,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.makeup7,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.makeup8,
    },
  ]
}

export async function getCarpets(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.carpet1,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.carpet2,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.carpet3,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.carpet4,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.carpet5,
    },
    {
      ...getfakeMeta(),
      img: MEDIA.products.carpet6,
    },
  ]
}

export async function getOthers(): Promise<IProduct[]> {
  return [
    {
      ...getfakeMeta(),
      img: MEDIA.products.chair1,
    },
  ]
}
