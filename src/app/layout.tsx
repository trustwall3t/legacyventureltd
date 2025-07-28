import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import ChatwootWidget from '@/components/chatwootWidget';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Legacy Ventured Ltd - Welcome | Regulated Broker in Copy Trading, Trade with Zero Spreads',
	description: 'Legacy Ventured Ltd is a regulated broker in copy trading, trade with zero spreads',
	authors: [{ name: 'Legacy Ventured Ltd' }],
	openGraph: {
		title: 'Legacy Ventured Ltd - Welcome | Regulated Broker in Copy Trading, Trade with Zero Spreads',
		description: 'Legacy Ventured Ltd is a regulated broker in copy trading, trade with zero spreads',
		images: ['/images/tinkan-trust-logo.png'],
	},
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	
	return (
		<html lang='en'>
		
			<body className={inter.className}>
				{children}
				<Toaster />
				<ChatwootWidget />
			</body>
		</html>
	);
}
