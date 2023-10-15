import { Link } from "react-router-dom";
import { screen } from "@testing-library/react";
import { useEffect, useState } from "react";
import {
  Offering,
  OfferingCatergories,
  OfferingItem,
  Offerings,
} from "../objects/OfferingsObject";

function PriceCalculations() {
  const [screen, setScreen] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<Offering | undefined>();
  const [items, setItems] = useState<OfferingItem[]>([]);
  const [itemPrices, setItemPrices] = useState<number>(0);
  function callback(item: OfferingItem) {
    setItems((prev) => [...prev, item]);
    setScreen((prev) => ((prev + 1) % selectedItem!.categories.length) + 1);
  }
  function cancel() {
    setScreen(0);
    setItems([]);
    setSelectedItem(undefined);
  }
  function calculatePrice() {
    let price = 0;
    for (let item of items) {
      price += item.price;
    }
    return price;
  }

  useEffect(() => {
    setItemPrices(calculatePrice());
  }, [items]);

  return (
    <div className=" max-w-[100vw] flex flex-col p-10  ">
      <div className="flex flex-col justify-center h-full w-full ">
        {!(selectedItem && screen === selectedItem!.categories.length) && (
          <div className="xl:px-[20vw]">
            <div>
              <Link
                to={"/"}
                className="flex group items-center font-bold text-gray-400 text-xs"
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
              <h1 className="text-5xl font-bold text-white ">Quick Quote</h1>
              <p className="pt-3  font-light text-justify text-gray-500  text-base">
                Welcome to our 'Quick Quote' page, where you can effortlessly
                get estimates for your project's development needs. Keep in mind
                that the prices here are ballpark figures to give you a general
                sense of the cost. For more accurate results, we recommend
                uploading your 'Requirements' document and 'Design
                Specifications' to provide us with detailed project insights. To
                kickstart the process, simply choose between a website or an
                app. After your selection, you'll find a variety of
                sub-categories, each displaying estimated prices for specific
                features or services. Here, you can cherry-pick the elements
                that best match your project. Feel free to add a concise project
                description, attach your 'Requirements' document and 'Design
                Specifications,' and send in your request. We'll review your
                details and get in touch within 48 hours to delve deeper into
                your project and provide a more precise quotation.
              </p>
            </div>
          </div>
        )}
        <div className=" flex items-center my-10 xl:px-[20vw]">
          {selectedItem === undefined && (
            <>
              <div className="flex flex-col items-center w-full h-full">
                <h2 className="text-3xl font-bold font-mono py-5">
                  What product do you need?
                </h2>
                <div
                  className="
                w-full h-full flex gap-10
                 justify-center"
                >
                  <div
                    onClick={() => {
                      setItems((prev) => [...prev, Offerings[0]]);
                      setSelectedItem(Offerings[0]);
                    }}
                    className=" h-1/2 w-1/2 bg-slate-300 hover:bg-slate-400
                     hover:scale-105 cursor-pointer  rounded-3xl aspect-square 
                     flex items-center justify-center "
                  >
                    <h3 className="text-center  font-bold uppercase text-3xl">
                      Website
                    </h3>
                  </div>
                  <div
                    onClick={() => {
                      setItems((prev) => [...prev, Offerings[1]]);
                      setSelectedItem(Offerings[1]);
                    }}
                    className=" h-1/2 w-1/2 bg-gray-300 hover:bg-gray-400
                     hover:scale-105 cursor-pointer  rounded-3xl aspect-square 
                     flex items-center justify-center "
                  >
                    <h3 className="text-center  font-bold uppercase text-3xl">
                      App
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedItem ? (
            screen === selectedItem!.categories.length ? (
              <LastScreen price={itemPrices} />
            ) : (
              <SelectItem
                item={selectedItem}
                screen={screen}
                callback={callback}
              />
            )
          ) : (
            ""
          )}
        </div>
        {selectedItem && (
          <div className="flex flex-col items-center w-full justify-center m-3">
            <div className="flex gap-2">
              {Array.from(Array(selectedItem!.categories.length + 1)).map(
                (i, index) => {
                  if (index === screen)
                    return (
                      <div className="h-2 w-2 bg-slate-400 rounded-full"></div>
                    );

                  return (
                    <div className="h-2 w-2 bg-slate-400/50 rounded-full"></div>
                  );
                }
              )}
            </div>
            <button
              onClick={() => {
                cancel();
              }}
              className="flex"
            >
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SelectItem(props: {
  item: Offering;
  screen: number;
  callback: Function;
}) {
  const colors = ["red", "blue", "green", "slate", "yellow"];

  const neededColors = [
    "bg-red-300",
    "bg-red-400",
    "bg-blue-300",
    "bg-blue-400",
    "bg-green-300",
    "bg-green-400",
    "bg-slate-300",
    "bg-slate-400",
    "bg-yellow-300",
    "bg-yellow-400",
  ];

  return (
    <div className="flex flex-col w-full h-full  ">
      <p className="py-3 font-bold text-center text-3xl">
        {props.item.categories[props.screen].name}
      </p>
      <div className="flex w-full justify-center items-center  flex-wrap gap-3  ">
        {props.item.categories[props.screen].items.map((item) => {
          const randColor = colors[Math.floor(Math.random() * colors.length)];

          return (
            <div
              onClick={() => props.callback(item)}
              className={`
              bg-${randColor}-300 w-1/5 p-3  flex-col 
              hover:bg-${randColor}-400 hover:scale-105 cursor-pointer  
              rounded-xl aspect-square flex items-center justify-center `}
            >
              <h3 className="text-center font-bold uppercase text-base">
                {item.name}
              </h3>
              <p>{item.price} SEK</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LastScreen({ price }: { price: number }) {
  const [designSpecFile, setDesignSpecFile] = useState<File | null>(null);
  const [functionsSpecFile, setFunctionsSpecFile] = useState<File | null>(null);
  const [mail, setMail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const selectDesignFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDesignSpecFile(e.target.files[0]);
    } else {
      setDesignSpecFile(null);
    }
  };
  const selectFunctionsFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFunctionsSpecFile(e.target.files[0]);
    } else {
      setFunctionsSpecFile(null);
    }
  };

  if (showConfirmation) {
    return (
      <div className="animate-FoldIn flex w-full items-center justify-center h-screen">
        <div className="p-4 ">
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Thank You !</h1>
            <p className="w-1/3">
              Thank you for your interest. We will contact you within 42 hours
              to discuss your needs in more detail. Please be aware that the
              estimated price provided is just an estimate and is subject to
              change based on your specific requirements. We will strive to
              provide you with a more accurate price that aligns with your
              needs. Thank you for considering our services. We look forward to
              speaking with you soon.
            </p>
            <p>Your estimated price is: {price} SEK</p>
            <a
              href="/"
              className="group inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2  group-hover:scale-105"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full  flex justify-center">
      <div className="py-8 lg:py-16 px-4  max-w-screen-md">
        <div>
          <h2 className="mb-4 leading-tight text-4xl tracking-tight font-extrabold text-center text-white">
            Last details
            <br />
            <span className="text-sm font-normal">
              Estimated price: {price} SEK
            </span>
          </h2>
        </div>
        <p className="mb-8 lg:mb-16 font-light text-justify text-gray-500  sm:text-xl">
          To get an accurate messurement of your quote, leave as much
          information as you can come up with, If you have a design
          specification and a function specification leave that too, The more
          information the better
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setShowConfirmation(true);
          }}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              onChange={(e) => setMail(e.target.value)}
              type="email"
              id="email"
              className="shadow-sm border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="flex w-full gap-10 justify-between">
            <div className="w-1/2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Design specification
              </label>
              <input
                onChange={selectDesignFile}
                className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>
            <div className="w-1/2">
              <label
                className="block mb-2 text-sm font-medium text-white"
                htmlFor="default_size"
              >
                Function specification
              </label>
              <input
                onChange={selectFunctionsFile}
                className="block cursor-pointer w-full mb-5 text-sm border rounded-lg text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                id="default_size"
                type="file"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Product description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              required
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="self-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PriceCalculations;
