import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const people = [
  {
    name: 'Pizza Romeu e Julieta',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'Pizza Doce',
    imageUrl: './src/assets/img_pizza-fotor-2024012118438.png',
  },
  {
    name: 'Pizza Romeu e Julieta',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'Pizza Doce',
    imageUrl: './src/assets/img_pizza-fotor-2024012118438.png',
  },
  {
    name: 'Pizza Romeu e Julieta',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'Pizza Doce',
    imageUrl: './src/assets/img_pizza-fotor-2024012118438.png',
  },
  {
    name: 'Pizza Romeu e Julieta',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'Pizza Doce',
    imageUrl: './src/assets/img_pizza-fotor-2024012118438.png',
  }
]

const Menu: React.FC = (): JSX.Element => {
  return (
    <div className="flex  flex-col items-center justify-center bg-orange-600 w-screen ">
      <div className="w-[45rem] max-w-2xl flex items-center">
        <Link to={'/'}><IoMdArrowBack color="#fff" size={30} /></Link>

        <h1 className="text-white font-bold text-2xl p-6">Faça aqui seu pedido</h1>
      </div>
      <h1 id="tradicional" className="text-[2rem] py-3 text-white">Tradicionais</h1>
      <ul role="list" className="divide-y divide-gray-100 w-[45rem] max-w-2xl mx-auto">
        {people.map((person) => (
          <li key={person.name} className="flex justify-between gap-x-6 py-5" >
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-500 border-2" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-white">{person.description}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs leading-5 text-white">
                {person.type}
              </p>

              <div>
                <button className="font-medium text-white p-1">-</button>
                <span className="p-1 bg-white">0</span>
                <button className="font-medium text-white p-1">+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h1 id="nobres" className="text-[2rem] py-3 text-white">Nobres</h1>
      <ul role="list" className="divide-y divide-gray-100 w-[45rem] max-w-2xl mx-auto">
        {people.map((person) => (
          <li key={person.name} className="flex justify-between gap-x-6 py-5" >
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-500 border-2" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-white">{person.description}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs leading-5 text-white">
                {person.type}
              </p>

              <div>
                <button className="font-medium text-white p-1">-</button>
                <span className="p-1 bg-white">0</span>
                <button className="font-medium text-white p-1">+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h1 id="doce" className="text-[2rem] py-3 text-white">Doces</h1>
      <ul role="list" className="divide-y divide-gray-100 w-[45rem] max-w-2xl mx-auto">
        {people.map((person) => (
          <li key={person.name} className="flex justify-between gap-x-6 py-5" >
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-500 border-2" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-white">{person.description}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs leading-5 text-white">
                {person.type}
              </p>

              <div>
                <button className="font-medium text-white p-1">-</button>
                <span className="p-1 bg-white">0</span>
                <button className="font-medium text-white p-1">+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className=" mb-6 font-bold text-2xl bg-white text-orange-600 hover:text-orange-700 p-3 rounded mt-6">Finalizar</button>
    </div>
  )
}

export { Menu }