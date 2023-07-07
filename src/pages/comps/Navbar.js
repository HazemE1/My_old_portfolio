import {Accordion, AccordionDetails, AccordionSummary, Box, Link} from "@mui/material";
import logo from "../../media/Logo.png";
import LangMen from "./LangMen";
import MenuIcon from "@mui/icons-material/Menu";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

export default function Navbar() {
    const [phoneShowNav, setPhoneShowNav] = useState(false);
    const {t} = useTranslation()

    return (
        <Box sx={{width: "100%", display: "flex"}}>
            <Box sx={{display: {xs: "none", md: "flex"}, width: "100%"}}>

            </Box>
            <Box sx={{display: {xs: "auto", md: "none"}, width: "100%", justifyContent: "flex-end"}}>

                <Accordion expanded={phoneShowNav} sx={{backgroundColor: "transparent", width: "100%"}}>
                    <AccordionSummary>
                        <img src={logo} style={{height: "50px"}}/>
                        <LangMen/>

                        <div style={{
                            alignSelf: "center",
                            width: "100%",
                            justifyContent: "flex-end",
                            display: "flex"
                        }}>
                            <label onClick={() => setPhoneShowNav(!phoneShowNav)}
                                   style={{textAlign: "right", color: "white", alignSelf: "center"}}>
                                <MenuIcon/></label>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <ol className={"navbar-list"} style={{flexDirection: "column"}}>
                            <li>
                                <Link style={{textDecoration:"none"}} href={""}>
                                    <label className={"navbar-link-label"}>
                                        {t("navbar.home")}
                                    </label>
                                </Link>
                            </li>
                            <li>
                                <Link style={{textDecoration:"none"}}  href={""}>
                                    <label className={"navbar-link-label"}>
                                        {t("navbar.experience")}
                                    </label>
                                </Link></li>
                            <li>
                                <Link style={{textDecoration:"none"}} href={""}>
                                    <label className={"navbar-link-label"}>
                                        {t("navbar.work")}
                                    </label>
                                </Link>
                            </li>
                            <li id={"navbar-link-cv"}>
                                <Link style={{textDecoration:"none"}}href={""}>
                                    <label className={"navbar-link-label"}>
                                        {t("navbar.price-calc")}
                                    </label>
                                </Link>
                            </li>
                        </ol>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}