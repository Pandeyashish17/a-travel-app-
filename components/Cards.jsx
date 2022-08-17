import React from "react";

const Cards = () => {
 
  const cardDetails = [
    {
      id: 1,
      place: "haraiya",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus.",
      img: "https://source.unsplash.com/random/300x200/?lake",
    },
    {
      id: 2,
      place: "Butwal",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus.",
      img: "https://source.unsplash.com/random/300x200/?lake",
    },
    {
      id: 3,
      place: "Nuwakot",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus.",
      img: "https://source.unsplash.com/random/300x200/?lake",
    },
    {
      id: 4,
      place: "Pokhara",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus.",
      img: "https://source.unsplash.com/random/300x200/?lake",
    },
    {
      id: 5,
      place: "Sagarmatha",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus.",
      img: "https://source.unsplash.com/random/300x200/?lake",
    },
    {
      id: 6,
      place: "Chitwan",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus.",
      img: "https://source.unsplash.com/random/300x200/?lake",
    },
  ];
  return (
    <>
     
      <h1 className="text-center text-3xl my-10">Popular Destination</h1>
      <div className="p-10  grid sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:ml-24 gap-5">
        {cardDetails.map((element) => {
          return (
            <div
              className="m-2 bg-white rounded-l-full	 shadow-xl lg:flex  lg:max-w-lg transition-all group"
              key={element.id}
            >
              <img
                src={element.img}
                className="rounded-l-md group-hover:scale-105 transition-all"
              />
              <div className="p-6 bg-gray-50 ">
                <h2 className="mb-2 text-2xl font-bold uppercase">
                  {element.place}
                </h2>
                <p className="text-gray-700">{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
