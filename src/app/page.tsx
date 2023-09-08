'use client'

import Image from "next/image";
import Header from "./components/Header";
import LatestRecipes from "./components/LatestRecipes";
import EnterTheCommunity from "./components/EnterTheCommunity";
import Modal from "./components/Modal";
import IngredientsContext from "./components/IngredientsContext";
import { IngredientsContextProvider } from "./contexts/IngredientsContext";
import Results from "./results/page";

export default function Home() {
  return (
    <IngredientsContextProvider>
      <main className="pt-[92.25px]">
        <Header />
        <LatestRecipes />
        <EnterTheCommunity />
        <Modal />
      </main>
    </IngredientsContextProvider>
  );
}
