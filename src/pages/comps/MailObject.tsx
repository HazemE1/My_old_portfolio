import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import get_in_touch from "../../media/getintouch.png";
import { GiConfirmed } from "react-icons/gi";
import { PiSealWarningBold } from "react-icons/pi";
function MailObject() {
  function sendMail() {
    setMailErr("");
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailRegex.test(mail)) {
      setMailErr("Please enter a valid mail adress.");
      return;
    }
    if (name.length === 0) {
      setMailErr("Please enter your name.");
      return;
    }
    if (message.length === 0) {
      setMailErr("Please write your message.");
      return;
    }
    setMailErr("");
    setMailSent(true);
  }

  const [mailSent, setMailSent] = useState<boolean>(false);
  const [mailErr, setMailErr] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return !mailSent ? (
    <Grid container style={{ justifyContent: "center", marginTop: 20 }}>
      <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "auto" } }}>
        <img src={get_in_touch} style={{ height: "100%" }} />
      </Grid>

      <Grid item xs={12} md={5}>
        {mailErr.length > 0 && (
          <div className="bg-slate-800 ml-3 p-3 rounded-xl flex">
            <PiSealWarningBold className="text-red-300 text-xl" />
            <p className="text-center w-full">{mailErr}</p>
          </div>
        )}

        <TextField
          InputLabelProps={{ style: { color: "darkgray" } }}
          sx={{
            width: "100%",
            margin: 1,
            input: { color: "white" },
          }}
          variant={"outlined"}
          label={"Your email"}
          onChange={(e) => setMail(e.target.value)}
        />
        <TextField
          InputLabelProps={{ style: { color: "darkgray" } }}
          sx={{
            width: "100%",

            margin: 1,
            input: { color: "white" },
          }}
          variant={"outlined"}
          label={"Your name"}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          InputLabelProps={{ style: { color: "darkgray" } }}
          InputProps={{ style: { color: "white" } }}
          sx={{
            width: "100%",
            margin: 1,
            input: { color: "white" },
          }}
          onChange={(e) => setMessage(e.target.value)}
          variant={"outlined"}
          label={"Message"}
          multiline={true}
          minRows={7}
          maxRows={7}
        />
        <Button
          onClick={() => {
            sendMail();
          }}
          sx={{ width: "100%", fontWeight: "bold" }}
        >
          SEND
        </Button>
      </Grid>
    </Grid>
  ) : (
    <div className=" flex flex-col items-center py-10 gap-5 animate-FoldIn">
      <GiConfirmed className="text-9xl " />
      <p className="text-3xl text-center">
        Thank you for your message! <br /> I will be in touch with you within 48
        h 🤓
      </p>
    </div>
  );
}

export default MailObject;
