import React from 'react';

export default function Pricing() {
  React.useEffect(() => {
    document.title = 'Soo Autogrupp - Hinnakiri';
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Hinnakiri</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            
            {/* Basic Services */}
            <div className="mb-8">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">TÖÖTUND</span>
                  <span className="font-bold text-blue-600">50€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">MINIMAALNE TÖÖTASU</span>
                  <span className="font-bold text-blue-600">25€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">DIAGNOSTIKA</span>
                  <span className="font-bold text-blue-600">65€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">SILLA REGULEERIMINE</span>
                  <span className="font-bold text-blue-600">Al. 75€</span>
                </div>
              </div>
            </div>

            {/* Motor Oil */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Mootorõli</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Mootorõli 5w-30</span>
                  <span className="font-bold text-blue-600">15€/L</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Mootorõli 10w-40</span>
                  <span className="font-bold text-blue-600">14€/L</span>
                </div>
              </div>
            </div>

            {/* Tire Services */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">REHIVAHETUS</h2>
              
              {/* Car Tires */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Sõiduauto</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">4 rehvi täisvahetus plekkvelg / valuvelg …-15"</span>
                    <span className="font-bold text-blue-600">50€</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">4 rehvi täisvahetus plekkvelg / valuvelg 16-17"</span>
                    <span className="font-bold text-blue-600">60€</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">4 rehvi täisvahetus plekkvelg / valuvelg 18"</span>
                    <span className="font-bold text-blue-600">65€</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">4 rehvi täisvahetus plekkvelg / valuvelg 19"</span>
                    <span className="font-bold text-blue-600">70€</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">4 rehvi täisvahetus plekkvelg / valuvelg 20"</span>
                    <span className="font-bold text-blue-600">Al. 75€</span>
                  </div>
                </div>
              </div>

              {/* SUV/Van/Bus Tires */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Maastur / Kaubik / Buss</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">4 rehvi täisvahetus …-18"</span>
                    <span className="font-bold text-blue-600">Al. 75€</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">4 rehvi täisvahetus 19"-…</span>
                    <span className="font-bold text-blue-600">Al. 85€</span>
                  </div>
                </div>
              </div>

              {/* Wheel Set Change */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Komplektrataste vahetus ja balansseerimine</h3>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Plekkvelg, valuvelg</span>
                  <span className="font-bold text-blue-600">50€</span>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Lisateenused</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Rehvihoid: üks hooaeg, ühele autole</span>
                  <span className="font-bold text-blue-600">30€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Rehviparandus nööriga</span>
                  <span className="font-bold text-blue-600">25€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Velje serva puhastus + liim, tasakaalustus 1 ratas</span>
                  <span className="font-bold text-blue-600">25€</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Rehviutiil 1 tk</span>
                  <span className="font-bold text-blue-600">8€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}