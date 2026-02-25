import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: 'VFitness | Premium Gym And Personal Training',
  description: 'Modern, high-intensity fitness center with expert trainers, tailored plans, and results-driven programs.',
  metadataBase: new URL('https://www.vfitness-example.com'),
  openGraph: {
    title: 'VFitness | Premium Gym And Personal Training',
    description: 'Transform your body with elite trainers, modern equipment, and tailored programs.',
    url: 'https://www.vfitness-example.com',
    siteName: 'VFitness',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VFitness | Premium Gym And Personal Training',
    description: 'Modern gym with elite trainers, tailored plans, and high-energy classes.'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-white`}>
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
