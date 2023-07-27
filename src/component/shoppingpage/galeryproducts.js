import { Link, NavLink } from 'react-router-dom';

//Imagenes
import examen20unica from '../../assets/imgs/productos/examen20unica.png';
import examen30unica from '../../assets/imgs/productos/examen30unica.png';
import examen20multiple from '../../assets/imgs/productos/examen20multiple.png';
import examen30multiple from '../../assets/imgs/productos/examen30multiple.png';



//Productos individuales
const products = [
    {
        id: 1,
        name: 'Asignatura Unica 20 item',
        href: '#',
        imageSrc: examen20unica,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$1.500',
        item: '20 items',
    },
    {
        id: 2,
        name: 'Asignatura Unica 30 item',
        href: '#',
        imageSrc: examen30unica,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$2.000',
        item: '30 items',
    },
    {
        id: 3,
        name: 'Multiple Asignatura 20 item',
        href: '#',
        imageSrc: examen20multiple,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$2.500',
        item: '20 items',
    },
    {
        id: 4,
        name: 'Multiple Asignatura 30 item',
        href: '#',
        imageSrc: examen30multiple,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3.000',
        item: '30 items',
    },

    // More products...
]


export default function Galery1() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-10 py-6 sm:px-10 sm:py-6 lg:max-w-7xl lg:px-6">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">Servicios</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.item}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                            <div className='pt-4 px-6 flex justify-around group-hover:opacity-75'>
                                <button className="py-2 px-4 bg-gray-900 text-white font-semibold rounded-3xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Agregar</button>
                                <button className="py-2 px-4 bg-gray-900 text-white font-semibold rounded-3xl shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Eliminar</button>
                            </div>
                            <p className='pt-4 flex justify-around'> Cantidad </p>

                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
