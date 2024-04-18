import Link from 'next/link';
import Image from 'next/image'
import { nunito_sans } from './ui/fonts';

import Logo from './public/images/V_Logotype_Red.png'

export const metadata = {
    title: 'Valpal',
};

import './layout.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${nunito_sans.className}`}>
                <nav>
                    <Image
                        className={`PageLogo`}
                        src={Logo}
                        width={200}
                        alt="Valorant Logo"
                        priority
                    />
                    <ul className= {`Links `}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/agents">Agents</Link></li>
                        <li><Link href="/weapons">Weapons</Link></li>
                        <li><Link href="/maps">Maps</Link></li>
                    </ul>
                </nav>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}