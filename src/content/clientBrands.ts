// Client logos already supplied in public/clients, matched to the Clients
// directory and their official sites on 17 October 2026. This is a record
// of client relationships, not a claim that every company is hiring today.
// Investor logos must never be added to this list as client endorsements.
//
// Disambiguation:
// - Heron is Heron Power (power electronics), not Heron Data.
// - MAVI is Molly Liu and Aman Puri's finance talent company, not Mavi denim.
// - Hera is Peter's motion-design company, not the healthcare company.
// - Ponte is Lorenza Velez and Stephanie Murra's Ponte Labor.
// - getcometa.com now redirects to cometaedu.com.
// - Mercai's current official site is mercai.ai (same founders as mercai.mx).
// Keep link destinations explicit; do not infer a domain from the name.

export interface ClientBrand {
  id: string;
  name: string;
  logo: string;
  href: string;
  width: number;
  height: number;
}

export const CLIENT_BRANDS: ClientBrand[] = [
  { id: 'addi', name: 'Addi', logo: '/clients/addi.png', href: 'https://co.addi.com/', width: 1024, height: 512 },
  { id: 'payjoy', name: 'PayJoy', logo: '/clients/payjoy.png', href: 'https://www.payjoy.com/', width: 1080, height: 188 },
  { id: 'heron', name: 'Heron Power', logo: '/clients/heron.png', href: 'https://heronpower.com/', width: 1800, height: 536 },
  { id: 'optery', name: 'Optery', logo: '/clients/optery.png', href: 'https://www.optery.com/', width: 666, height: 158 },
  { id: 'trebol', name: 'Trébol', logo: '/clients/trebol.png', href: 'https://www.gotrebol.com/', width: 1080, height: 218 },
  { id: 'cheaf', name: 'Cheaf', logo: '/clients/cheaf.png', href: 'https://www.cheaf.com/', width: 100, height: 32 },
  { id: 'mavi', name: 'MAVI', logo: '/clients/mavi.png', href: 'https://www.maviwork.com/', width: 137, height: 29 },
  { id: 'hera', name: 'Hera', logo: '/clients/hera.png', href: 'https://hera.video/', width: 300, height: 103 },
  { id: 'telepatia', name: 'Telepatía', logo: '/clients/telepatia.png', href: 'https://www.telepatia.ai/en', width: 520, height: 124 },
  { id: 'cometa', name: 'Cometa', logo: '/clients/cometa.png', href: 'https://cometaedu.com/', width: 1080, height: 255 },
  { id: 'sauce', name: 'Sauce', logo: '/clients/sauce.png', href: 'https://www.getsauce.com/', width: 925, height: 165 },
  { id: 'mercai', name: 'Mercai', logo: '/clients/mercai.png', href: 'https://www.mercai.ai/', width: 1080, height: 215 },
  { id: 'nue', name: 'Nue', logo: '/clients/nue.svg', href: 'https://www.nue.io/', width: 989, height: 393 },
  { id: 'konta', name: 'Konta', logo: '/clients/konta.png', href: 'https://konta.com/', width: 1080, height: 195 },
  { id: 'infolaft', name: 'Infolaft', logo: '/clients/infolaft.png', href: 'https://www.infolaft.com/', width: 1080, height: 423 },
  { id: 'ponte', name: 'Ponte', logo: '/clients/ponte.png', href: 'https://www.pontelabor.com/', width: 1080, height: 360 },
];
