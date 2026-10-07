// All site copy lives here so it can be edited without touching components.
// Text is taken from the original dnascreening.com site.

import img0101 from '../assets/gallery/img-0101.jpg'
import img0102 from '../assets/gallery/img-0102.jpg'
import img0104 from '../assets/gallery/img-0104.jpg'
import img0106 from '../assets/gallery/img-0106.jpg'
import img0107 from '../assets/gallery/img-0107.jpg'
import img0108 from '../assets/gallery/img-0108.jpg'
import img0109 from '../assets/gallery/img-0109.jpg'
import img0110 from '../assets/gallery/img-0110.jpg'
import img0113 from '../assets/gallery/img-0113.jpg'
import thumb0101 from '../assets/gallery/thumbs/img-0101.jpg'
import thumb0102 from '../assets/gallery/thumbs/img-0102.jpg'
import thumb0104 from '../assets/gallery/thumbs/img-0104.jpg'
import thumb0106 from '../assets/gallery/thumbs/img-0106.jpg'
import thumb0107 from '../assets/gallery/thumbs/img-0107.jpg'
import thumb0108 from '../assets/gallery/thumbs/img-0108.jpg'
import thumb0109 from '../assets/gallery/thumbs/img-0109.jpg'
import thumb0110 from '../assets/gallery/thumbs/img-0110.jpg'
import thumb0113 from '../assets/gallery/thumbs/img-0113.jpg'
import detourMap from '../assets/detour-charles-west.png'
import inkIsMyLife from '../assets/ink-is-my-life.jpg'
import ourBigResponsibility from '../assets/our-big-responsibility.jpg'

