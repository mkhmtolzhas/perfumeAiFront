import Products from '@/components/component/Products';
import Landing from '../components/component/Landing';
import AiPromptMobile from '@/components/component/AiPromptMobile';
import Footer from '@/components/layout/Footer';


export default function Home() {
  return (
    <div className="">
      <Landing />
      <div className="lg:hidden md:hidden w-full">
        <AiPromptMobile/>
      </div>
      <Products />
      <Footer />
    </div>
  );
}

