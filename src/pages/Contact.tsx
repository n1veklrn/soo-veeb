import React from 'react';

export default function Contact() {
  React.useEffect(() => {
    document.title = 'Soo Autogrupp - Kontakt';
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Võta meiega ühendust</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Kontaktinfo</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">Aadress:</h3>
                <p className="text-sm md:text-base">Soo tn. 10, 10414, Tallinn</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">Telefon:</h3>
                <a href="tel:+37255511144" className="text-sm md:text-base text-blue-600 hover:text-blue-700">+372 5551 1144</a>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">E-post:</h3>
                <a href="mailto:info@auto-diagnostika.ee" className="text-sm md:text-base text-blue-600 hover:text-blue-700">info@auto-diagnostika.ee</a>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">Lahtiolekuajad:</h3>
                <p className="text-sm md:text-base">Esmaspäevast reedeni: 8:00 – 18:00</p>
                <p className="text-sm md:text-base">Laupäev ja pühapäev: Suletud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}