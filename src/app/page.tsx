import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-8">
      <header className="flex items-center mb-6 sm:mb-8">
        <Image 
          src="/gdsclogo.svg" 
          alt="Google Developer Student Clubs Logo" 
          width={48} 
          height={48} 
          className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3"
        />
        <div>
          <h2 className="font-semibold text-sm sm:text-base">Google Developer Student Clubs</h2>
          <p className="text-xs sm:text-sm text-gray-600">Powered by Google</p>
        </div>
      </header>

      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 sm:mb-6">
          Access all your university tools and resources in one place.
        </h1>
        
        <p className="text-sm sm:text-base text-gray-800 mb-4 sm:mb-6 leading-relaxed">
          Quickly find info about course requirements, simplify resources navigation, be organized. Save four hours on your academic planning.
        </p>
        
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Our achievements in the past year:
        </h2>
        
        <ul className="list-none space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <li className="flex items-start">
            <span className="text-xl font-bold text-blue-600 mr-2">•</span>
            <span>
              Over <strong className="text-blue-600 text-lg">400+</strong> esteemed members and participants have joined our 
              <strong className="text-green-600"> flourishing community</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-xl font-bold text-blue-600 mr-2">•</span>
            <span>
              We&apos;ve orchestrated <strong className="text-blue-600">multiple hackathons</strong> and 
              <strong className="text-blue-600 text-lg"> 30+</strong> high-impact events, each designed to 
              <strong className="text-green-600"> captivate and inspire</strong>.
            </span>
          </li>
        </ul>
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/registration" passHref>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium text-sm w-full sm:w-auto mb-3 sm:mb-0">
              Register Now!
            </button>
          </Link>
          <p className="text-center sm:text-right text-gray-500 text-sm">Join 400+ students</p>
        </div>
      </div>
    </main>
  );
}
