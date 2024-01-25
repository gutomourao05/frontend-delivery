import { IoCartOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { DemostrationCard } from "../../components/DemostrationCard";
import Modal from 'react-modal';
import { useState } from "react";
import { Login } from "../login";
import { Card } from "../cart";
import { Link } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  return (
    <main className="grid grid-cols-3">
      <div className="col-span-2 relative flex flex-col items-center ">
        <header className="w-full h-16 flex items-center justify-around">
          <img className="w-10 mt-1" src="./src/assets/img_pizza-fotor-2024012118438.png" alt="logo" />

          <ul className="flex gap-10">
            <li>
              <a className="hover:text-orange-600" href="">Home</a>
            </li>

            <li>
              <a className="hover:text-orange-600" href="">Contato</a>
            </li>

            <li className="group">
              <div className="flex gap-2 items-center">
                <a className="hover:text-orange-600" href="" >Menu</a>
                <FaAngleDown size={15} />
              </div>
              <div className="absolute hidden group-hover:block">
                <Link className="block hover:text-orange-300" to="/menu#doce">Pizza Doce</Link>
                <Link className="block hover:text-orange-300" to="/menu#tradicional">Pizza Tradicional</Link>
                <Link className="block hover:text-orange-300" to="/menu#nobres">Pizza Nobres</Link>
              </div>
            </li>
          </ul>
        </header>

        <section className="flex w-full items-center -ml-40 mt-80 flex-col justify-center">
          <div className="-mt-40  w-1/2">
            <h1 className="text-5xl font-bold">Peperoni</h1>
            <h1 className="text-5xl font-bold"> Pizza Gourmet</h1>
            <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, ut earum! Neque provident ad vero assumenda libero, soluta doloribus, voluptates repellendus maxime molestias nostrum. Doloribus dolorem itaque rem rerum eos.</p>
            <Link className="w-32 mt-10 bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-700 block" to={'/menu'}>Veja Menu</Link>
          </div>
        </section>

        <img className="rounded-full w-96 absolute -right-48 top-1/4 border-white border-8" src="./src/assets/img_pizza-fotor-2024012118438.png" alt="" />

        <footer className="mt-32">
          <div className="bg-white flex gap-8">
            <DemostrationCard image="./src/assets/img_pizza-fotor-2024012118438.png" title="Pizza Doce" />
            <DemostrationCard image="./src/assets/img_pizza-fotor-2024012118438.png" title="Pizza Tradicional" />
            <DemostrationCard image="./src/assets/img_pizza-fotor-2024012118438.png" title="Pizza Nobres" />
          </div>
        </footer>
      </div>

      <div className="col-span-1 bg-orange-600 h-screen">
        <header className="w-full h-16 flex items-center justify-center gap-10">
          <button onClick={() => setOpenCard(!openCard)} className="bg-white shadow-xl rounded-full flex justify-center items-center p-2 ">
            <IoCartOutline size={20} color="gray" />
          </button>
          <button onClick={() => setModalOpen(true)} className="shadow-xl bg-white rounded p-1 px-2 flex gap-2 items-center">
            <IoIosLogIn size={20} color="gray" />
            Login
          </button>
        </header>
      </div>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} appElement={document.getElementById("root") as HTMLElement}>
        <Login setModalOpen={(isOpen: boolean) => setModalOpen(isOpen)} />
      </Modal>

      <Card isOpen={openCard} setOpen={(isOpen: boolean) => setOpenCard(isOpen)} />
    </main>
  );
}

export { Home };