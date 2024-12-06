import AboutUsHero from '../components/about/AboutUsHero'
import AboutSection from '../components/about/AboutSection'
import WhyUsSection from '../components/about/WhyUsSection'
import Subscribe from '../components/about/Subscribe'
import TeamSection from '../components/about/TeamSection'
import FeaturesSection from '../components/about/FeatureSection'

const About = () => {
  return (
    <div>
      <div  className='flex flex-col gap-[100px]'>
        <AboutUsHero />
        <AboutSection />
        <WhyUsSection />
        <FeaturesSection />
        <TeamSection />
        <Subscribe />
      </div>
    </div>
  )
}

export default About
