import { Link } from "react-router-dom";

import { Typewriter } from 'react-simple-typewriter';
import nubes_bg from '../../assets/imgs/nubesbackground.png';



function Header() {


    return (

        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                    <div>

                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                Error 404
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-900 sm:text-center">
                                Pagina no encontrada. Disculpe las molestias. 
                            </p>
                           
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-40rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-40rem)] sm:top-[calc(100%-30rem)]">
                        <img src={nubes_bg} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header;