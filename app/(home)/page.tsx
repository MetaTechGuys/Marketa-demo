import AdHero from '@/components/blocks/AdHero'
import Carousel from '@/components/blocks/Carousel'
import CarouselWrapper from '@/components/blocks/CarouselWrapper'
import ProductsCarousel from '@/components/blocks/ProductsCarousel'
import ProductsGrid from '@/components/blocks/ProductsGrid'
import ServiceCard from '@/components/blocks/ServiceCard'
import LottieAnimates from '@/components/LottieAnimates'

import { getBanners } from '@/data/banners.server'
import {
  getCarpets,
  getChairsA,
  getChairsB,
  getChairsC,
  getFurnitures,
  getMakeup,
  getPetwares,
  getPots,
} from '@/data/products.server'
import { getSlides } from '@/data/slides.server'

export default async function Page() {
  const [
    slides,
    banners,
    chairs1,
    chairs2,
    chairs3,
    furnitures,
    pots,
    petwares,
    makeups,
    carpets,
  ] = await Promise.all([
    getSlides(),
    getBanners(),
    getChairsA(),
    getChairsB(),
    getChairsC(),
    getFurnitures(),
    getPots(),
    getPetwares(),
    getMakeup(),
    getCarpets(),
  ])

  return (
    <>
      <section>
        <Carousel
          list={slides}
          showArrows
          wrapMode="nowrap"
          className="w-full"
          showDots
          autoplay
          autoplayInterval={2000}
        />
      </section>
      <div className="container mx-auto flex flex-col gap-4 p-4">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <CarouselWrapper
            title="up to 50% OFF: Back-to-School Deal Week"
            showMore
          >
            <ProductsGrid list={chairs1} size="xs" />
          </CarouselWrapper>
          <CarouselWrapper title="fresh-picked favorites" showMore>
            <ProductsGrid list={chairs2} size="xs" />
          </CarouselWrapper>
        </section>
        <CarouselWrapper
          title="10% OFF Summerween magic"
          lead="Think: bright days and bold frights."
          showMore="See all"
        >
          <ProductsCarousel list={chairs3} showArrows autoplay />
        </CarouselWrapper>
        <AdHero className="mt-8" data={banners[0]} />
        <CarouselWrapper
          title="24-hours ONLY: deals of the day"
          showMore="See all"
        >
          <ProductsCarousel list={furnitures} size="sm" />
        </CarouselWrapper>
        <AdHero className="bg-contain bg-left bg-no-repeat" data={banners[1]} />
        <CarouselWrapper title="easy oasis essentials" showMore="See all">
          <ProductsCarousel list={pots} size="xs" />
        </CarouselWrapper>
        <AdHero className="mt-8" data={banners[2]} mini />
        <CarouselWrapper title="easy oasis essentials" showMore="See all">
          <ProductsCarousel list={petwares} size="xs" />
        </CarouselWrapper>
        {/* <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AdCard className="h-75" />
          <AdCard />
          <AdCard />
          <AdCard />
        </section> */}
        <AdHero className="mt-8" data={banners[3]} />
        <CarouselWrapper title="easy oasis essentials" showMore="See all">
          <ProductsCarousel list={makeups} size="sm" />
        </CarouselWrapper>
        <AdHero className="mt-8" data={banners[4]} />
        <CarouselWrapper title="easy oasis essentials" showMore="See all">
          <ProductsCarousel list={carpets} size="xs" />
        </CarouselWrapper>
        <section className="flex justify-around gap-4 py-16">
          <ServiceCard label="Unbeatable Selection">
            <LottieAnimates
              name="buy-from-app"
              className="size-16"
              loop
              autoplay
            />
          </ServiceCard>
          <ServiceCard label="Expert Customer Service">
            <LottieAnimates name="support" className="size-16" loop autoplay />
          </ServiceCard>
          <ServiceCard label="Fast & Free Shipping Over $35*">
            <LottieAnimates name="shipping" className="size-16" loop autoplay />
          </ServiceCard>
          <ServiceCard label="Amazing Value Every Day">
            <LottieAnimates
              name="receive-order"
              className="size-16"
              loop
              autoplay
            />
          </ServiceCard>
        </section>
      </div>
    </>
  )
}
