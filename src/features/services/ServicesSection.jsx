import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function ServicesSection() {
    const services = useSelector(state => state.services.services);
    const [showAll, setShowAll] = useState(false);

    const visibleServices = showAll ? services : services.slice(0, 3);
    function toggleServices() {
        setShowAll(prev => !prev);
    }

    return (
        <section id="services" className="bg-gray-50 py-12 px-6">
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {visibleServices.map(service => (
                    <div key={service.id} className="bg-white shadow p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
            {services.length > 3 && (
                <div className="mt-8 text-center">
                    <button
                        className="bg-blue-600 text-white px-6 py-3 cursor-pointer rounded hover:bg-blue-700 transition"
                        onClick={toggleServices}
                    >
                        {showAll ? 'Hide Services' : 'View All Services'}
                    </button>
                </div>
            )}
        </section>
    );
}
