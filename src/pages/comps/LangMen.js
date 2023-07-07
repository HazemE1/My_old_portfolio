import React, {useState} from "react";
import i18next from "i18next";
import {LanguageOutlined} from "@mui/icons-material";
import {Menu, MenuItem} from "@mui/material";
import {useTranslation} from "react-i18next";

export default function LangMen(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [lang, setLang] = useState(i18next.language);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (lang) => {
        i18next.changeLanguage(lang)
        setLang(lang)
        setAnchorEl(null);
    };

    const {t} = useTranslation()

    return (
        <>
            <div onClick={handleClick} style={{color: "white", margin: 5, fontSize: "20px", display:"flex", alignSelf:"center"}}>
                <LanguageOutlined fontSize={"medium"}/>
                <label>{lang[0].toUpperCase() + lang[1]}</label>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => handleClose("sv")}>{t("general.lang.swedish")}</MenuItem>
                <MenuItem onClick={() => handleClose("en")}>{t("general.lang.english")}</MenuItem>
            </Menu>
        </>


    )
}