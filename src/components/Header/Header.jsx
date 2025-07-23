import {useEffect, useState} from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import Modal from './Modal.jsx';

export default function Header() {
    const [now, setNow] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function handleFeedbackClick() {
        setIsModalOpen(true);
    }
    
    return (
        <header className="p-4 bg-gray-800 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between flex-wrap gap-5">
                    <h1>Welcome to My Vite React Project</h1>
                    <img src={viteLogo} alt="Vite logo" />
                    <img src={reactLogo} alt="React logo" />
                    <button onClick={handleFeedbackClick} className="py-2 px-5 cursor-pointer bg-amber-600 text-lg rounded-xl">Обратная связь</button>
                    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <h2 className="text-2xl font-bold">Feedback Form</h2>
                        <form method="dialog">
                            <input type="text" placeholder="Your feedback" className="border p-2 rounded w-full" />
                            <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
                        </form>
                    </Modal>
                </div>
                <p>
                    Время сейчас: {now.toLocaleTimeString()}
                </p>
            </div>
        </header>
    );
}