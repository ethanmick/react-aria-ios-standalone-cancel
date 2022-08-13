import { motion } from 'framer-motion'
import type { NextPage } from 'next'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useLink } from 'react-aria'

const cls = 'block w-64 border rounded text-center p-4 touch-none select-none'

const NormalLink = () => (
  <a className={cls} href="/link">
    Normal Link
  </a>
)

const NextLink = () => (
  <Link href="/link">
    <a className={cls}>Next.js Link</a>
  </Link>
)

const AriaNormalLink = () => {
  const ref = useRef(null)
  const { linkProps } = useLink({}, ref)

  return (
    <a {...linkProps} ref={ref} href="/link" className={cls}>
      Aria Normal Link
    </a>
  )
}

const AriaNextLink = () => {
  const ref = useRef(null)
  const { linkProps } = useLink({}, ref)
  return (
    <Link href="/link">
      <a {...linkProps} ref={ref} className={cls}>
        Aria Next Link
      </a>
    </Link>
  )
}

const FramerAriaNextLink = () => {
  const ref = useRef(null)
  const { linkProps } = useLink({}, ref)
  return (
    <Link href="/link" passHref>
      <motion.a {...(linkProps as any)} ref={ref} className={cls}>
        Framer Aria Next Link
      </motion.a>
    </Link>
  )
}

const OnPressFramerAriaLink = () => {
  const href = '/link'
  const ariaProps =
    typeof window !== 'undefined' && (window.navigator as any).standalone
      ? {
          onPress: () => {
            router.push('/link')
          }
        }
      : {}
  const props =
    typeof window !== 'undefined' && (window.navigator as any).standalone
      ? {}
      : {
          href
        }

  const router = useRouter()
  const ref = useRef(null)
  const { linkProps } = useLink(ariaProps, ref)
  return (
    <motion.a {...(linkProps as any)} {...props} ref={ref} className={cls}>
      On Press Framer Aria Next Link
    </motion.a>
  )
}

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <NormalLink />
      <NextLink />
      <AriaNormalLink />
      <AriaNextLink />
      <FramerAriaNextLink />
      <OnPressFramerAriaLink />
    </div>
  )
}

export default Home
