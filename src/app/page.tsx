import Link from 'next/link'
import Image from 'next/image'
import statue from '../images/statue.png'
import { Figtree } from 'next/font/google'
import { Cormorant } from 'next/font/google'
import { client } from '@/utils/sanity/client'

const figtree = Figtree({ subsets: ['latin'] })
const cormorant = Cormorant({ subsets: ['latin']})

async function getContent() {
  const CONTENT_QUERY = `*[_type == "place"] {
  ...,
  location {
    ...
  },
  image {
    ...,
    asset->
  },
  content[] {
    _type,
    ...,
    defined(string) => string
  },
  oralHistories[]->
}`
    const content = await client.fetch(CONTENT_QUERY);
    return content
}

export default function Home() {
    // Fetch content with GROQ
    getContent().then(content => console.log('sanity debug: ', content));
    

  return (
    <main className="min-h-screen flex flex-col">
    <nav className="flex flex-col items-center w-fit py-2 px-2 sm:py-8 sm:px-16">
      <div className="flex flex-row text-xl sm:text-lg sm:w-1/4 gap-10 sm:place-content-between cursor-pointer text-slate-200">
        <Link href="/about">
          <p className="hover:text-slate-500">About</p>
        </Link>
        <Link href="/book">
          <p className="hover:text-slate-500">Buy the Book</p>
        </Link>
      </div>
      {/* line under nav */}
      <div className="w-11/12 sm:w-5/6 h-1 bg-slate-200 mt-2 opacity-50"></div>
     
    <div className="mx-12 sm:mx-2 w-11/12 sm:w-5/6 text-center mt-4">
        <h1 className={`${cormorant.className} text-2xl sm:text-2xl sm:mx-10 text-slate-100`}>
        The Maplibs Project is a living atlas of the spaces that make feel, remember, and imagine community in the greater Bronzeville neighborhoods.
        </h1>
    </div>
    </nav>
    
    <div className={`${figtree.className} flex flex-col sm:flex-row gap-5 content-between pt-8 sm:p-32 items-center justify-between`}>

    <Link href="/maplib">
      <div className="bg-blue-500 bg-opacity-30 rounded-full flex items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
        <p className="text-slate-100">Play MapLibs</p>
      </div>
      </Link>
      <Link href="/views">
      <div className="bg-blue-500 bg-opacity-30 rounded-full flex items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
        <p className="text-slate-100">Explore a View of Bronzeville</p>
      </div>
      </Link>
      
    </div>


    <div className="flex mx-auto before:fixed before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl after:-z-20 after:h-[100px] after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-400 after:blur-2xl before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-200 before:dark:opacity-10 after:dark:from-sky-300 after:dark:via-[#0369a1] after:dark:opacity-30 before:lg:h-[180px] z-[-1]">
          <div className="fixed -bottom-2 -z-1 opacity-25 sm:opacity-70 w-72 sm:w-72">
            <Image
                src={statue}
                alt="Picture of the Bronzeville Statue"
              />
            </div>
      </div>
      
    </main>
  )
}


// text
// The Maplibs Project is a living atlas of the spaces that make us feel, remember and imagine community in greater Bronzeville neighborhoods. We gather residents to more inclusively pursue a shared vision for the future of the built environment. Inspired by the word game Mad Libs, the project invites you to reflect on your community by playing a word game. The game lets players fill in key parts of a story about community in their neighborhood using words of particular senses. Stretching conventional notions of maps and mapping, the project invites you to submit sounds, photos and videos of your view of community. The collection of media submissions explores the moments of memory making and imagining. The Maplibs Project is a porch for neighborhood memory, experience and imagination.
