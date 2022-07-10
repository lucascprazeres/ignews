import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJS() {
  const stripeJS = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!)

  return stripeJS
}