
import RankedList from "@/components/RankedList/RankedList";
import HeroSection from "@/components/HeroSection/HeroSection";
import PictureStrip from "@/components/PictureStrip/PictureStrip";
import SportSection from "@/components/SportSection/SportSection";
import MockData from "../../public/data/mock.json"
export const metadata = {
  title: "BBC News – Home",
  description: "BBC News homepage ",
};
export default async function HomePage() {
  const data  = MockData;

  return (
    <>
      <main className="container my-4">
        <HeroSection data={data} />
        <PictureStrip data={data.pictures} />
        <RankedList data={data.trending} />
        <SportSection data={data.sport} />
      </main>
    </>
  );
}
