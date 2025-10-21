import React from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

export default function Products() {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string; alt: string } | null>(null);

  React.useEffect(() => {
    document.title = 'Soo Autogrupp - Tooted';
  }, []);

  const products = [
    {
      id: 1,
      title: 'Mercedes-Benz Om 648/Nissan Patrol y61 mootori käpad',
      description: 'Tugevad mootori käpad, mis sobivad Mercedes-Benz OM648 ja Nissan Patrol Y61 mootori paigaldamiseks. Tagavad stabiilse kinnituse ja töökindluse ka rasketes tingimustes.',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/2784E7E6-894E-4FE3-82D4-1B86DE5A2FA5_1_105_c.jpeg?raw=true'
    },
    {
      id: 2,
      title: 'Mercedes-Benz OM648 hübriid turbo',
      description: 'Kõrge jõudlusega hübriidturbo Mercedes-Benz OM648 mootorile. Annab märgatava võimsuselisa ja parema vastupidavuse võrreldes tehase turboga.',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/58141F6D-9A14-408A-98C7-0C70C2F17748_1_105_c.jpeg?raw=true'
    },
    {
      id: 3,
      title: '722.6+ Nissan Patrol y61 vaheplaat',
      description: 'Vaheplaat, mis võimaldab ühendada Mercedes-Benz 722.6 automaatkasti Nissan Patrol Y61 vahekastiga. Täpne ja vastupidav lahendus ümberehituseks.',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/9BAACA3A-3B38-45E0-ACB9-0690A9B892C7_1_105_c.jpeg?raw=true'
    },
    {
      id: 4,
      title: 'Nissan Patrol y61 roostevabad 2.5mm käänmiku munaka plekid',
      description: 'Roostevabast terasest 2.5 mm tihendiplekid Nissan Patrol Y61 käänmiku munakatele. Suurendavad vastupidavust ja pikendavad sõlmede eluiga.',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/9DF59967-42E1-4F38-9852-8A42FE2F9705_1_105_c.jpeg?raw=true'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Tooted</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-square object-cover cursor-pointer"
                onClick={() => setSelectedImage({ src: product.image, alt: product.title })}
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  to="/kontakt"
                  className="inline-block w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                >
                  Hinna küsimiseks võtke ühendust
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </div>
  );
}