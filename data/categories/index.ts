import * as CATEGORIES from './data'

export type PCategoryKeys = keyof typeof CATEGORIES

export const categories = Object.entries(CATEGORIES).map(([slug, data]) => ({
  ...data,
  slug,
}))
