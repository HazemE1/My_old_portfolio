import { useEffect, useState } from "react";
import ItemComp from "./comps/ItemComp";
import { Offering, OfferingItem, Offerings } from "../objects/OfferingsObject";
import { Link } from "react-router-dom";

const className = {
  container: "h-screen w-full flex-col  flex gap-1 p-10",
  categoryItemsContainer: "w-full  flex flex-col justify-center  ",
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
    setItemPrices(calculatePrice());
  }, [listOfItems]);

  function addItemToList(item: OfferingItem) {
    const list = [...listOfItems];
    list.push(item);
    setListOfItems(list);
  }

  function clearItemsId(id: string) {
    let list = [...listOfItems];

    list = list.filter((item) => item.id !== id);
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
      <div className="px-[19vw] flex flex-row ">
        <div>
          <Link
            to={"/"}
            className="flex w-fit  group items-center font-bold text-gray-400 text-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="group-hover:scale-105 mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Back Home
          </Link>
          <div className="">
            <h1 className="text-5xl mb-3  font-bold text-white ">
              Calculate price
            </h1>
            <p>
              Welcome to our 'Quick Quote' page, where you can effortlessly get
              estimates for your project's development needs. Keep in mind that
              the prices here are ballpark figures to give you a general sense
              of the cost. For more accurate results, we recommend uploading
              your 'Requirements' document and 'Design Specifications' to
              provide us with detailed project insights. To kickstart the
              process, simply choose between a website or an app. After your
              selection, you'll find a variety of sub-categories, each
              displaying estimated prices for specific features or services.
              Here, you can cherry-pick the elements that best match your
              project. Feel free to add a concise project description, attach
              your 'Requirements' document and 'Design Specifications,' and send
              in your request. We'll review your details and get in touch within
              48 hours to delve deeper into your project and provide a more
              precise quotation.
            </p>
          </div>
        </div>
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
              clearItemsId(Offerings[0].id);
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
              clearItemsId(Offerings[1].id);
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

        {/*         <div
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
              clearItemsId(Offerings[3].id);

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
        </div> */}
      </div>
      <div className="flex flex-col xl:px-[20vw] w-full justify-center items-center">
        {selectedCategory[0] !== null &&
          selectedCategory[0].categories.map((category) => (
            <div className={className.categoryItemsContainer}>
              <h4 className="font-bold text-xl">{category.name}</h4>
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
        {selectedCategory[1] !== null &&
          selectedCategory[1].categories.map((category) => (
            <div className={className.categoryItemsContainer}>
              <h4 className="font-bold text-xl">{category.name}</h4>
              <div className="flex w-full  flex-wrap ">
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
        {/* {selectedCategory[2] !== null &&
          selectedCategory[2].categories.map((category) => (
            <div className={className.categoryItemsContainer}>
              <h4 className="font-bold text-xl">{category.name}</h4>
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
              {selectedCategory[3] !== null &&
        selectedCategory[3].categories.map((category) => (
          <div className={className.categoryItemsContainer}>
            <h4 className="font-bold">{category.name}</h4>
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
        ))} */}
      </div>

      <div className="">
        <div className="xl:px-[20vw]">{itemPrices > 0 && <hr />}</div>
      </div>
    </div>
  );
}

export default PriceCalculations;
