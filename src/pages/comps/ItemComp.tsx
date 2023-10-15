import React, { useState } from "react";
import { OfferingItem } from "../../objects/OfferingsObject";

const className = {
  optionButton: "w-full h-40 max-w-xs bg-slate-500 rounded-xl p-3 ",
  optionButtonActive: "w-full max-w-xs h-40  bg-green-500 rounded-xl p-3 ",
};

function ItemComp({
  item,
  addItem,
  delItem,
}: {
  item: OfferingItem;
  addItem: Function;
  delItem: Function;
}) {
  const [active, setActive] = useState<boolean>(false);

  function toggle() {
    if (!active) addItem(item);
    else delItem(item);
    setActive(!active);
  }

  return (
    <div className="w-1/4 max-w-md p-1">
      <div
        onClick={() => toggle()}
        className={
          !active ? className.optionButton : className.optionButtonActive
        }
      >
        <p>{item.name}</p>
        <p>{item.price} SEK</p>
      </div>
    </div>
  );
}

export default ItemComp;
