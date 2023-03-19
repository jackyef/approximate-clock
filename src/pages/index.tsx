import Head from 'next/head'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Clock } from '@/components/Clock'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Approximate clock</title>
        <meta name="description" content="Tell the time, approximately" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx('w-full min-h-screen max-h-screen', inter.className)}>
        <Clock />
      </main>
    </>
  )
}
