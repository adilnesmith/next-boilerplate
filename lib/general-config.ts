
export const API_DOMAIN = process.env.XYZ_API_URL || 'https://api.publicapis.org';

export const XYZ_SETTINGS = {
  API_URL: process.env.XYZ_API_URL || 'https://xyz.com',
  API_KEY: process.env.XYZ_API_KEY || 'HD4ifj',
  LISTS: {
    checkout: process.env.KLAVIYO_NEWSLETTER_CHECKOUT_ID || '4444',
    footer: process.env.KLAVIYO_NEWSLETTER_FOOTER_ID || '0000',
  },
}
export const SIDE_BAR = {
  LINKS: [
    {
      id: 1,
      label: "Home"
    }, {
      id: 2,
      label: "Profile"
    }, {
      id: 3,
      label: "Page I"
    }, {
      id: 4,
      label: "Page II"
    }
  ]
}
