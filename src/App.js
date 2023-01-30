import { Grid } from "@mui/material";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
function App() {
  return (
    <Grid>
      <Header />
      <div style={{ height: 100 }} />
      <Form />
    </Grid>
  );
}

export default App;
