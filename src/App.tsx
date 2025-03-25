import React, { useState } from "react";
import pokeballIcon from "/src/assets/pokebola.svg";

const PokemonCards: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<null | {
    name: string;
    img: string;
    description: string;
  }>(null);

  const pokemons = [
    {
      name: "Gengar",
      color: "bg-purple-300",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      description:
        "Gengar é um Pokémon do tipo Fantasma/Venenoso, conhecido por sua natureza travessa e habilidades assustadoras.",
    },
    {
      name: "Gyarados",
      color: "bg-blue-300",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
      description:
        "Gyarados é um Pokémon do tipo Água/Voador, famoso por sua fúria e poder destrutivo.",
    },
    {
      name: "Pikachu",
      color: "bg-yellow-300",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      description:
        "Pikachu é um Pokémon do tipo Elétrico, muito popular e conhecido por suas habilidades elétricas.",
    },
    {
      name: "Mewtwo",
      color: "bg-gray-300",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      description:
        "Mewtwo é um Pokémon do tipo Psíquico, criado geneticamente e dotado de grande inteligência e poder.",
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div>
        <div className="flex justify-center items-center mb-6 space-x-2">
          <h1 className="text-2xl font-semibold mb-6">My Pokemon</h1>
          <img
            className="h-[40px] w-[40px] mb-4"
            src={pokeballIcon}
            alt="Pokébola"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {pokemons.map((pokemon, index) => (
            <div
              key={index}
              className={`${pokemon.color} shadow-lg p-6 rounded-md text-center hover:scale-105 transition duration-200 ease-in-out cursor-pointer`}
              onClick={() => setSelectedPokemon(pokemon)}
            >
              <img src={pokemon.img} alt={pokemon.name} className="mx-auto" />
              <p className="mt-2 font-semibold">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedPokemon && (
        <div className="fixed inset-0 bg-gray-300 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg text-center w-[300px] h-[370px]">
            <h2 className="text-xl font-bold mb-4">{selectedPokemon.name}</h2>
            <img
              src={selectedPokemon.img}
              alt={selectedPokemon.name}
              className="mx-auto mb-4"
            />
            <p className="text-justify">{selectedPokemon.description}</p>
            <button
              onClick={() => setSelectedPokemon(null)}
              className="bg-red-500 w-full py-2 mt-[20px] text-white rounded hover:-translate-y-[2px] transition duration-300 ease-in-out"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCards;