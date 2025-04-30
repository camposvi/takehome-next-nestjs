import './globals.css';
import { ReactQueryProvider } from '@/lib/react-query';

export const metadata = {
  title: 'User Management App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
