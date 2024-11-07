import ThemeToggle from './ThemeToggle'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-1">
                        <h1 className="text-base font-mono">Yang Lee -&gt;</h1>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
} 