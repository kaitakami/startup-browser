import { Data } from "@/src/app/page"
import { Transition } from '@headlessui/react'
import Link from "next/link"

const Results: React.FC<{ results: Data }> = ({ results }) => {
  return (
    <Transition
      show={Boolean(results)}
      as="div"
      className="rounded-b"
      appear={true}
      enter="transition-opacity duration-2000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {results.entities.map(({ identifier }) => (
        <Link key={identifier.uuid} href={`https://crunchbase.com/organization/${identifier.permalink}`} className="flex w-full gap-3 transition bg-gray-100 border-b border-gray-200 last:rounded-b hover:bg-gray-200" target="_blank">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-10 h-10 rounded" src={`https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/${identifier.image_id}`} alt={`${identifier.value} image`} />
          <span className="my-auto">{identifier.value}</span>
        </Link>
      ))}
    </Transition>
  )
}

export default Results
