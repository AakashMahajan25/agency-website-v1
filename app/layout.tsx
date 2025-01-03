import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
 import {} from "next/font/google"

 export const metadata = {
  metadataBase: new URL('https://yourwebsite.shop'),
  title: 'YourWebsite.shop | Elevate Your Online Presence',
  description: 'YourWebsite.shop is a premier web development agency delivering innovative and customized solutions to transform your online presence. From responsive design to seamless user experiences, we empower businesses to thrive in the digital world.',
  keywords: 'web development, website design, responsive web design, e-commerce solutions, web apps, custom web development, digital agency, YourWebsite.shop',
  author: 'YourWebsite.shop',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'YourWebsite.shop | Elevate Your Online Presence',
    description: 'YourWebsite.shop delivers cutting-edge web development services to help businesses succeed online. Explore our innovative solutions today!',
    url: 'https://yourwebsite.shop',
    type: 'website',
    // images: [
    //   {
    //     url: 'https://yourwebsite.shop/meta-image.jpg', // Replace with an actual image URL
    //     width: 1200,
    //     height: 630,
    //     alt: 'YourWebsite.shop - Web Development Agency',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'YourWebsite.shop | Elevate Your Online Presence',
  //   description: 'Innovative web development solutions tailored for your business. Let us help you succeed online!',
  //   image: 'https://yourwebsite.shop/meta-image.jpg', // Replace with an actual image URL
  //   site: '@YourWebsiteShop', // Replace with your Twitter handle
  // },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
