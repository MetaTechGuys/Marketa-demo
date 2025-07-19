import { StaticImageData } from 'next/image'
import { UniqueData } from './common'

export interface ICategory extends UniqueData {
  img: StaticImageData
}

export async function getCategories(): Promise<ICategory[]> {
  return [] as const
}
