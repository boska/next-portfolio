'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="flex gap-1 bg-gray-200 dark:bg-gray-800 p-1 rounded">
            <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-md transition-colors ${theme === 'light'
                        ? 'bg-white dark:bg-gray-700 text-yellow-500'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
                    }`}
                aria-label="Light mode"
            >
                <Sun size={16} />
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-md transition-colors ${theme === 'dark'
                        ? 'bg-white dark:bg-gray-700 text-blue-500'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
                    }`}
                aria-label="Dark mode"
            >
                <Moon size={16} />
            </button>
            <button
                onClick={() => setTheme('system')}
                className={`p-2 rounded-md transition-colors ${theme === 'system'
                        ? 'bg-white dark:bg-gray-700 text-purple-500'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
                    }`}
                aria-label="System theme"
            >
                <Monitor size={16} />
            </button>
        </div>
    );
} 