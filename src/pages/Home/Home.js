import { FaQ } from "./FaQ"
import { FeaturedeBooks } from "./FeaturedeBooks"
import { Hero } from "./Hero"
import { Testimonials } from "./Testimonials"

export const Home = () => {
  return (
    <main>
      <div className='bg-white  dark:bg-gray-800'>
        <Hero />
        <FeaturedeBooks />
        <Testimonials />
        <FaQ />
      </div>
    </main>
  )
}
