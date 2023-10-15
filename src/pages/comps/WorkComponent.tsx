import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import { State, WorkObject } from "../../objects/WorkObject";

const styles = {
  previousWorkPaper: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "var(--indigo-dye)",
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "center",
  },
};

export default function WorkComponent(props: any) {
  const workObj: WorkObject = props.workObject;

  return (
    <Paper
      sx={{
        backgroundColor: "var(--glumental)",
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
        height: "100%",
      }}
      elevation={10}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: 10,
          height: "100%",
        }}
      >
        <div style={{ display: "flex" }}>
          <h1 style={{ flex: 1 }}>{workObj.name}</h1>
          <code
            style={{
              flex: 1,
              fontSize: "1.3rem",
              textAlign: "right",
              color: "var(--indigo-dye)",
            }}
          >
            {State[workObj.state]}
          </code>
        </div>
        {workObj.imgSrc !== undefined && (
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={workObj.imgSrc}
              style={{ width: "80%" }}
              alt={"Preview"}
            />
          </Grid>
        )}
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            flexGrow: 1,
            padding: 1,
          }}
        >
          <Grid item xs={12}>
            <p
              style={{
                textAlign: "justify",
                color: "white",
                whiteSpace: "break-spaces",
              }}
            >
              {workObj.description}
            </p>
          </Grid>
          <Grid item xs={12}>
            <div style={{ marginTop: 10 }}>
              <p style={{ fontWeight: "bold", color: "white" }}>Tech used</p>
              {workObj.skills.map((skill: string, index: number) => {
                return (
                  <code>
                    {" "}
                    {skill}
                    {index !== workObj.skills.length - 1 && ","}{" "}
                  </code>
                );
              })}
            </div>
          </Grid>
        </Grid>
        <div style={{ flex: 3, display: "flex", justifyContent: "flex-end" }}>
          {workObj.link !== undefined ? (
            workObj.link.includes("github") ? (
              <Button
                style={{ alignSelf: "flex-end" }}
                href={workObj.link}
                target={"_blank"}
                variant={"contained"}
              >
                View on github
              </Button>
            ) : (
              <Button
                style={{ alignSelf: "flex-end" }}
                href={workObj.link}
                target={"_blank"}
                variant={"contained"}
              >
                View live
              </Button>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </Paper>
  );
}
