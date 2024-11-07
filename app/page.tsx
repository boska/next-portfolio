import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-8">
      <Navbar />
      <header className="hero mb-12 mt-16 w-full max-w-2xl text-center">
        <Image
          src="https://avatars.githubusercontent.com/u/2024208"
          alt="Yang Lee Avatar"
          width={150} // Adjust width as needed
          height={150} // Adjust height as needed
          className="mx-auto rounded-full mb-6"
        />
        <h2 className="text-5xl font-bold mb-6">{"Hi, I'm Yang Lee"}</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          A passionate iOS developer with a knack for creating intuitive and engaging mobile applications.
        </p>
        <a href="#projects" className="inline-block bg-teal-500 text-white dark:bg-teal-400 dark:text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors">
          View My Work
        </a>
      </header>

      <section id="projects" className="mb-12 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold">CombineStore</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A Swift library for reactive state management. <a href="https://github.com/boska/CombineStore" className="text-teal-500 dark:text-teal-400">Explore &rarr;</a>
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold">Viscovery iOS SDK</h3>
            <p className="text-gray-700 dark:text-gray-300">
              An iOS SDK for AI enhanced Ad experience. <a href="https://github.com/viscovery/viscovery-ad-sdk-ios" className="text-teal-500 dark:text-teal-400">Explore &rarr;</a>
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-semibold">LaundryDash</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A react-native app for a laundry shop business. <a href="https://github.com/boska/laundry-dash" className="text-teal-500 dark:text-teal-400">Explore &rarr;</a>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {"From Taipei to Prague, my career has been a thrilling ride through the world of iOS development. I've had the privilege to work with amazing teams and lead projects that push the boundaries of mobile technology."}
        </p>
      </section>

      <section className="mb-12 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">{"Let's Connect"}</h2>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {"Whether you're interested in collaborating on a project or just want to chat about tech, feel free to reach out. I'm always open to new opportunities and connections."}
        </p>
      </section>

      <footer className="w-full max-w-2xl text-center mt-12">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2023 Yang Lee. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
