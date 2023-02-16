import { Navbar } from '@/components/Navbar';
import Image from 'next/image'
import pokeLogo from './../assets/img/pokemonLogo.png';


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-38 justify-center">
      <Image src={pokeLogo} width={120} height={400}  alt="pokemonLogo" />
      </div>

      
    </>
  )
}
