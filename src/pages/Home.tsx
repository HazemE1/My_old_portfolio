import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import wallpaperVideo from "../media/wallpaper.mp4";
import { skills } from "../objects/SkillsetObject";
import AutoPlaySilentVideo from "./comps/AutoPlaySilentVideo";
import "./css/Home.css";
import SkillGroupComponent from "./comps/SkillGroupComponent";
import OfferingComponent from "./comps/OfferingComponent";
import { Offerings } from "../objects/OfferingsObject";

import MailObject from "./comps/MailObject";

const styles = {
  pageSections: {
    paddingLeft: { xs: 1, md: 3, xl: 6 },
    paddingRight: { xs: 1, md: 3, xl: 6 },
  },
  pageSectionsParagraph: {
    textAlign: "justify",
  },
  previousWorkGrid: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  mailFields: {},
  pagePadding: {
    paddingLeft: { xs: 0, xl: "10vw" },
    paddingRight: { xs: 0, xl: "10vw" },
  },
};

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".page-section-body");

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        if (intersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const cursorFollow = document.getElementById("cursor-follow")!;
      if (cursorFollow === null) return;
      const height = cursorFollow.offsetHeight;
      const width = cursorFollow.offsetWidth;
      setTimeout(() => {
        cursorFollow.style.left = `${e.pageX - width / 2}px`;
        cursorFollow.style.top = `${e.pageY - height / 2}px`;
      }, 200);
    });
  }, []);

  return (
    <div
      className="relative"
      style={{
        scrollSnapType: "y mandatory",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Box id="top" className={" page-section"}>
        <Box id={"header"} style={{ background: "rgba(255,255,255,0.3)" }}>
          <div>
            <AutoPlaySilentVideo idName={"bg-video"} video={wallpaperVideo} />
          </div>
          <div
            className="page-section-body"
            style={{ height: "100%", width: "100%" }}
          >
            <Grid
              container
              sx={{
                height: "100%",
                width: "100%",
                paddingLeft: { xs: 1, md: 3, xl: 6 },
                paddingRight: 1,
                flexDirection: "row",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.5rem", xl: "3.5rem" },
                    fontWeight: "bold",
                    textAlign: "center",
                    lineHeight: "100%",
                    opacity: 1,
                  }}
                >
                  I'm Hazem Elkhalil, the architect <br />
                  of your digital world, from apps to websites
                </Typography>
                <Box
                  className="hr"
                  sx={{ width: { xs: "80%", md: "50%", xl: "40%" } }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { xs: "80%", md: "50%", xl: "40%" },
                  }}
                >
                  <div className="w-full flex justify-between animate-FoldIn delay-500">
                    <a
                      href="/work"
                      className="text-shadow-sm shadow-slate-500 font-bold section-home-links uppercase font-mono hover:scale-105"
                      style={{ color: "var(--indigo-dye)" }}
                    >
                      Previous Work
                    </a>
                    <a
                      href="#contact"
                      className="text-shadow-sm hidden xl:block shadow-black/50 section-home-links uppercase font-mono hover:scale-105"
                      style={{ color: "var(--rich-black)" }}
                    >
                      Lets get in touch!
                    </a>
                    <a
                      href="#my-skillset"
                      className="text-shadow-sm shadow-green-500 section-home-links uppercase font-mono hover:scale-105"
                      style={{ color: "var(--light-green)" }}
                    >
                      My skillset
                    </a>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
      <div className="relative">
        <div
          id="cursor-follow"
          className="pointer-events-none sticky  z-30 transition duration-300 w-52 h-52 lg:absolute"
          style={{
            background: "rgba(0,0,255,0.7)",
            position: "sticky",
            filter: "blur(350px)",
          }}
        ></div>
        <Box
          id="current-project"
          className={"page-section"}
          sx={styles.pagePadding}
        >
          <div
            className="page-section-body"
            style={{ height: "100%", width: "100%" }}
          >
            <h1 className={"section-title"} style={{ textAlign: "center" }}>
              My offerings
            </h1>
            <Grid
              gap={10}
              container
              style={{ width: "100%", justifyContent: "center" }}
            >
              {Offerings.map((offering) => {
                return (
                  <Grid
                    item
                    sx={{
                      width: { sm: "100%", md: "50%", xl: "30%" },
                      height: 600,
                    }}
                  >
                    <OfferingComponent offering={offering} />
                  </Grid>
                );
              })}
            </Grid>
            <div className="w-full flex justify-center">
              <a className="mt-4 font-bold cursor-pointer ">
                <h4
                  className="w-fit text-md xl:text-2xl hover:scale-105 uppercase"
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                    textDecorationLine: "none",
                  }}
                >
                  I dont offer any service at this time
                </h4>
              </a>
            </div>
          </div>
        </Box>
        <Box className={"page-section"} sx={styles.pageSections}>
          <div
            className="page-section-body"
            style={{ height: "100%", width: "100%" }}
          >
            <h1 className={"section-title"} style={{ textAlign: "center" }}>
              About me
            </h1>
            <Box
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                justifyItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  width: "80%",
                  fontSize: 18,
                  whiteSpace: "break-spaces",
                  textAlign: "justify",
                }}
              >
                Hello, I'm Hazem Elkhalil, a seasoned software developer with a
                deep passion for creating outstanding digital experiences. With
                over a decade of experience in the field, I bring a wealth of
                knowledge and skills to the table as your trusted software
                development consultant.
                {"\n"}
                {"\n"}
                From my early start in Java at the age of 11, I have expanded my
                expertise to include front-end and back-end development,
                covering a wide range of programming languages such as HTML,
                CSS, JavaScript, Java, C#, Node.js, and more. My proficiency
                extends beyond coding; I am also well-versed in cloud
                technologies like AWS and Firebase, as well as databases such as
                MySQL and SQLite.
                {"\n"}
                {"\n"}
                Passion is at the core of everything I do. It drives me to
                constantly stay updated with the latest industry trends, tools,
                and best practices. This dedication ensures that I bring
                cutting-edge solutions to your projects, keeping you at the
                forefront of the rapidly evolving technology landscape.
                {"\n"}
                {"\n"}I pride myself on my ability to understand your unique
                requirements and translate them into practical and scalable
                software solutions. Clear and open communication is crucial to
                our collaboration, and I will work closely with you to ensure
                that your vision and goals are met at every stage of the
                development process.
                {"\n"}
                {"\n"}
                By choosing me as your software development consultant, you gain
                a committed partner who genuinely cares about your success. I
                approach every project with unwavering enthusiasm, striving for
                excellence and delivering high-quality work that surpasses
                expectations.
                {"\n"}
                {"\n"}
                Your satisfaction is my top priority, and I will go above and
                beyond to ensure that your projects are executed flawlessly, on
                time, and within budget. Together, we can navigate the
                challenges of the digital landscape and unlock the
                transformative power of innovative software solutions for your
                organization.
                {"\n"}
                {"\n"}
                <strong>
                  Let's embark on this exciting journey together and achieve
                  remarkable results.
                </strong>{" "}
              </p>
            </Box>
          </div>
        </Box>
        <Box
          id="my-skillset"
          className={"page-section"}
          sx={styles.pagePadding}
        >
          <div
            className="page-section-body"
            style={{ height: "100%", width: "100%" }}
          >
            <h1 className={"section-title"} style={{ textAlign: "center" }}>
              My skillset
            </h1>
            <Grid container spacing={5} style={{ width: "100%" }}>
              {skills.map((skillGroup) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    xl={3}
                    sx={{
                      height: 500,
                    }}
                  >
                    <SkillGroupComponent skillGroup={skillGroup} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Box>
        <Box className={"page-section"} id={"footer"}>
          <div
            className="page-section-body"
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              position: "relative",
            }}
          >
            <h1
              id="contact"
              className={"section-title"}
              style={{ textAlign: "center", marginBottom: 1 }}
            >
              Get in touch
            </h1>
            <p>
              Do you have any questions? Fill in the message below and we will
              get intouch within 24h
            </p>
            <MailObject />

            <div
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <p
                style={{
                  textAlign: "center",
                }}
              >
                &copy; 2022 Ek Tech Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
