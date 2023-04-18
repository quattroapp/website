import React, {PropsWithChildren} from 'react';
import Logo from '../assets/logo_with_text.svg'

export default function Home(): JSX.Element {
    return (
        <div className={'flex flex-col space-y-12 md:justify-between flex-1'}>
            <Header />
            <HeroSection />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div className={'flex flex-row xl:px-40 lg:px-32 lg:py-10 px-6 py-6 justify-start items-center'}>
            <Logo height={40} width={162}/>
            <NavLinks/>
            <Actions/>
        </div>
    )
}

function NavLinks() {
    return (
        <div className={'ml-16 flex flex-row space-x-8 items-center hidden lg:flex'}>
            <NavLink>Funzionalità</NavLink>
            <NavLink>Integrazioni</NavLink>
            <NavLink>Prezzi</NavLink>
        </div>
    )
}

function NavLink(props: PropsWithChildren) {
    return <div className={'cursor-pointer hover:text-gray-800 text-gray-500'}>{props.children}</div>
}

function Actions() {
    return (
        <div className={'hidden sm:flex ml-auto flex flex-row space-x-8 items-center'}>
            <NavLink>Accedi</NavLink>
            <div className={'flex items-center justify-center bg-blue-500 font-semibold text-white hover:bg-blue-600 px-5 py-2 rounded-full'}>Inizia qui</div>
        </div>
    )
}

function HeroSection() {
    return (
        <div className={'flex flex-col justify-center items-center space-y-9 text-center'}>
            <span className={'text-4xl md:text-6xl font-bold'}>La gestione <span className={'text-blue-500'}>in cloud</span><br/>pensata per il tuo business.</span>
            <div className={'flex px-6 md:text-lg'}>Raccogli gli ordini da più canali, riduci gli errori, automatizza l’organizzazione<br className={'hidden md:inline'}/> delle spedizioni e migliora la gestione delle relazioni con i tuoi clienti.</div>
            <div
                className={'flex items-center justify-center text-gray-500 border border-gray-500 px-5 py-2 rounded-full'}>
                In arrivo nel 2024
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className={'h-32 bg-blue-500 hidden md:flex'} />
    )
}
