import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FaqSection() {
    const faq = useSelector(state => state.faq.faq);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 gap-5 dark:border-gray-700 md:grid-cols-2">
                    {faq.map((item, index) => (
                        <div key={index} className="p-5 border rounded-2xl border-gray-200 dark:border-gray-700">  
                            <button type="button" onClick={() => toggleAccordion(index)} className="flex items-center text-left text-lg cursor-pointer font-medium text-gray-900 dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                {item.title}
                            </button>
                            {activeIndex === index ? <p className="text-gray-500 mt-4 dark:text-gray-400">{item.text}</p> : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}