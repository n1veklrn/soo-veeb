import React from 'react';

export default function PrivacyPolicy() {
  React.useEffect(() => {
    document.title = 'Soo Autogrupp - Privaatsuspoliitika';
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privaatsuspoliitika</h1>
            
            <div className="prose prose-base md:prose-lg mx-auto">
              <p>
                Soo Autogrupp OÜ („meie") austab oma klientide ja koostööpartnerite privaatsust ning töötleb isikuandmeid vastavalt kehtivatele õigusaktidele, sh Euroopa Liidu isikuandmete kaitse üldmäärusele (GDPR) ja Eesti seadustele. Käesolev privaatsuspoliitika selgitab, kuidas ja miks me Sinu andmeid kogume, kasutame ning hoiame.
              </p>

              <h2>Isikuandmete töötleja</h2>
              <p>
                Soo Autogrupp OÜ<br />
                Reg nr: 11545613<br />
                Aadress: Soo tn 10, Põhja-Tallinna linnaosa, 10414 Tallinn, Harju maakond<br />
                E-post: <a href="mailto:info@auto-diagnostika.ee" className="text-blue-600 hover:text-blue-700">info@auto-diagnostika.ee</a><br />
                Telefon: <a href="tel:+37255511144" className="text-blue-600 hover:text-blue-700">+372 5551 1144</a>
              </p>

              <h2>Milliseid andmeid me kogume</h2>
              <p>Teenuste osutamisel (remont, hooldus, diagnostika, renditeenused, päringud kodulehe või e-posti kaudu) võime koguda:</p>
              <ul>
                <li>ees- ja perekonnanimi</li>
                <li>kontaktandmed (telefon, e-post, aadress)</li>
                <li>sõiduki andmed (mark, mudel, reg nr, VIN kood, hooldusajalugu)</li>
                <li>arveldusandmed (arved, makseinfo)</li>
                <li>päringu või lepinguga seotud muu info</li>
              </ul>
              <p>Me ei töötle eriliiki isikuandmeid (nt terviseandmeid, usulisi või poliitilisi vaateid).</p>

              <h2>Milleks me andmeid kasutame</h2>
              <p>Töötleme Sinu andmeid eesmärgiga:</p>
              <ul>
                <li>teenuse osutamine ja kliendiga lepingu täitmine</li>
                <li>päringutele vastamine ja aja broneerimine</li>
                <li>arveldamine ja raamatupidamise korraldamine</li>
                <li>kliendisuhtlus ja teenuse kvaliteedi tagamine</li>
                <li>seadusest tulenevate kohustuste täitmine (nt maksuarvestus)</li>
              </ul>
              <p>Otseturunduslikke pakkumisi saadame ainult juhul, kui oled selleks andnud eraldi nõusoleku.</p>

              <h2>Andmete edastamine</h2>
              <p>Sinu andmeid võidakse edastada kolmandatele isikutele ainult teenuse osutamiseks või seadusest tuleneva kohustuse täitmiseks, näiteks:</p>
              <ul>
                <li>IT- ja majandustarkvara teenusepakkujatele (arvete ja broneeringute haldamiseks)</li>
                <li>koostööpartneritele, kellelt tellime varuosi või teenuseid</li>
                <li>riigiasutustele, kui see tuleneb seadusest</li>
              </ul>
              <p>Me ei edasta andmeid väljapoole Euroopa Majanduspiirkonda.</p>

              <h2>Andmete säilitamine</h2>
              <p>Säilitame andmeid ainult nii kaua, kui see on vajalik eesmärgi täitmiseks või seadusest tulenevalt:</p>
              <ul>
                <li>teenuselepingu ja arvete andmed 7 aastat (vastavalt raamatupidamisseadusele)</li>
                <li>kliendisuhtluse ja broneeringuandmed kuni 3 aastat</li>
              </ul>

              <h2>Sinu õigused</h2>
              <p>Sul on õigus:</p>
              <ul>
                <li>saada teavet oma andmete töötlemise kohta</li>
                <li>taotleda andmete parandamist või kustutamist</li>
                <li>piirata töötlemist või esitada vastuväiteid</li>
                <li>võtta tagasi turundusnõusolek</li>
                <li>saada oma andmeid struktureeritud kujul ja edastada need teisele teenusepakkujale</li>
                <li>pöörduda Andmekaitse Inspektsiooni (info@aki.ee) poole, kui leiad, et Sinu õigusi on rikutud</li>
              </ul>

              <h2>Küpsised ja veebikasutus</h2>
              <p>
                Kui kasutad meie kodulehte, võime koguda tehnilisi andmeid (IP-aadress, brauseri tüüp, külastuse aeg). Seda tehakse küpsiste abil, et tagada veebilehe toimimine ja parandada kasutajakogemust. Küpsiste kasutamise saab seadistada oma veebilehitseja kaudu.
              </p>

              <h2>Kontakt</h2>
              <p>Kui Sul on küsimusi või soovid esitada isikuandmete töötlemisega seotud taotlusi, võta meiega ühendust:</p>
              <p>
                Soo Autogrupp OÜ<br />
                <a href="mailto:info@auto-diagnostika.ee" className="text-blue-600 hover:text-blue-700">info@auto-diagnostika.ee</a><br />
                <a href="tel:+37255511144" className="text-blue-600 hover:text-blue-700">+372 5551 1144</a><br />
                Soo tn 10, Põhja-Tallinna linnaosa, 10414 Tallinn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}