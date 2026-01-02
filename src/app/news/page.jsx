import HeroSection from '@/components/HeroSection/HeroSection'
import PictureStrip from '@/components/PictureStrip/PictureStrip'
import RankedList from '@/components/RankedList/RankedList'
import SportSection from '@/components/SportSection/SportSection'
import MockData from "../../../public/data/mock.json"
export const metadata = {
  title: "BBC News – News",
  description: "BBC News homepage UI POC built with Next.js and Bootstrap",
};
const news = () => {
  const data = MockData;
  return (
    <>
      <main className="container my-4">
        <p className='page-title text-center'>NEWS</p>
        <HeroSection data={data} />
        <PictureStrip data={data.pictures} />
        <RankedList data={data.trending} />
        <SportSection data={data.sport} />
      </main>
    </>
  )
}

export default news