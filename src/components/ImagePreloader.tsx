import { useEffect } from 'react';

const imageUrls = [
  // Hero image
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',

  // Home page gallery images
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Maasturid.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/ATV.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/USA%20muskel.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Tava%20auto.jpg?raw=true',

  // About page team images
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Rommi.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Margit.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Kristo.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Raimo.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Reimo.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Aimar.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Ma%CC%88rt.jpg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/Jonas.jpg?raw=true',

  // Products page images
  'https://github.com/Soo-Autogrupp/pildid/blob/main/2784E7E6-894E-4FE3-82D4-1B86DE5A2FA5_1_105_c.jpeg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/58141F6D-9A14-408A-98C7-0C70C2F17748_1_105_c.jpeg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/9BAACA3A-3B38-45E0-ACB9-0690A9B892C7_1_105_c.jpeg?raw=true',
  'https://github.com/Soo-Autogrupp/pildid/blob/main/9DF59967-42E1-4F38-9852-8A42FE2F9705_1_105_c.jpeg?raw=true'
];

export default function ImagePreloader() {
  useEffect(() => {
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return null;
}