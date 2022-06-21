import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ilustration from "../assets/ilustration.svg";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 15px 20px;
  background-color: #045450;
  color: white;
  cursor: pointer;
  margin-top: 3rem;
  margin-bottom: 10px;
`;

const useStyles = makeStyles({
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
  },
  box: {
    padding: "2rem",
    flex: 1,
  },
  prijava: {
    // fontFamily: "Popins",
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <Container>
      <Box mt={15}>
        <Paper className={classes.paper}>
          <Box
            sx={{ backgroundColor: "#F9F9ED", width: "565px" }}
            className={classes.box}
          >
            <img src={ilustration} alt="" />
            <Typography variant="h3">Lorem Ipsum</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography
              sx={{ fontWeight: "600" }}
              className={classes.prijava}
              variant="h3"
            >
              Prijava na sistem
            </Typography>

            <Form>
              <TextField
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="standard-basic"
                label="Korisnicko ime"
                variant="standard"
                sx={{ marginTop: "1rem" }}
              />
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="standard-basic"
                label="Lozinka"
                variant="standard"
                sx={{ margin: "1rem 0rem" }}
              />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 2 }}
              >
                <FormControlLabel control={<Checkbox />} label="Zapamti" />

                <Link to="/">Zaboravili Sifru?</Link>
              </Stack>

              <Button onClick={handleClick}>Uloguj se</Button>
            </Form>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
