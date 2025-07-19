'use client'
import {
  DotLottieReact,
  DotLottieReactProps,
} from '@lottiefiles/dotlottie-react'

interface LottieAnimatesProps extends Omit<DotLottieReactProps, 'src'> {
  name: 'shipping' | 'support' | 'buy-from-app' | 'receive-order'
}

export default function LottieAnimates({
  name,
  ...props
}: LottieAnimatesProps) {
  const src = `/lotties/${name}.lottie`
  return <DotLottieReact src={src} {...props} />
}
