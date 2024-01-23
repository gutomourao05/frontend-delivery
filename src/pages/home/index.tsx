import { IoCartOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { DemostrationCard } from "../../components/DemostrationCard";
const Home: React.FC = (): JSX.Element => {
    return (
        <main className="grid grid-cols-3">
            <div className="col-span-2 relative flex flex-col items-center ">
                <header className="w-full h-16 flex items-center justify-around">
                    <img className="w-10 mt-1" src="./src/assets/img_pizza-fotor-2024012118438.png" alt="logo" />

                    <ul className="flex gap-10">
                        <li>
                            <a href="">Home</a>
                        </li>

                        <li>
                            <a href="">Contato</a>
                        </li>

                        <li className="flex gap-2 items-center">
                            <a href="" >Menu</a>
                            <FaAngleDown size={15} />
                        </li>
                    </ul>
                </header>

                <section className="flex w-full items-center -ml-40 mt-80 flex-col justify-center">
                    <div className="-mt-40  w-1/2">
                        <h1 className="text-5xl font-bold">Peperoni</h1>
                        <h1 className="text-5xl font-bold"> Pizza</h1>
                        <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, ut earum! Neque provident ad vero assumenda libero, soluta doloribus, voluptates repellendus maxime molestias nostrum. Doloribus dolorem itaque rem rerum eos.</p>
                        <button className="mt-5 bg-orange-600 text-white px-5 py-2 rounded">Veja Menu</button>
                    </div>
                </section>

                <img className="rounded-full w-96 absolute -right-48 top-1/4 border-white border-8" src="./src/assets/img_pizza-fotor-2024012118438.png" alt="" />

                <footer className="mt-32">
                    <div className="bg-white flex gap-8">
                        <DemostrationCard image="./src/assets/img_pizza-fotor-2024012118438.png" title="Pizza Doce" />
                        <DemostrationCard image="./src/assets/img_pizza-fotor-2024012118438.png" title="Pizza Doce" />
                        <DemostrationCard image="./src/assets/img_pizza-fotor-2024012118438.png" title="Pizza Doce" />
                    </div>
                </footer>
            </div>

            <div className="col-span-1 bg-orange-600 h-screen">
                <header className="w-full h-16 flex items-center justify-center gap-10">
                    <button className="bg-white rounded-full flex justify-center items-center p-2 ">
                        <IoCartOutline size={20} color="gray" />
                    </button>
                    <button className="bg-white rounded p-1 px-2 flex gap-2 items-center">
                        <IoIosLogIn size={20} color="gray" />
                        Login
                    </button>
                </header>
            </div>
        </main>
    );
}

export { Home };