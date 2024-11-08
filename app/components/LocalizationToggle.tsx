'use client';

import { useState } from 'react';

export default function LocalizationToggle() {
    const [locale, setLocale] = useState('en'); // Default locale

    const toggleLocale = () => {
        setLocale((prevLocale) => (prevLocale === 'en' ? 'zh' : prevLocale === 'zh' ? 'cz' : 'en'));
    };

    return (
        <button
            onClick={toggleLocale}
            className="bg-gray-200 dark:bg-gray-700 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center w-7 h-7 overflow-hidden"
            aria-label="Toggle Language"
        >
            {locale === 'en' && <img src="/uk.svg" alt="English" className="w-full h-full object-cover" />}
            {locale === 'zh' && <img src="/tw.svg" alt="Chinese" className="w-full h-full object-cover" />}
            {locale === 'cz' && <img src="/cz.svg" alt="Czech" className="w-full h-full object-cover" />}
        </button>
    );
} 