export const business = {
  name: 'DNA Screen Printing',
  shortName: 'DNA Screening',
  founded: 1994,
  tagline: 'The revolution is just a t-shirt away.',
  phone: '519-585-1033',
  phoneHref: 'tel:+15195851033',
  email: 'mail@dnascreening.com',
  address: ['18 Charles St. W', 'Kitchener, ON', 'Canada'],
  mapsUrl: 'https://www.google.ca/maps/place/18+Charles+St.+W,+Kitchener,+ON',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2896.5196773194493!2d-80.4920184!3d43.449746700000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f3a3f67051%3A0xab292a68aaed9542!2s18+Charles+St+W%2C+Kitchener%2C+ON+N2G!5e0!3m2!1sen!2sca!4v1422409992258',
  loginUrl: 'http://www.dnascreening.com/cgi-bin/customer/ps_customer_cal.cgi',
  social: {
    facebook: 'https://www.facebook.com/dnascreeningink',
    twitter: 'https://twitter.com/dnascreeninginc',
  },
  hours: [
    { day: 'Monday', time: '10am – 5pm' },
    { day: 'Tuesday', time: '10am – 5pm' },
    { day: 'Wednesday', time: '10am – 5pm' },
    { day: 'Thursday', time: '10am – 5pm' },
    { day: 'Friday', time: '10am – 5pm' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
  quoteBlurb:
    'We offer a variety of screen printing options on a variety of garments. From t-shirts to polyester team shirts we can fulfill all of your custom screening needs.',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/qa', label: 'Q&A' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export const home = {
  heroTitle: ['Wear Your', 'DNA'],
  heroImage: img0101,
  heroImageAlt: 'Close-up of a black Hello Amora band tee screen printed by DNA',
  intro:
    'DNA Screening was founded in 1994. Over the 20+ years of screen printing, DNA has evolved, growing in size and skill — fuelled by a passion for music, pop culture, and all forms of expressionism.',
  quote:
    'Custom screen printed shirts advertise who you are and what you’re about, and DNA has the chops to make great shirts.',
  left: {
    title: 'Custom Tees',
    text: 'Screen printing up to 8 spot colours, from simple one colour prints to full colour process jobs.',
    image: img0104,
    alt: 'Black A Rebel Few band tee with a distressed gold and white print',
    to: '/gallery',
  },
  right: {
    title: 'Team Shirts',
    text: 'From t-shirts to polyester team shirts we can fulfill all of your custom screening needs.',
    image: img0113,
    alt: 'Back of a navy Colt Canada “True North Strong & Free” shirt printed by DNA',
    to: '/quote',
  },
  explore: [
    {
      title: 'Gallery',
      text: 'Band wear, fan wear and shop tees printed for our clients.',
      image: thumb0109,
      alt: 'Mom’s Tattoo Shop shirt with a vintage robot tattoo print',
      to: '/gallery',
    },
    {
      title: 'Our Inks',
      text: 'DNA uses phthalate free inks.',
      image: ourBigResponsibility,
      alt: 'Rutland “Our Big Responsibility” non-phthalate ink advertisement with a green seedling',
      to: '/qa',
    },
  ],
  callouts: [
    { title: 'About', to: '/about', text: 'On DNA and screen printing as a social backbone.' },
    { title: 'Gallery', to: '/gallery', text: 'A look at shirts we have printed for our clients.' },
    { title: 'Q&A', to: '/qa', text: 'Art specs, services, inks, order sizes and more.' },
  ],
}

export const about = {
  heading: 'On DNA and Screen Printing as a Social Backbone',
  paragraphs: [
    'DNA Screening was founded in 1994, when media was abuzz with one of history’s most publicized murder trials and DNA evidence was still relatively new. DNA was new in conversations, compelling, and at the time it was becoming evident that DNA was the one thing that excited and united us. It was in this spirit that our name was chosen and since then DNA Screening has been determined to be a reliable beacon in an oft unreliable world.',
    'Over the 20+ years of screen printing, DNA has evolved, growing in size and skill. The original energy remains, fuelled by a passion for music, pop culture, and all forms of expressionism. In fact, it was after a fairly recent and awesome live show when the latest DNA logo and its ‘Revolution is just a T-shirt away’ tagline was adopted:',
  ],
  lyric: [
    'If no one seems to understand',
    'Start your own revolution, cut out the middleman',
    'In a perfect world we’d all sing in tune',
    'But this is reality so give me some room',
    'Join the struggle while you may',
    'The Revolution is just a t-shirt away',
  ],
  lyricCite: 'Billy Bragg — ‘Waiting for the Great Leap Forward’',
  closing:
    'Screen printing aligns itself with unity; the medium requires repetition of print which is perfect for band wear, team wear, fan wear, shared artistic, political, or personal expression. Custom screen printed shirts advertise who you are and what you’re about, and DNA has the chops to make great shirts.',
}

export const gallery = [
  { client: 'Hello Amora', full: img0101, thumb: thumb0101, alt: 'Black Hello Amora tee with a red, white and grey rabbit magician print' },
  { client: 'Heavy T.O.', full: img0102, thumb: thumb0102, alt: 'Black Heavy T.O. Toronto 2012 shirt with three hooded reapers in green, grey and red' },
  { client: 'A Rebel Few', full: img0104, thumb: thumb0104, alt: 'Black A Rebel Few band tee with a distressed gold and white print' },
  { client: 'Maylene and the Sons of Disaster', full: img0106, thumb: thumb0106, alt: 'Maylene and the Sons of Disaster tee with distressed white lettering and a yellow snake' },
  { client: 'Maylene and the Sons of Disaster', full: img0107, thumb: thumb0107, alt: 'Light Maylene and the Sons of Disaster tee with a woman in a wolf headdress' },
  { client: 'Hello Amora', full: img0108, thumb: thumb0108, alt: 'Light Hello Amora tee with a clown holding red and blue balloons' },
  { client: 'Mom’s Tattoo Shop', full: img0109, thumb: thumb0109, alt: 'Mom’s Tattoo Shop shirt with a vintage “Old Fashioned Robot Tattooing” print' },
  { client: 'Colt', full: img0113, thumb: thumb0113, alt: 'Navy Colt Canada “True North Strong & Free” shirt' },
  // The original site left the client name blank for this one.
  { client: '', full: img0110, thumb: thumb0110, alt: 'Black Mom’s Tattoo Shop shirt with a red and grey pin-up skull print' },
]

export const qa = [
  {
    q: 'How do I supply DNA with my custom image for screen printing?',
    lead: 'Please review our following Art Specs:',
    body: [
      'All separations are done by DNA for our presses. For best print results, please submit high resolution art in any of the following formats. Minimum DPI of 300. It is best to start at a high DPI (300 through 600) than at a low one (72 dpi – web standard). It is also best to start at the size of the design you want than increase it. For example, it is best to design your 10″ print at 10″ rather than 3″ and then increase it.',
    ],
    list: [
      'Portable Document Format (*.pdf)',
      'Adobe Illustrator (*.ai)',
      'Encapsulated Post Script (*.eps)',
      'Adobe Photoshop (*.psd)',
      'Tagged Image Format (*.tif)',
    ],
    after: [
      'We accept email, dropbox, ftp, and flash drives. For hand drawn art please contact us. Please convert or rasterize fonts. All separations done in house by DNA. Please provide pantone numbers where applicable. DNA will match to industry standard pantone books.',
    ],
  },
  {
    q: 'What services does DNA offer?',
    lead: 'DNA offers many possibilities for custom screen printing, from simple one colour prints to complex full colour process (photo realistic) jobs. These are some of the printing options we provide:',
    list: [
      'Screen Printing up to 8 spot colors',
      'Simulated or Full Colour Process Printing',
      'Water Base and ‘Dyeflash’™ Printing',
      'Metallic, Puff, Glow in the Dark Ink',
      'High Volume or Small Print Runs',
      'Private Relabelling',
      'Textile, Wood, Nylon, and Paper Screen Printing',
    ],
    after: [
      'If you have any questions please call or email us. We print on many locations including inside tags, sleeves, and side prints. DNA offers electronic art proofs after order placement and pre-press.',
    ],
  },
  {
    q: 'I am a new Contract Customer. Can I track my print order?',
    lead: 'Absolutely. Use the login button and the password that DNA has provided you with upon Contract Customer set-up.',
    body: [
      'After you login, you will be able to track each of your orders for their print date and order status, including whether artwork has been received from your art department and whether garments have been received from your distributor. DNA’s automated notifications will email you if your print date is approaching and if any of these print elements are missing. Your order will be listed under the Purchase Order number that you submit for your order. DNA maintains this service for repeat Contract Customers with high volume; if you are a new customer service representative from an existing DNA customer database, please feel free to contact DNA for your password and login details.',
    ],
  },
  {
    q: 'What inks do you use?',
    lead: 'DNA uses phthalate free inks.',
    body: [
      'Phthalates (pronounced THA-lates) are a group of chemicals that can make products (usually plastics) softer and more flexible. They are sometimes called plasticizers, but many other chemicals are also called plasticizers. The International Agency for Research on Cancer (IARC) classifies diethylhexyl phthalate (DEHP) as a possible cause of cancer. Make sure your plastic products are phthalate free!',
    ],
    images: [
      { src: ourBigResponsibility, alt: 'Rutland “Our Big Responsibility” advertisement for non-phthalate inks' },
      { src: inkIsMyLife, alt: 'Rutland “Ink Is My Life” advertisement for PVC-free, phthalate-free water-base inks' },
    ],
  },
  {
    q: 'What is your minimum or maximum print order?',
    lead: 'DNA has 2 automatics and 3 manual screen printing presses.',
    body: [
      'From large order runs like our Tim Horton’s Camp Day shirts (20,000) to smaller orders for start-up companies, DNA can service a broad range of custom screen printing requests. We also have full, industry standard dryers that are crucial for a good “cure” (the component of t-shirt printing that ensures ink won’t crack on your shirt after the first wash). Our bay area opens up to Halls Lane in Downtown Kitchener where large shipments of blank shirts arrive and quality, custom screen printed shirts are shipped back out for community-building events.',
    ],
  },
  {
    q: 'I am a Retail Customer. Where do I look for blank imprintable garments for screen printing?',
    lead: 'After over 20 years in business, DNA has identified the best garment distributors in our area.',
    body: [
      '90% of our clientele require quick turn-around, so we direct them to sanmarcanada.com to look at basic, quality garments all geared toward either screen printing or embroidery. Please contact us with your custom print goals so that we can help you choose the best garment for your design. *NOTE: we can offer Canadian-made, socially conscious garments as well as basic, economical items for any printing occasion.',
    ],
  },
  {
    q: 'You mentioned embroidery in your last answer. Is this a service that you offer?',
    lead: 'DNA are screen printing specialists.',
    body: [
      'We know that some garments (like jackets or sports shirts) benefit from embroidery application over a screen printing method. Please email us with a .jpg of what you’re looking to get embroidered with quantity and garment requests.',
    ],
  },
  {
    q: 'I need pricing for items that are not covered in your quick quote area. How do I proceed?',
    body: [
      'Please contact us for any print pricing queries. Email is the best method, where you can include: the image you want printed, the quantity of prints you need, the garment style and colour(s) you are looking for, whether you are supplying your own garments or whether you want us to source them for you, and your event date (if applicable).',
    ],
  },
]

export const posts = [
  {
    slug: 'detour-map',
    title: 'Construction Detour Map',
    date: '2015-03-30',
    dateLabel: 'March 30, 2015',
    author: 'qbattersby',
    category: 'Shop News',
    excerpt:
      'Luck favours the prepared! During the LRT construction, please utilize this GrandLinq supplied map to plan your route to get to us. We can’t wait to see you!',
    body: [
      'Luck favours the prepared!',
      'During the LRT construction, please utilize this GrandLinq supplied map to plan your route to get to us. We can’t wait to see you!',
    ],
    image: detourMap,
    imageAlt: 'GrandLinq construction detour map for Charles Street West in downtown Kitchener',
  },
]

export const quoteForm = {
  sizes: ['Extra small', 'Small', 'Medium', 'Large', 'XL', 'XXL'],
  colours: [1, 2, 3, 4, 5, 6, 7, 8],
  customize: ['Foil', 'Pantone', 'Heat Transfer', 'Tag Removal', 'Discharge', 'Embroidery'],
}
