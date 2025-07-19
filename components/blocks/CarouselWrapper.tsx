import { PropsWithChildren } from 'react'
import Icon from '../icon/Icon'

interface CarouselWrapperProps {
  title: string
  lead?: string
  showMore?: true | string
}
export default function CarouselWrapper({
  title,
  lead,
  children,
  showMore,
}: PropsWithChildren<CarouselWrapperProps>) {
  return (
    <section>
      <div className="flex items-end justify-between">
        <a href="#" className="flex items-center justify-start gap-2">
          <div>
            <h1>{title}</h1>
            {lead ? <p>{lead}</p> : null}
          </div>
          {showMore === true ? (
            <Icon name="arrow-right-alt" className="size-5" />
          ) : null}
        </a>
        {typeof showMore === 'string' ? <a className="">{showMore}</a> : null}
      </div>
      {children}
    </section>
  )
}
