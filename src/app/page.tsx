import Image from "next/image";
import Link from "next/link";
import Registration from '@/components/Registration';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-4 sm:p-8">
      <header className="flex items-center mb-8 sm:mb-12">
        <Image 
          src="/gdsc.svg" 
          alt="Google Developer Student Clubs" 
          width={32} 
          height={32} 
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <span className="ml-2 font-semibold text-sm sm:text-base">Google Developer Student Clubs</span>
      </header>

      <div className="max-w-2xl">
        <Image 
          src="/google.svg" 
          alt="Powered by Google" 
          width={100} 
          height={20} 
          className="h-5 sm:h-6 w-auto mb-4"
        />
        
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          Access all your university tools and resources in one place.
        </h1>
        
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
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
