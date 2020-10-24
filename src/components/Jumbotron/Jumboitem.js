import React from "react";
import jumbo from "./jumbo.json";
import Jumbocard from "./Jumbocard";

const Jumboitem = () => {
  return (
    <div>
      {jumbo.map((user, id) => {
        return (
          <Jumbocard
            key={id}
            title={jumbo[id].title}
            subTitle={jumbo[id].subTitle}
            image={jumbo[id].image}
            direction={jumbo[id].direction}
          />
        );
      })}
    </div>
  );
};
export default Jumboitem;
