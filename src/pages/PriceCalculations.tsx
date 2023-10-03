import { useEffect, useState } from "react";
import ItemComp from "./comps/ItemComp";
import { Offering, OfferingItem, Offerings } from "../objects/OfferingsObject";

const className = {
  container: "h-screen w-full flex-col  flex gap-1 p-3",
  categoryItemsContainer:
    "w-full  flex flex-col justify-center items-center gap-1  ",
  categorySelectorContainer:
    "w-full  flex justify-center items-center gap-3 mb-3  ",

  optionButton: "w-1/4 h-40  bg-slate-500 rounded-xl p-3 ",
  categoryOptionButton:
    "w-1/5 h-20  bg-slate-500 transition-all rounded-xl p-3 flex justify-center items-center [&>h1]:font-bold [&>h1]:outline-none cursor-pointer [&>h1]:text-xl",
  categoryOptionButtonActive:
    "w-1/5 h-20  bg-green-500 transition-all rounded-xl p-3 flex justify-center items-center [&>h1]:font-bold [&>h1]:outline-none cursor-pointer [&>h1]:text-xl",
};
function PriceCalculations() {
  const [selectedCategory, setSelectedCategory] = useState<(Offering | null)[]>(
    [null, null, null, null]
  );

  const [listOfItems, setListOfItems] = useState<OfferingItem[]>([]);
  const [itemPrices, setItemPrices] = useState<number>(0);

  useEffect(() => {
    setItemPrices(calculatePrice);
  }, [listOfItems]);

  function addItemToList(item: OfferingItem) {
    const list = [...listOfItems];
    list.push(item);
    setListOfItems(list);
  }

  function calculatePrice() {
    let price = 0;
    for (let item of listOfItems) {
      price += item.price;
    }
    return price;
  }

  function removeItemFromList(item: OfferingItem) {
    const list = [...listOfItems];
    const index = list.findIndex((li) => item.name === li.name);

    if (index === -1) return;

    list.splice(index, 1);
    setListOfItems(list);
  }

  return (
    <div className={className.container}>
      <div className="mb-5">
        <h1 className="text-center text-4xl font-extrabold ">
          Calculate your price {itemPrices} SEK
        </h1>
        <p className="text-center font-extrabold">
          <span className="text-3xl ">⌂</span> HOME
        </p>
      </div>
      <div className={className.categorySelectorContainer}>
        <div
          onClick={() => {
            if (selectedCategory[0] === null) {
              const list = [...selectedCategory];
              list[0] = Offerings[0];
              addItemToList(Offerings[0]);
              setSelectedCategory(list);
            } else {
              const list = [...selectedCategory];
              list[0] = null;
              removeItemFromList(Offerings[0]);
              setSelectedCategory(list);
            }
          }}
          className={
            selectedCategory[0] !== null
              ? className.categoryOptionButtonActive
              : className.categoryOptionButton
          }
        >
          <h1>{Offerings[0].name}</h1>
        </div>
        <div
          onClick={() => {
            if (selectedCategory[1] === null) {
              const list = [...selectedCategory];
              list[1] = Offerings[1];
              addItemToList(Offerings[1]);
              setSelectedCategory(list);
            } else {
              const list = [...selectedCategory];
              list[1] = null;
              removeItemFromList(Offerings[1]);
              setSelectedCategory(list);
            }
          }}
          className={
            selectedCategory[1] !== null
              ? className.categoryOptionButtonActive
              : className.categoryOptionButton
          }
        >
          <h1>{Offerings[1].name}</h1>
        </div>
        <div
          onClick={() => {
            if (selectedCategory[2] === null) {
              const list = [...selectedCategory];
              list[2] = Offerings[2];
              addItemToList(Offerings[2]);
              setSelectedCategory(list);
            } else {
              const list = [...selectedCategory];
              list[2] = null;
              removeItemFromList(Offerings[2]);
              setSelectedCategory(list);
            }
          }}
          className={
            selectedCategory[2] !== null
              ? className.categoryOptionButtonActive
              : className.categoryOptionButton
          }
        >
          <h1>{Offerings[2].name}</h1>
        </div>
        <div
          onClick={() => {
            if (selectedCategory[3] === null) {
              const list = [...selectedCategory];
              list[3] = Offerings[3];
              addItemToList(Offerings[3]);
              setSelectedCategory(list);
            } else {
              const list = [...selectedCategory];
              list[3] = null;
              removeItemFromList(Offerings[3]);
              setSelectedCategory(list);
            }
          }}
          className={
            selectedCategory[3] !== null
              ? className.categoryOptionButtonActive
              : className.categoryOptionButton
          }
        >
          <h1>{Offerings[3].name}</h1>
        </div>
      </div>

      {selectedCategory[0] !== null &&
        selectedCategory[0].categories.map((category) => (
          <div className={className.categoryItemsContainer}>
            <h1>{category.name}</h1>
            <div className="flex w-full flex-wrap ">
              {category.items.map((item) => (
                <ItemComp
                  delItem={removeItemFromList}
                  addItem={addItemToList}
                  item={item}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default PriceCalculations;
