import React, { useState } from "react";
import { Offering } from "../../objects/OfferingsObject";
import { Paper } from "@mui/material";

const className: any = {
  body: {
    padding: 10,
    width: "100%",
    height: "100%",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

function OfferingComponent(props: { offering: Offering }) {
  const [showText, setShowText] = useState<boolean>(false);
  return (
    <div className="bg-transparent" style={{ ...className.body }}>
      <Paper sx={{ ...className.body, padding: 3 }}>
        {!showText && (
          <>
            <img
              style={{ alignSelf: "center", height: "30%" }}
              src={props.offering.img}
            />
            <div>
              <h1 className="text-2xl">{props.offering.name}</h1>
              <p style={{ width: "100%" }}>
                <span style={{ fontWeight: "bold" }}>Minsta pris:</span>{" "}
                {props.offering.price} SEK
              </p>
            </div>
          </>
        )}
        <div
          style={{
            overflowY: !showText ? "clip" : "scroll",
            height: !showText ? "30%" : "100%",
            transition: "all",
            transitionDuration: "300ms",
          }}
        >
          <p className="text-justify whitespace-break-spaces">
            {props.offering.description}
          </p>
        </div>

        <div className="m-0 p-0 text-center font-bold">
          <button onClick={() => setShowText(!showText)}>
            {!showText ? "Read More" : "Read Less"}
          </button>
        </div>
      </Paper>
    </div>
  );
}

export default OfferingComponent;
