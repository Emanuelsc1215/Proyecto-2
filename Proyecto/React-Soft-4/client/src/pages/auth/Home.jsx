import React from "react";
import Menu from "./Menu";
import { CiEdit } from "react-icons/ci";
import { BiCoinStack } from "react-icons/bi";
import { MdDelete } from "react-icons/md";





const Home = () => {
  return (
    <div>
      <div className="w-[95%] left-[2%] h-[90%] bg-white border-2 border-blue-400	 absolute z-20 top-[5%] rounded-lg overflow-auto scrollbar  scrollbar-thumb-rounded-full scrollbar-thumb-blue-300">
        <Menu />
        <div class="bg-white py-24 sm:py-32  top-80 relative z-0">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <img src="./imagenes/Logo2.png" className="relative left-[40%] -top-64 " />
          <img src="./imagenes/HomeAdmin.svg" className="relative -top-96 left-28" />
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-500">
                 <p className="">Aqui puedes registrar  un nuevo usuario al sistema.</p> 
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <BiCoinStack className="text-green-500 shadow-lg rounded-lg shadow-green-500/50 relative -top-7 left-[45%]" />

               <p className="text-blue-950"> Registrar</p>
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">
                 <p> Contaras con la posibilidad de actualiazar datos de usuarios en cualquier momento.</p>
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <CiEdit className="text-blue-500  shadow-lg rounded-lg shadow-blue-500/50 left-[40%] -top-7 relative" />

                <p className="text-blue-950">Editar</p>
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">
                 <p>Tienes la opcion  de eliminar a algun usuario del sistema.</p>
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <MdDelete className="text-red-500  shadow-lg rounded-lg shadow-red-500/50 left-[40%] -top-7 relative" />

                <p className="text-blue-950">Eliminar</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
