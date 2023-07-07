import React, {useEffect} from 'react';
import {Box, Button, Grid, Paper, TextField} from "@mui/material";
import "./css/Home.css"
import {LoremIpsum} from "lorem-ipsum"
import wallpaperVideo from "../media/wallpaper.mp4";
import pb_bild_jag from "../media/jag2.jpg";
import WorkComponent from "./comps/WorkComponent";
import get_in_touch from "../media/getintouch.png"
import workObjects from "../objects/WorkObject";
import AutoPlaySilentVideo from "./comps/AutoPlaySilentVideo";

const styles = {
    pageSections: {
        paddingLeft: {xs: 1, md: 3, xl: 6},
        paddingRight: {xs: 1, md: 3, xl: 6}
    },
    pageSectionsParagraph: {
        textAlign: "justify"
    },
    previousWorkGrid: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    mailFields: {
        width: "100%",
        margin: 1,
        input: {color: "white"},
    },
    pagePadding: {
        paddingLeft: {xs: 0, xl: "10vw"},
        paddingRight: {xs: 0, xl: "10vw"}

    }
}


export default function Home() {


    useEffect(() => {

    }, [])


    return (
        <div>
            <Box className={"page-section"}>
                <Box id={"header"} style={{background: "rgba(0,0,0,0.3)"}}>
                    <AutoPlaySilentVideo idName={"bg-video"} video={wallpaperVideo}/>

                    <Grid container sx={{
                        height: "100%",
                        width: {xs: "100%", md: "50%", xl: "20%"},
                        paddingLeft: {xs: 1, md: 3, xl: 6},
                        paddingRight: 1,
                        flexDirection: "row",


                    }}>
                        <Grid item xs={12} sx={{display: "flex", alignContent: "center", alignItems: "center"}}>
                            <h1 id="logo">Hazem Elkhalil</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <h1 style={{marginBottom: 30}}>Welcome to my portfolio!</h1>
                            <p style={{textAlign: "justify", fontSize: 12}}>
                                <h3 style={{display: "inline-block"}}>My name is Hazem Elkhalil</h3> and I'm a seasoned
                                software
                                developer
                                with over a decade of experience. I started my programming journey at the age of 11 with
                                Java,
                                and
                                since then, I've expanded my skillset to include front-end and back-end development. I'm
                                proficient
                                in <code>HTML</code>, <code>CSS</code>,<code> Javascript</code>, <code>Java</code>,<code> C#</code>,<code> Nodejs</code>, <code>ReactJS</code>, <code>ReactNative</code>.<br/><br/> I
                                am also
                                familiar
                                with cloud
                                technologies such as <code>AWS </code>and <code>Firebase</code>, as well as databases like <code>MY-/LITE-SQL</code>. My passion
                                for
                                programming and expertise in a wide range of technologies make me a valuable asset to
                                any team.
                                Please take a look around my portfolio to see some of my past projects and learn more
                                about my
                                skills and experience.
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box className={"page-section"} sx={styles.pagePadding}>
                <h1 className={"section-title"} style={{textAlign: "center"}}>My projects</h1>
                <Grid container spacing={5} style={{width: "100%", justifyContent: "space-between"}}>

                    {workObjects.map((workObject) => {

                        return <Grid item xs={12} md={4} xl={3}>
                            <WorkComponent workObject={workObject}/>
                        </Grid>
                    })}

                </Grid>
            </Box>
            <Box className={"page-section"} sx={styles.pageSections}>
                <h1 className={"section-title"} style={{textAlign: "left"}}>About me</h1>
                <Grid container style={{height: "100%", width: "100%", alignItems: "center"}}>
                    <Grid item xs={0} xl={2}/>
                    <Grid item xs={12} xl={4}>
                        <p style={{textAlign: "justify"}}>

                            <p style={{fontSize: 18,whiteSpace: "break-spaces"}}>
                                Hello, I'm Hazem Elkhalil, a seasoned software developer with a deep passion for
                                creating outstanding digital experiences. With over a decade of experience in the field,
                                I bring a wealth of knowledge and skills to the table as your trusted software
                                development consultant.
                                {"\n"}
                                {"\n"}
                                From my early start in Java at the age of 11, I have expanded my expertise to include
                                front-end and back-end development, covering a wide range of programming languages such
                                as HTML, CSS, JavaScript, Java, C#, Node.js, and more. My proficiency extends beyond
                                coding; I am also well-versed in cloud technologies like AWS and Firebase, as well as
                                databases such as MySQL and SQLite.
                                {"\n"}
                                {"\n"}
                                Passion is at the core of everything I do. It drives me to constantly stay updated with
                                the latest industry trends, tools, and best practices. This dedication ensures that I
                                bring cutting-edge solutions to your projects, keeping you at the forefront of the
                                rapidly evolving technology landscape.
                                {"\n"}
                                {"\n"}
                                I pride myself on my ability to understand your unique requirements and translate them
                                into practical and scalable software solutions. Clear and open communication is crucial
                                to our collaboration, and I will work closely with you to ensure that your vision and
                                goals are met at every stage of the development process.
                                {"\n"}
                                {"\n"}
                                By choosing me as your software development consultant, you gain a committed partner who
                                genuinely cares about your success. I approach every project with unwavering enthusiasm,
                                striving for excellence and delivering high-quality work that surpasses expectations.
                                {"\n"}
                                {"\n"}
                                Your satisfaction is my top priority, and I will go above and beyond to ensure that your
                                projects are executed flawlessly, on time, and within budget. Together, we can navigate
                                the challenges of the digital landscape and unlock the transformative power of
                                innovative software solutions for your organization.
                                {"\n"}
                                {"\n"}
                                <strong>Let's embark on this exciting journey together and achieve remarkable results.</strong> </p>

                        </p>
                    </Grid>
                    <Grid item xs={12} xl={6} style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center"
                    }}>
                        <Paper elevation={0} sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            borderRadius: 10,
                            background: "transparent",
                            overflow: "hidden",
                            width: {xs: 250, md: 400, xl: 800},
                            height: {xs: 250, md: 400, xl: 800},

                        }}>
                            <img src={pb_bild_jag}
                                 style={{
                                     objectFit: "cover",
                                     objectPosition: "top",
                                     filter: "brightness(0.8) drop-shadow(0 3px 8px rgb(0,0,0))",
                                     maxHeight: "100%",
                                     maxWidth: "100%",
                                     alignSelf: "center",
                                     borderRadius: 10,
                                 }}/>

                        </Paper>

                    </Grid>
                </Grid>
            </Box>


            <Box className={"page-section"} id={"footer"}>
                <h1 className={"section-title"} style={{textAlign: "left"}}>Get in touch</h1>
                <Grid container style={{justifyContent: "center"}}>
                    <Grid item xs={12} md={4} sx={{display: {xs: "none", md: "auto"}}}>

                        <img src={get_in_touch} style={{height: "100%"}}/>
                    </Grid>
                    <Grid item xs={12} md={5}>

                        <TextField InputLabelProps={{style: {color: "darkgray"}}} sx={styles.mailFields}
                                   variant={"outlined"} label={"Your email"}/>
                        <TextField InputLabelProps={{style: {color: "darkgray"}}} sx={styles.mailFields}
                                   variant={"outlined"}
                                   label={"Your name"}/>
                        <TextField InputLabelProps={{style: {color: "darkgray"}}} InputProps={{style: {color: "white"}}}
                                   sx={styles.mailFields} variant={"outlined"}
                                   label={"Message"}
                                   multiline={true} minRows={7} maxRows={7}/>
                        <Button sx={{width: "100%", fontWeight: "bold"}}>SEND</Button>
                    </Grid>
                </Grid>
            </Box>


        </div>

    )
}