import React from "react";
import { Offering } from "../../objects/OfferingsObject";
import { Paper } from "@mui/material";

const className = {
  body: {
    padding: 3,
    width: "100%",
    height: "100%",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

function OfferingComponent(props: { offering: Offering }) {
  return (
    <Paper sx={className.body}>
      <div>
        <h1>{props.offering.name}</h1>
        <p style={{ width: "100%" }}>
          <span style={{ fontWeight: "bold" }}>Minsta pris:</span>{" "}
          {props.offering.price} SEK
        </p>
      </div>
      <img
        style={{ alignSelf: "center", height: "45%" }}
        src={props.offering.img}
      />

      <div style={{ overflowY: "scroll", height: "30%" }}>
        <p>{props.offering.description}</p>
      </div>
    </Paper>
  );
}

export default OfferingComponent;
