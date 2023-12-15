
import Freedom from '@/components/Freedom'
import HeroSection from '@/components/HeroSection'
import Lasthead from '@/components/Lasthead'
import Management from '@/components/Management'
import Questions from '@/components/Questions'
import RevenueTeam from '@/components/RevenueTeam'
import Saving from '@/components/Saving'
import SmartTool from '@/components/SmartTool'


export default function Home() {
  return (
    <div className='bg-yellow-50'>
      <HeroSection />
      <RevenueTeam />
      <SmartTool />
      <Management />
      <Saving />
      <Freedom />
      <Questions />
      <Lasthead/>
    </div>
  )
}
