import React from 'react';
import { Wrench, Battery, PenTool as Tool, Settings, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  React.useEffect(() => {
    document.title = 'Soo Autogrupp - Teenused';
    
    // Handle scrolling to specific service section
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const services = [
    {
      icon: <Settings className="w-16 h-16 text-blue-600" />,
      title: 'Diagnostika',
      id: 'diagnostika',
      description: 'Pakume professionaalset auto diagnostikat Tallinnas, kasutame kaasaegseid seadmeid, et tuvastada probleemid kiiresti ja täpselt.',
      features: [
        'Mootori diagnostika',
        'Elektrisüsteemide kontroll',
        'Veakoodide lugemine ja analüüs',
        'Süsteemide testimine'
      ]
    },
    {
      icon: <Battery className="w-16 h-16 text-blue-600" />,
      title: 'Elektritööd',
      id: 'elektritood',
      description: 'Auto elektritööd ja elektroonika remont: starter, generaator, juhtmestik ja muud elektrisüsteemid. Meie elektrikud on spetsialiseerunud kõikvõimalike elektriprobleemide lahendamisele.',
      features: [
        'Aku testimine ja vahetus',
        'Starteri ja generaatori remont',
        'Juhtmestiku parandus',
        'Elektroonika diagnostika'
      ]
    },
    {
      icon: <Tool className="w-16 h-16 text-blue-600" />,
      title: 'Mootoriremont',
      id: 'mootoriremont',
      description: 'Professionaalne mootoriremont ja hooldus Tallinnas. Teostame töid kapitaalremontidest kuni tihendite vahetuseni, tagades teie sõiduki maksimaalse jõudluse ja töökindluse.',
      features: [
        'Mootoriremont',
        'Tihendite vahetus',
        'Jahutussüsteemi hooldus'
      ]
    },
    {
      icon: <Wrench className="w-16 h-16 text-blue-600" />,
      title: 'Lukksepatööd',
      id: 'lukksepatood',
      description: 'Kõikvõimalikud lukksepatööd teie sõidukile. Meie kogenud lukkseppad teostavad kõiki vajalikke remondi- ja hooldustöid professionaalsel tasemel.',
      features: [
        'Pidurisüsteemi remont',
        'Vedrustuse remont',
        'Õlivahetus',
        'Üldine hooldus'
      ]
    },
    {
      icon: <Disc className="w-16 h-16 text-blue-600" />,
      title: 'Rehvitööd',
      id: 'rehvitood',
      description: 'Rehvide vahetus, tasakaalustamine ja parandustööd. Pakume täisteenust rehvide hoolduseks ja vahetuseks, tagades teie sõiduki ohutuse ja mugavuse.',
      features: [
        'Rehvide vahetus',
        'Tasakaalustamine',
        'Rehviparandus',
        'Rehvide hoiustamine'
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Meie Teenused</h1>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              id={service.id}
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="bg-blue-50 p-8 rounded-full">
                  {service.icon}
                </div>
              </div>

              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center lg:justify-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/kontakt"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Võta Ühendust
          </Link>
        </div>
      </div>
    </div>
  );
}