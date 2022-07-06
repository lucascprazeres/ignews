import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from '../styles/home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>

        <Image
          src="/images/avatar.svg"
          alt="girl coding"
          height={520}
          width={324}
        />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const price = await stripe.prices.retrieve('price_1JMxu1GKTtrj98uqcQPoKz6I')

  const unitAmount = price.unit_amount ? price.unit_amount / 100 : 0

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(unitAmount)
  }
  
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}