import Image from 'next/image'
import React from 'react'
import lightIllustration from '@/public/assets/images/light-illustration.png'
import darkIllustration from '@/public/assets/images/dark-illustration.png'
import Link from 'next/link'
import { Button } from '../ui/button'

interface Props {
  title: string
  description: string
  link: string
  linkTitle: string
}


const NoResults = ({title, description, link, linkTitle}: Props) => {
  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      <Image
        src={lightIllustration}
        alt='No result illustration'
        width={270}
        height={200}
        className='block object-contain dark:hidden'
      />
      <Image
        src={darkIllustration}
        alt='No result illustration'
        width={270}
        height={200}
        className='hidden object-contain dark:flex'
      />
      <h2 className='h2-bold text-dark200_light900 mt-8'>
        {title}
      </h2>
      <p className='body-regular text-dark500_light700 my-3.5 max-w-md text-center'>
        {description}
      </p>
      <Link href={link}>
        <Button className='paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500'>
          {linkTitle}
        </Button>
      </Link>
    </div>
  )
}

export default NoResults