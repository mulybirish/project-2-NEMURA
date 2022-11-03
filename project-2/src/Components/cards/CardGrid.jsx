import React from "react";
import Card from "./Card";
import "./cards.css";

const CardGrid = ({ shows, isLoading }) => {
  return isLoading ? (
    `loading...`
  ) : (
      <section className="cards-section">
        {shows.map((show) => {
          return (
            <>
              <Card key={ show.show?.id ||  show.person } show={show} />
              {/* show.show.id ||  show.person  */}
              {/* <Card shows={show} /> */}
              {/* <li key={show.show.id}>
                    <img src={show.show?.image?.medium} />
                    <p>{show.show.name}</p>
                    <p>{show.show.language}</p>
                  </li> */}
              {/* <Card key={show.person} show={show} /> */}
            </>
           
          );
        })}
      </section>
  );
};

export default CardGrid;