import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Battery, PenTool as Tool, Settings, Disc } from 'lucide-react';
import ImageModal from '../components/ImageModal';

export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string; alt: string } | null>(null);

  React.useEffect(() => {
    document.title = 'Soo Autogrupp - Professionaalne autohooldus Tallinnas';
  }, []);

  const vehicleImages = [
    { src: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Maasturid.jpg?raw=true', alt: 'Maasturid' },
    { src: 'https://github.com/Soo-Autogrupp/pildid/blob/main/ATV.jpg?raw=true', alt: 'ATV' },
    { src: 'https://github.com/Soo-Autogrupp/pildid/blob/main/USA%20muskel.jpg?raw=true', alt: 'USA Muscle Car' },
    { src: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Tava%20auto.jpg?raw=true', alt: 'Tavaline' }
  ];

  const services = [
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: 'Diagnostika',
      description: 'Leiame vea kiirelt ja täpselt, kaasaegsete seadmetega.',
      slug: 'Diagnostika'
    },
    {
      icon: <Battery className="w-12 h-12 text-blue-600" />,
      title: 'Elektritööd',
      description: 'Usaldusväärne remont ja hooldus sõiduki elektrisüsteemidele.',
      slug: 'elektritood'
    },
    {
      icon: <Tool className="w-12 h-12 text-blue-600" />,
      title: 'Mootoriremont',
      description: 'Professionaalne mootoriremont, mis annab masinale uue elu.',
      slug: 'mootoriremont'
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Lukksepatööd',
      description: 'Kõik vajalikud lukksepatööd teie sõidukile.',
      slug: 'lukksepatood'
    },
    {
      icon: <Disc className="w-12 h-12 text-blue-600" />,
      title: 'Rehvitööd',
      description: 'Rehvide vahetus, tasakaalustamine ja parandus, et sõit oleks turvaline.',
      slug: 'rehvitood'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">Maasturite ja sõiduautode remont Tallinnas.</h1>
            <p className="text-base md:text-xl mb-8">
              Ükskõik mis mark või mudel, paneme auto uuesti liikuma.
            </p>
            <Link
              to="/kontakt"
              className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-base md:text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Võta ühendust
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meie teenused</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                to={`/teenused#${service.slug}`}
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Equipment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Unikaalne varustus ja lisad teie autole</h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-8 px-4">
            Pakume erilahendusi ja varustust, mida tavapoodidest ei leia, ideaalne maasturitele ja projektiautodele.
          </p>
          <div className="text-center">
            <Link
              to="/tooted"
              className="inline-block bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-base md:text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Vaata meie pakkumisi
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Miks Valida Meid?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tool className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">20+ aastat kogemust</h3>
              <p className="text-gray-600">Kogenud spetsialistid, kes tagavad kvaliteetse teenuse.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Kõik vajalik ühest kohast</h3>
              <p className="text-gray-600">Olgu tegu lihtsa hoolduse või keeruka remondiga, teie auto saab korda.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Garanteeritud kvaliteet</h3>
              <p className="text-gray-600">Kõikidele töödele kehtib kuue kuu garantii. Kui midagi on valesti, teeme paranduse tasuta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Kõik mis sa meile tood, me suudame parandada</h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 px-4">Näited erinevatest masinatest mida parandanud oleme</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </div>
  );
}