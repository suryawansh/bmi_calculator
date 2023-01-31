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
} from "@mui/material";

const Form = () => {
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [name, setName] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [output, setOutput] = React.useState("");

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
              setAge(parseInt(event.target.value));
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
              setWeight(parseFloat(event.target.value));
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
              setHeight(parseFloat(event.target.value));
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
              if (weight <= 20) {
                alert("Please enter weight more than 2 kg");
              } else if (!height <= 20) {
                alert("Please enter height more than 0.5 m");
              } else {
                const bmiCalc = weight / (height * height);
                setOutput(
                  `The BMI of ${gender} ${name} aged ${age}= ${bmiCalc} `
                );
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
              backgroundColor: "primary",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            {output}
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={2}></Grid>
    </Grid>
  );
};

export default Form;
