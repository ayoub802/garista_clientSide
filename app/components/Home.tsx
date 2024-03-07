import Image from 'next/image';
import { Link } from 'react-router-dom';

function Home() {
  const burgersData = [
    {
      id: 1,
      image1: '/photo/berger1.jpg',
      image2: '/photo/berger2.jpg',
      image3: '/photo/berger3.jpg',
      type: 'Burgers',
      link:'/Burgers'
    },
    {
      id: 2,
      image1: '/photo/pizza2.jpg',
      image2: '/photo/pizza1.jpg',
      image3: '/photo/pizza3.jpg',
      type: 'Pizza',
      link:'/Pizza'
    },
    {
      id: 3,
      image1: '/photo/donut1.jpg',
      image2: '/photo/donut2.jpg',
      image3: '/photo/donut3.jpg',
      type: 'Donuts',
      link:'/Donuts'
    },
    {
      id: 4,
      image1: '/photo/sand1.jpg',
      image2: '/photo/sand2.jpg',
      image3: '/photo/sand3.jpg',
      type: 'Sandwishes',
      link:'/Sandwich'
    }
  ];

  return (
    <>
    <div >

    
      <div className="container mx-auto">
  <article className="p-0.5 mb-4 bg-cover bg-transparent overflow-hidden relative" style={{ borderRadius: '2.7rem' }}>
    <div className="relative h-44">
    <Image className="absolute inset-0 w-full h-full object-cover rounded-4.5rem bg-cover bg-center z-0" src="/photo/offer.jpg" alt="Offer" layout="fill" style={{ filter: 'blur(1.2px)' }} />
      <div className="absolute inset-0 bg-transparent opacity-50 z-10"></div>
      <div className="absolute inset-0 p-5 flex flex-col bg-transparent justify-center items-center text-center text-white z-20">
        <p className="text-md font-bold bg-transparent">Enjoy the great</p>
        <h1 className="font-black text-md bg-transparent">offer today <br /> 25% off</h1>
      </div>
    </div>
  </article>
</div>

      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 grid-cols-2 gap-[1rem]">
          {burgersData.map((burger) => (
            <div key={burger.id} className="w-full sm:w-full md:w-auto bg-gray ">
              <Link to={burger.link}  className="block text-white no-underline rounded-md text-sm font-medium" >
                
                  <div className="rounded-[2.5rem] bg-neutral-700 ">
                    <div className='bg-transparent max-h-full max-w-full'>
                      <div className="flex justify-center pt-3 bg-transparent ">
                        <Image className="w-16 rounded-s-full bg-cover max-w-full max-h-full shadow-2xl relative" src={burger.image1} alt={burger.type} layout="fixed" width={64} height={64} />
                        <div className="flex flex-col bg-transparent ml-0.5 max-w-full max-h-full">
                          <Image className="rounded-tr-full w-16 h-16 max-w-full max-h-fullshadow-2xl bg-transparent object-cover mb-1" src={burger.image2} alt={burger.type} layout="fixed" width={64} height={64} />
                          <Image className="rounded-br-full w-16 h-16 shadow-2xl bg-transparent object-cover" src={burger.image3} alt={burger.type} layout="fixed" width={64} height={64} />
                        </div>
                      </div>
                    </div>

                    <div className="text-white text-md md:text-xl bg-transparent text-center mt-2 font-semibold ">{burger.type}</div>
                    <span className="flex justify-center items-center text-white bg-transparent text-center font-extralight text-xs pb-1 tracking-tighter">
                      14 Items
                    </span>
                  </div>
                
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
