import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moh. Faried Al Farizi | AI Engineer & Data Science',
  description: 'Portfolio AI Engineer dan Data Science dengan fokus pada computer vision, NLP, deployment, dan data-driven products.',
};

import ChatbotBubble from './components/ChatbotBubble';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ChatbotBubble />
      </body>
    </html>
  );
}