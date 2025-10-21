import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Battery, PenTool as Tool, Settings, Disc } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: 'Diagnostika',
      description: 'Täielik sõiduki diagnostika kaasaegsete Bosch seadmetega.'
    },
    {
      icon: <Battery className="w-12 h-12 text-blue-600" />,
      title: 'Elektritööd',
      description: 'Sõiduki elektrisüsteemide remont ja hooldus.'
    },
    {
      icon: <Tool className="w-12 h-12 text-blue-600" />,
      title: 'Mootoriremont',
      description: 'Professionaalne mootoriremont ja hooldus.'
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Lukksepatööd',
      description: 'Kõikvõimalikud lukksepatööd teie sõidukile.'
    },
    {
      icon: <Disc className="w-12 h-12 text-blue-600" />,
      title: 'Rehvitööd',
      description: 'Rehvide vahetus, tasakaalustamine ja parandustööd.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Auto Diagnostika</h1>
            <p className="text-xl mb-8">
              Professionaalne autohooldus ja -remont kaasaegsete seadmetega. 
              Usaldusväärne partner teie auto hooldamisel.
            </p>
            <Link
              to="/broneeri"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Broneeri Aeg
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meie Teenused</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Miks Valida Meid?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tool className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professionaalne Meeskond</h3>
              <p className="text-gray-600">Kogenud spetsialistid, kes tagavad kvaliteetse teenuse.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kaasaegsed Seadmed</h3>
              <p className="text-gray-600">Kasutame ainult uusimaid diagnostika- ja remondiseadmeid.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garanteeritud Kvaliteet</h3>
              <p className="text-gray-600">Anname oma tööle kuue kuu garantii, kui diagnoos või parandus on vale, teeme korduse tasuta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}