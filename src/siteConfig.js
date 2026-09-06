export const site = {
  name: 'Green Door Coffee Cafe & Patisserie',
  address: '1C, Block R, Phase 2, Johar Town, Lahore 54782, Pakistan',
  phoneDisplay: '+92 326 7633376',
  whatsappNumber: '923267633376',
  instagramHandle: '@greendoorcoffeecafe',
  instagramUrl: 'https://www.instagram.com/greendoorcoffeecafe',
  hoursLabel: 'Open until 12:30 AM',
  googleRating: 4.5,
  googleReviewCount: 132,
  services: ['Dine-in', 'Takeout', 'Delivery'],
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Green+Door+Coffee+Cafe+%26+Patisserie,1C+Block+R+Phase+2+Johar+Town+Lahore+54782+Pakistan',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Green+Door+Coffee+Cafe+%26+Patisserie,1C+Block+R+Phase+2+Johar+Town+Lahore+54782+Pakistan&output=embed',
}

export const whatsappUrl = (message) => {
  const base = `https://wa.me/${site.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
