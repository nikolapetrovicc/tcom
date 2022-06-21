import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import axios from "axios";
import { makeStyles } from "@mui/styles";

const Button = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 10px 15px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const useStyles = makeStyles({
  typo: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "0.3rem",
  },
  naslov: {},
});

const Main = () => {
  const [search, setSearch] = useState("");
  const [resp, setResp] = useState<any>();
  const [datum, setDatum] = useState(new Date());

  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <Container maxWidth="lg">
      <Typography className={classes.naslov}>Lista Preduzeca</Typography>
      <Box
        p={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <Box>
          <Typography className={classes.typo} variant="body2">
            Search
          </Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            >
              <MenuItem value={search}></MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography className={classes.typo} variant="body2">
            Filtriraj po datumu
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={datum}
                onChange={(newValue: any) => setDatum(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Box>
        <Box>
          <Typography className={classes.typo} variant="body2">
            Prikaz
          </Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            >
              <MenuItem value={search}></MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Preduzece
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Email
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Kreirao
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Azurirao
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Datum
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resp?.map((item: any) => (
              <TableRow
                key={item}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item}</TableCell>
                <TableCell align="center">{item}</TableCell>
                <TableCell align="center">{item}</TableCell>
                <TableCell align="center">{item}</TableCell>
                <TableCell align="center">{item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Main;
