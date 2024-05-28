'use client'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import header from '../../images/header.png'
import { useState, useEffect, JSX } from 'react'

let text1: JSX.Element;
let text2: JSX.Element;

type Reflection = {
    neighborhood: string,
    place: string,
    sound: string,
    smell: string,
    event: string,
    street_corner_object: string,
    first_name: string,
    email: string,
}

async function createReflection(reflection: Partial<Reflection>) {
    console.log("Create Reflection: ", reflection)
    const response = await fetch("/api/reflections", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reflection),
    });
    return response;
}

export default function Maplib() {
    const [isMenuVisible, setMenuVisible] = useState(true);
    const [selectedTab, setSelectedTab] = useState('instructions');
    const [text, setText] = useState(text1);

    const reflection: Partial<Reflection> = {};
    const [form, setForm] = useState(reflection);

    // const isMobile = window.innerWidth <= 768; 
    const bulletPoint = String.fromCodePoint(0x022C6)

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createReflection(form).then((data) => {
            console.log("DEUBG DATA: ", data);
        })
    }

    function changeInfo () {
        if (selectedTab === 'instructions') {
            text1 = <p>{bulletPoint} Reflect on your neighborhood <br />{bulletPoint} Learn about where your neighbors feel a sense of community <br />{bulletPoint} Play the word game online or by phone <br />{bulletPoint} Open a new view of community in a neighborhood <br />{bulletPoint} Submit sounds, photos and videos of your view of community</p>
            setText(text1);
        } else if (selectedTab === 'example') {
            text2 = <p>I live in <span className="underline">Bronzeville.</span> My neighborhood feels like a community when I go to <span className="underline">Sip & Savor</span> and hear
                <span className="underline"> the hum of conversation</span> and smell <span className="underline">coffee.</span> I wish more people knew about the history of <span className="underline">The Forum</span> in this neighborhood.
                In the future, I hope that every street corner has <span className="underline">a community-inspired light post.</span>
            </p>
            setText(text2);
        }
    }

    useEffect(() => {
        changeInfo();
    }, [selectedTab])
    
    return (
        <main className="min-h-screen sm:py-20 flex flex-col gap-10 sm:flex-row sm:justify-evenly">
            <div className="flex flex-col items-center gap-4 sm:gap-10 sm:pt-10 sm:w-2/5 text-slate-100">
                <nav className="flex flex-col min-w-full items-center">
                    <Link  href="/">
                        <span className="material-symbols-outlined" style={{fontSize:"36px"}}>
                            home
                        </span>
                    </Link>
                <div className="flex min-w-full justify-evenly pt-4 sm:pt-8 cursor-pointer">
                    <p onClick={() => setSelectedTab('instructions')}>Instructions</p>
                    <p onClick={() => setSelectedTab('example')}>Example</p>
                </div>
                <div className="w-4/5 h-0.5 bg-slate-300 mt-2"></div>
                </nav>
                <div className={`px-4 leading-loose ${selectedTab == "instructions" ? "max-w-lg" : "max-w-lg"}`}>{text}</div>
            </div>
            
            {/* This is where the form lies */}
            <div className="flex flex-col sm:items-center sm:gap-14 bg-slate-200 w-11/12 sm:max-w-xl sm:w-4/5 border-2 border-black mb-6 ">
                <div className="pt-3 sm:pt-5">
                        <Image
                        src={header}
                        alt="Picture of Maplibs header"
                    />
                </div>
                <div className="pt-4sm:pt-1 sm:px-4 flex flex-col items-center">
                    <form className="px-4 py-4 border-2 border-black w-11/12 text-black leading-10" onSubmit={submitForm}>
                        <p>
                            I live in <input onChange={(e) => setForm({...form, neighborhood: e.target.value})} type="text" placeholder="a neighborhood"></input>. 
                            My neighborhood feels like a community when I go to
                            <input onChange={(e) => setForm({...form, place: e.target.value})} type="text" placeholder="a place"></input>, 
                            hear <input onChange={(e) => setForm({...form, sound: e.target.value})} type="text" placeholder="a sound"></input>, 
                            and smell <input onChange={(e) => setForm({...form, smell: e.target.value})} type="text" placeholder="a smell"></input>. 
                            I wish more people knew about the history of <input onChange={(e) => setForm({...form, event: e.target.value})} className="mr-1" type="text" placeholder="an event"></input> 
                            in this neighborhood. In the future, I hope every street corner has 
                            <input onChange={(e) => setForm({...form, street_corner_object: e.target.value})} type="text" placeholder="an object"></input>.
                         </p>
                        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between py-4">
                        <input onChange={(e) => setForm({...form, first_name: e.target.value})} type="text" placeholder="First Name"></input>
                        <input onChange={(e) => setForm({...form, email: e.target.value})} type="text" placeholder="Email"></input> 
                        </div>

                        <div className="mt-4 pb-6 flex justify-center gap-4 text-black cursor-pointer">
                        <label className="border-2 border-black w-20 h-8 flex justify-center items-center rounded-xl" htmlFor="upload">Upload</label>
                        <input type="file" id="upload" name="upload" hidden></input>
                        <button className="text-black border-2 border-black w-20 h-8 flex justify-center items-center rounded-xl" type="submit" id="submit">Submit</button>
                    </div>
                    </form>

                </div>
            </div>

        </main>
    )
}