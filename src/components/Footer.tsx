import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> 
          <div>
            <h3 className="text-xl font-bold mb-4">Soo Autogrupp OÜ</h3>
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>Soo tn. 10, 10414, Tallinn</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <a href="tel:+37255511144" className="hover:text-blue-300">+372 5551 1144</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <a href="mailto:info@auto-diagnostika.ee" className="hover:text-blue-300">info@auto-diagnostika.ee</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Lahtiolekuajad</h3>
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                <div className="leading-relaxed">
                  <p>Esmaspäevast reedeni: 8:00 – 16:00</p>
                  <p>Laupäev ja pühapäev: Suletud</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kiirlingid</h3>
            <ul className="space-y-2 text-sm md:text-base mb-6">
              <li><button onClick={() => handleNavigation('/teenused')} className="hover:text-blue-400 text-left">Teenused</button></li>
              <li><button onClick={() => handleNavigation('/tooted')} className="hover:text-blue-400 text-left">Tooted</button></li>
              <li><button onClick={() => handleNavigation('/hinnakiri')} className="hover:text-blue-400 text-left">Hinnakiri</button></li>
              <li><button onClick={() => handleNavigation('/meist')} className="hover:text-blue-400 text-left">Meist</button></li>
              <li><button onClick={() => handleNavigation('/kontakt')} className="hover:text-blue-400 text-left">Kontakt</button></li>
              <li><button onClick={() => handleNavigation('/privaatsuspoliitika')} className="hover:text-blue-400 text-left">Privaatsuspoliitika</button></li>
            </ul>

            <div>
              <h4 className="text-lg font-semibold mb-3">Jälgi meid</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/sooautogrupp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sooautogrupp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SOO AUTOGRUPP. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
}