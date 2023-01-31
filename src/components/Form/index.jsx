import * as React from "react";
import "./app.css";
import {
  Grid,
  TextField,
  Button,
  FormHelperText,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Typography,
} from "@mui/material";

const Form = () => {
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState(1);
  const [weight, setWeight] = React.useState(2);
  const [height, setHeight] = React.useState(0.5);
  const [output, setOutput] = React.useState(null);

  return (
    <Grid
      spacing={2}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={12} lg={2}></Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <TextField
            input
            type="text"
            helperText="Please enter your name"
            id="username"
            label="Name"
            required
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="type your name here"
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={(event) => {
                setGender(event.target.value);
              }}
            >
              <MenuItem value={"Male  "}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
            <FormHelperText>Please select your gender </FormHelperText>
          </FormControl>

          <br></br>

          <TextField
            input
            type="number"
            id="age"
            step="1"
            label="Age"
            helperText="Please enter your age"
            placeholder="select your age"
            required
            fullWidth
            value={age}
            onChange={(event) => {
              setAge(parseInt(Math.abs(event.target.value ?? 1)));
            }}
          />
          <br></br>

          <TextField
            input
            type="number"
            name="weight"
            min="10"
            helperText="Please enter your weight"
            id="weight"
            label="Weight(in kg)"
            required
            fullWidth
            value={weight}
            onChange={(event) => {
              setWeight(parseFloat(Math.abs(event.target.value ?? 2)));
            }}
          />
          <br></br>

          <TextField
            input
            type="number"
            id="height"
            name="height"
            min="10"
            max="100"
            helperText="Please enter your height"
            label="Height(in m)"
            required
            fullWidth
            value={height}
            onChange={(event) => {
              setHeight(parseFloat(event.target.value ?? 0.5));
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => {
              if (weight <= 2) {
                alert("Please enter weight more than 2 kg");
              } else if (height <= 0.5) {
                alert("Please enter height more than 0.5 m");
              } else {
                const bmiCalc = weight / (height * height);
                setOutput(parseFloat(bmiCalc).toFixed(2));
              }
            }}
          >
            Calculate
          </Button>
          <br></br>
          <Box
            label="Output"
            sx={{
              width: 300,
              height: 300,
              border: "1px dashed grey",
              wordWrap: "break-word",
            }}
          >
            {output && (
              <>
                <Typography variant="body1">
                  <b>Name:</b> {name}
                </Typography>
                <Typography variant="body1">
                  <b>Gender:</b> {gender}
                </Typography>
                <Typography variant="body1">
                  <b>Age</b>: {age}
                </Typography>
                <Typography variant="body1">
                  <b>Weight:</b> {weight}
                </Typography>
                <Typography variant="body1">
                  <b>Height:</b> {height}
                </Typography>
                <br></br>
                <Typography variant="h5">
                  <b>BMI: {output}</b>
                </Typography>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={2}></Grid>
    </Grid>
  );
};

export default Form;
