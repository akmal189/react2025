import {useState} from 'react';
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Header() {
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);
    
    return (
        <header className="p-4 bg-gray-800 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <h1>Welcome to My Vite React Project</h1>
                    <img src={viteLogo} alt="Vite logo" />
                    <img src={reactLogo} alt="React logo" />
                </div>
                <p>
                    Время сейчас: {now.toLocaleTimeString()}
                </p>
            </div>
        </header>
    );
}