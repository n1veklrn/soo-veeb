export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  createdAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mootorituli-pohjused',
    title: 'Levinumad põhjused, miks hakkab armatuuril põlema mootorituli ja mida edasi teha',
    summary: 'Kui armatuuril süttib oranž või kollane mootorituli, on esimene reaktsioon sageli paanika. Kas auto on kohe katki? Kas võib edasi sõita või tuleb auto seisma jätta? Tõde on see, et mootorituli võib tähendada väga erinevaid asju. Mõnikord on probleem lihtne ja odav lahendada, kuid teinekord peidab see endas tõsisemat riket, mis võib tähelepanuta jätmisel viia suuremate kuludeni.',
    content: `Mis on mootorituli ja miks see süttib?

Mootorituli on osa auto pardaarvuti süsteemist. Kui mõni andur avastab kõrvalekalde, annab süsteem sellest märku läbi armatuuril põleva sümboli. See on justkui hoiatus, et midagi ei tööta nii, nagu peaks. Mõnikord kustub tuli pärast mõnda käivitust ise, kuid see ei tähenda, et probleem oleks kadunud.

Levinumad põhjused

1. Hapnikuanduri rike
Hapnikuandur mõõdab heitgaase ja aitab mootoril kütust õigesti doseerida. Kui andur ei tööta, võib kütusekulu tõusta ja mootor töötada ebaefektiivselt. Pikaajaliselt võib see rikkuda katalüsaatori.

2. EGR-klapi probleemid
EGR-klapp juhib osa heitgaase tagasi mootorisse, et vähendada saastet. Kui klapp ummistub või jääb kinni, süttib mootorituli ning sõiduk võib hakata suitsu välja ajama või jõud kaob.

3. Süütepoolide ja küünalde rikked
Kui mootor hakkab tõmblema või kaotab jõudu, on põhjuseks sageli süütepool või küünlad. See on levinud põhjus, miks tuli põlema hakkab, ja seda on mõistlik kiiresti kontrollida, et vältida suuremaid kahjustusi.

4. Kütusesüsteemi vead
Kütusepumba, pihustite või kütusefiltri probleemid annavad end tihti märku läbi mootoritule. Mõnel juhul võib auto käivitumine muutuda raskeks või kaob kiirendusel jõud.

5. Mootori juhtaju ja tarkvara
Mõnikord ei ole probleem mehhaaniline, vaid elektrooniline. Auto juhtaju võib saada vigaseid signaale või vajada tarkvara uuendust. Ka see süütab armatuuril hoiatuse.

Millal võib edasi sõita ja millal tuleb peatuda?

Kui tuli süttib, kuid auto käitub tavapäraselt, on tavaliselt võimalik rahulikult sõita lähimasse töökotta. Kui aga tuli vilgub, kaasneb suits, ebaharilikud hääled või jõu kadu, tuleb auto koheselt seisma jätta ja abi otsida. Vilkuv tuli tähendab sageli, et mootor võib saada pöördumatut kahju, kui sõitu jätkata.

Kuidas meie töökojas vea leiame?

Soo Autogrupp kasutab diagnostikaks kaasaegseid Bosch seadmeid, mis loevad veakoodid otse auto aju mälust. See annab täpse pildi, milline süsteem või komponent vajab tähelepanu. Lisaks kontrollime mehhaaniliselt, et probleem ei piirdud ainult elektroonilise veateatega. Tihti toob see välja vead, mida teised töökojad ei suuda leida.

Mida teha, kui mootorituli süttib?

Ära ignoreeri hoiatust.

Pane tähele, kas kaasnevad ka muud sümptomid (tõmblemine, suits, ebatavaline heli).

Broneeri diagnostika nii kiiresti kui võimalik.

Kokkuvõte

Mootorituli ei ole lihtsalt tüütu sümbol armatuuril, vaid oluline hoiatussüsteem, mis aitab vältida suuremaid rikkeid. Levinumad põhjused ulatuvad lihtsatest anduririketest kuni kütuse- või süütesüsteemi probleemideni. Õigeaegne diagnostika säästab raha ja hoiab auto töökorras.

Kui sinu autol hakkas armatuuril põlema mootorituli, tule meie töökotta Tallinnas. Leiame vea kiiresti üles ja aitame vältida suuremaid kulusid.`,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    slug: 'winter-car-maintenance-tips',
    title: '5 Essential Winter Car Maintenance Tips',
    summary: 'Prepare your vehicle for winter weather with these essential maintenance tips. Keep your car running smoothly through the cold months.',
    content: `Winter weather can be harsh on vehicles. Follow these essential maintenance tips to keep your car running smoothly during the cold months.

1. Check Your Battery

Cold weather reduces battery capacity. Have your battery tested before winter arrives. Replace it if it's more than 3-4 years old.

2. Inspect Your Tires

Winter tires provide better traction in snow and ice. Check tire pressure regularly as it drops in cold weather. Ensure adequate tread depth for safe driving.

3. Test Your Heating System

A functioning heater is essential for comfort and safety. Check that your heating system works properly and that the defroster clears windows effectively.

4. Replace Wiper Blades and Washer Fluid

Install winter wiper blades and use washer fluid rated for freezing temperatures. Good visibility is crucial for winter driving safety.

5. Check Your Antifreeze

Ensure your coolant is properly mixed and at the correct level. This prevents your engine from freezing and protects against overheating.

Professional Winter Preparation:

Our team at SOO AUTOGRUPP offers comprehensive winter preparation services. We'll inspect all critical systems and ensure your vehicle is ready for winter conditions.

Schedule your winter check-up today!`,
    createdAt: '2024-02-10',
  },
  {
    id: '3',
    slug: 'signs-your-car-needs-immediate-attention',
    title: 'Warning Signs Your Car Needs Immediate Attention',
    summary: "Don't ignore these critical warning signs. Learn which symptoms indicate serious problems that require immediate professional attention.",
    content: `Some car problems can wait, but others require immediate attention. Here are warning signs you should never ignore:

Dashboard Warning Lights:

- Check Engine Light - Could indicate serious engine problems
- Oil Pressure Warning - Immediate attention needed to prevent engine damage
- Brake System Warning - Critical safety issue
- Temperature Warning - Engine overheating risk

Unusual Sounds:

- Grinding from brakes - Worn brake pads or rotor damage
- Knocking from engine - Potential serious engine damage
- Squealing belts - Worn or loose drive belts
- Clunking when turning - Possible suspension or steering issues

Performance Problems:

- Difficulty starting - Battery or starter issues
- Stalling or rough idle - Fuel system or ignition problems
- Loss of power - Multiple potential causes requiring diagnosis
- Excessive vibration - Tire, wheel, or engine mount issues

Fluid Leaks:

Different colored fluids indicate different problems:
- Red/Pink: Transmission or power steering fluid
- Green/Orange: Coolant
- Brown/Black: Engine oil
- Clear: Water (usually normal) or brake fluid (serious)

What to Do:

If you notice any of these warning signs, don't delay. Contact SOO AUTOGRUPP immediately for professional diagnosis and repair. Ignoring these symptoms can lead to more expensive repairs or safety hazards.

Emergency service available - call us today!`,
    createdAt: '2024-03-05',
  },
  {
    id: '4',
    slug: 'benefits-of-regular-vehicle-servicing',
    title: 'The Benefits of Regular Vehicle Servicing',
    summary: "Regular maintenance extends your vehicle's life and saves money. Discover why scheduled servicing is one of the best investments you can make.",
    content: `Regular vehicle servicing is one of the most important investments you can make for your car. Here's why scheduled maintenance matters:

Cost Savings:

Preventive maintenance is always cheaper than emergency repairs. Regular servicing helps identify small problems before they become expensive failures.

- Oil changes prevent engine wear
- Brake inspections avoid costly rotor replacement
- Fluid checks prevent system damage
- Filter replacements maintain efficiency

Safety Benefits:

Well-maintained vehicles are safer vehicles. Regular servicing ensures:

- Properly functioning brakes
- Good tire condition and alignment
- Working lights and signals
- Reliable steering and suspension

Performance and Efficiency:

Regular maintenance keeps your vehicle running at peak performance:

- Better fuel economy
- Smoother acceleration
- Improved handling
- Optimal engine performance

Reliability:

Scheduled servicing reduces the risk of breakdowns:

- Fewer unexpected failures
- Increased vehicle longevity
- Better resale value
- Peace of mind

Our Service Approach:

At SOO AUTOGRUPP, we follow manufacturer recommendations and use quality parts. Our comprehensive service includes:

- Complete vehicle inspection
- Fluid level checks and top-ups
- Filter replacements
- Brake inspection
- Tire rotation and pressure check
- Safety system verification

We maintain detailed service records for your vehicle and remind you when service is due.

Book your next service appointment today and experience the SOO AUTOGRUPP difference!`,
    createdAt: '2024-03-20',
  },
];
