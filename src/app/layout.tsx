import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import StoreProvider from './StoreProvider';
import { TimerProvider } from './TimeProvider';

export const metadata: Metadata = {
  title: 'App',
  description: 'App description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <StoreProvider>
          <TimerProvider>
            <Header />
            {children}
          </TimerProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
