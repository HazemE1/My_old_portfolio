import { Grid, Paper } from "@mui/material";
import { Group } from "../../objects/SkillsetObject";

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

export default function SkillGroupComponent(props: { skillGroup: Group }) {
  const skillGroup: Group = props.skillGroup;

  return (
    <Paper
      sx={{
        backgroundColor: "var(--glumental)",
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
        height: "100%",
        position: "relative",
      }}
      elevation={10}
    >
      <div
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          height: 50,
          width: 50,
          backgroundImage: `url(${skillGroup.icon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: 10,
          height: "100%",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            flexGrow: 1,
            padding: 1,
          }}
        >
          <Grid item xs={12}>
            <h1
              style={{
                textAlign: "justify",
                color: "white",
                whiteSpace: "break-spaces",
              }}
            >
              {skillGroup.title}
            </h1>
            <p style={{ color: "var(--aquamarine)" }}>{skillGroup.freeText}</p>
          </Grid>
          <Grid item xs={12} sx={{ alignSelf: "flex-end" }}>
            <div style={{ marginTop: 10 }}>
              {skillGroup.skills.map((skill, index, arr) => {
                return (
                  <>
                    <code style={{ textAlign: "center", whiteSpace: "pre" }}>
                      {" "}
                      {skill.skill}{" "}
                    </code>
                    {index < arr.length - 1 && <span>|</span>}
                  </>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
