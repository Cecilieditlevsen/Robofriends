import React from "react";
import Card from "./Card";

type Props = {
  robots: any;
};

const CardList = ({ robots }: Props) => {
  return (
    <div>
      {robots.map((user: string, i: number) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
      })}
    </div>
  );
};

export default CardList;
