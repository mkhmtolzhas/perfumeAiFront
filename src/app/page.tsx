import Products from '@/components/component/Products';
import Landing from '../components/component/Landing';
import AiPromptMobile from '@/components/component/AiPromptMobile';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';


export default function Home() {
  return (
    <div className="">
      <Header />
      <Landing />
      <div className="lg:hidden md:hidden w-full">
        <AiPromptMobile/>
      </div>
      <Products />
      <Footer />
    </div>
  );
}

