import { StaticImageData } from 'next/image'

import slid1 from '@/assets/slides/slide-1.webp'
import slid2 from '@/assets/slides/slide-2.webp'
import slid3 from '@/assets/slides/slide-3.webp'

import chair1 from '@/assets/chair/1.webp'
import chair2 from '@/assets/chair/2.webp'
import chair3 from '@/assets/chair/3.webp'
import chair4 from '@/assets/chair/4.webp'
import chair5 from '@/assets/chair/5.webp'
import chair6 from '@/assets/chair/6.webp'
import chair7 from '@/assets/chair/7.webp'
import chair8 from '@/assets/chair/8.webp'
import chair9 from '@/assets/chair/9.webp'
import chair10 from '@/assets/chair/10.webp'
import chair11 from '@/assets/chair/11.webp'
import chair12 from '@/assets/chair/12.webp'
import chair13 from '@/assets/chair/13.webp'

import furniture1 from '@/assets/furniture/marketa-frame-02-40.webp'
import furniture2 from '@/assets/furniture/marketa-frame-02-41.webp'
import furniture3 from '@/assets/furniture/marketa-frame-02-42.webp'
import furniture4 from '@/assets/furniture/marketa-frame-02-43.webp'
import furniture5 from '@/assets/furniture/marketa-frame-02-44.webp'
import furniture6 from '@/assets/furniture/marketa-frame-02-45.webp'
import furniture7 from '@/assets/furniture/marketa-frame-02-46.webp'
import furniture8 from '@/assets/furniture/marketa-frame-02-47.webp'
import furniture9 from '@/assets/furniture/marketa-frame-02-48.webp'
import furniture10 from '@/assets/furniture/marketa-frame-02-49.webp'
import furniture11 from '@/assets/furniture/marketa-frame-02-50.webp'

import carpet1 from '@/assets/carpet/21.webp'
import carpet2 from '@/assets/carpet/22.webp'
import carpet3 from '@/assets/carpet/23.webp'
import carpet4 from '@/assets/carpet/24.webp'
import carpet5 from '@/assets/carpet/25.webp'
import carpet6 from '@/assets/carpet/26.webp'

import pot1 from '@/assets/kitchen/14.webp'
import pot2 from '@/assets/kitchen/15.webp'
import pot4 from '@/assets/kitchen/17.webp'
import pot5 from '@/assets/kitchen/18.webp'
import pot6 from '@/assets/kitchen/19.webp'
import pot7 from '@/assets/kitchen/20.webp'

import petware1 from '@/assets/petware/8.webp'
import petware2 from '@/assets/petware/9.webp'
import petware3 from '@/assets/petware/10.webp'
import petware4 from '@/assets/petware/11.webp'
import petware5 from '@/assets/petware/12.webp'
import petware6 from '@/assets/petware/13.webp'

import makeup1 from '@/assets/makeup/085182603e5f96867dd7cfd68289276e.webp'
import makeup2 from '@/assets/makeup/1ad9e02dabe62f07e6969cc0a8b2f670.webp'
import makeup3 from '@/assets/makeup/46bff414e8cda7a463efe9c6d0721ef1.webp'
import makeup4 from '@/assets/makeup/5499e9df1db7523ea7e34990100a9118.webp'
import makeup5 from '@/assets/makeup/a038f1a10ea34c839a2e7ca87c58b717.webp'
import makeup6 from '@/assets/makeup/b083bf503ff045ab413bf8a135243cbe.webp'
import makeup7 from '@/assets/makeup/e5c9ff9602fce4d3be51a27cd88092da.webp'
import makeup8 from '@/assets/makeup/ed7480f384c7786e68e6843a734cf6f2.webp'

import banner1 from '@/assets/slides/ad-banner-1.webp'
import banner2 from '@/assets/kitchen/15.webp'
import banner3 from '@/assets/slides/petware-brands.webp'
import banner4 from '@/assets/slides/slide-4.webp'
import banner5 from '@/assets/slides/slide-5.webp'

type MediaMap = Record<string, StaticImageData>

export const MEDIA = {
  videos: {
    banner: {
      src: '/hero-video.mp4',
      width: 1920,
      height: 1080,
    },
  } satisfies MediaMap,
  slides: {
    slid1,
    slid2,
    slid3,
  },
  products: {
    chair1,
    chair2,
    chair3,
    chair4,
    chair5,
    chair6,
    chair7,
    chair8,
    chair9,
    chair10,
    chair11,
    chair12,
    chair13,
    furniture1,
    furniture2,
    furniture3,
    furniture4,
    furniture5,
    furniture6,
    furniture7,
    furniture8,
    furniture9,
    furniture10,
    furniture11,
    pot1,
    pot2,
    pot4,
    pot5,
    pot6,
    pot7,
    petware1,
    petware2,
    petware3,
    petware4,
    petware5,
    petware6,
    makeup1,
    makeup2,
    makeup3,
    makeup4,
    makeup5,
    makeup6,
    makeup7,
    makeup8,
    carpet1,
    carpet2,
    carpet3,
    carpet4,
    carpet5,
    carpet6,
  },
  banners: {
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
  },
}
