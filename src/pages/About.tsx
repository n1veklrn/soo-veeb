import React from 'react';

export default function About() {
  React.useEffect(() => {
    document.title = 'Soo Autogrupp - Meist';
  }, []);

  const teamMembers = [
    {
      name: 'Rommi',
      role: 'Meister',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Rommi.jpg?raw=true',
      description: 'Töökoja süda. Ka kõige ekstreemsemad ideed leiavad lahenduse. Vahetu suhtlus meistriga    on joon mida ta juba 20+ aastat hoiab visiitkaardina Soole.'
    },
    {
      name: 'Margit',
      role: 'Administraator',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Margit.jpg?raw=true',
      description: 'Meie esimene tervitus. Suhtleb klientidega, korraldab tööd ja leiab igale küsimusele vastuse.'
    },
    {
            name: 'Kristo',
      role: 'Varustaja',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Kristo.jpg?raw=true',
      description: 'Tõeline varuosakuningas. Kõik mis autole juppidena vaja leiab tema käeläbi kontorist.'
    },
    {
      name: 'Raimo',
      role: 'Diagnostik',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Raimo.jpg?raw=true',
      description: 'Kõik hooldused ja erinevad tavatööd teeb mängleva kergusega.'
   },
    {
      name: 'Reimo',
      role: 'Lukksepp',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Reimo.jpg?raw=true',
      description: 'Armastab teha kõike üle võlli mis puudutab auto võimsust. Turbod ja mootorid on tema jaoks maiuspala. Silm lööb kohe särama kui juttu tuleb mootorivahetusest.'
   },
    {
      name: 'Aimar',
      role: 'Lukksepp',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Aimar.jpg?raw=true',
      description: 'Meie kõige pikaajalisem lukksepp. Tõeliselt kuldsete kätega mees. Kõik mida autole juurde ehitada - täiesti tema teema. Olgu see siis plastikust tiivalaiendid või nullist tagavararatta hoidja. Metall lihtsalt valgub ta käte vahel selleks mis mõttes.'
   },
    {
      name: 'Märt',
      role: 'Lukksepp',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Ma%CC%88rt.jpg?raw=true',
      description: 'Land roverid saavad elu sisse tema käe all. Mootoritöödega on süda õiges taktis.'
    },
    {
      name: 'Jonas',
      role: 'Elektrik',
      image: 'https://github.com/Soo-Autogrupp/pildid/blob/main/Jonas.jpg?raw=true',
      description: 'Meie kõige noorem liige. Teab vanadest volvodest absoluutselt kõike. Mõtleb ja suudab leida edukad lahendused kõigele millele käe külge paneb. Vaikne noormees aga väga sisukas.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      {/* History Section */}
      <section className="py-16 bg-white mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Meie ajalugu</h1>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-base md:prose-lg mx-auto">
              <p>
                Auto Diagnostika alustas tegevust 2005. aastal väikese autoremondi töökojana Tallinnas.
                Aastate jooksul oleme kasvanud üheks usaldusväärseimaks autoteeninduseks
                piirkonnas, investeerides pidevalt kaasaegsetesse seadmetesse ja meeskonna
                koolitusse.
              </p>
              <p>
                Täna oleme uhked, et saame pakkuda täisteenust auto hooldusest kuni
                keeruliste remontideni. Meie edu aluseks on olnud pühendumus kvaliteedile
                ja klienditeenindusele.
              </p>
              <p>
                Meie missiooniks on pakkuda klientidele parimat võimalikku autoteenindust,
                kasutades kaasaegseid tehnoloogiaid ja järgides kõige kõrgeimaid kvaliteedistandardeid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Meie meeskond</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}