import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-4 sm:p-8">
      <header className="flex items-center mb-6 sm:mb-8">
        <Image 
          src="/gdsclogo.svg" 
          alt="Google Developer Student Clubs Logo" 
          width={48} 
          height={48} 
          className="w-8 h-8 sm:w-12 sm:h-12 mr-2 sm:mr-3"
        />
        <div>
          <h2 className="font-semibold text-xs sm:text-base">Google Developer Student Clubs</h2>
          <p className="text-xxs sm:text-xs text-gray-600">Powered by Google</p>
        </div>
      </header>

      <div className="max-w-xl sm:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Access all your university tools and resources in one place.
        </h1>
        
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Quickly find info about course requirements, simplify resources navigation, be organized. Save four hours on your academic planning.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <Link href="/registration" passHref>
            <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium mb-3 sm:mb-0 sm:mr-4 text-sm sm:text-base w-full sm:w-auto">
              Register Now!
            </button>
          </Link>
          <span className="text-gray-500 text-sm sm:text-base">Join 400+ students</span>
        </div>
      </div>
    </main>
  );
}
