import "./App.css";
import "./App.css";
import {
  Button,
  Container,
  Dropdown,
  Input,
  Label,
  Segment,
} from "semantic-ui-react";
import { useState } from "react";
import { ReactDatez, ReduxReactDatez } from "react-datez";

function App() {
  const [restaurantIds, setRestaurantIds] = useState([]);
  const [dateInput, setDateInput] = useState("");

  const options = [
    {
      Id: 1,
      Name: "Restaurant 1 - Greystone",
      Address: "8553 Greystone Street",
      City: "Cantonment",
      State: "FL",
      Zipcode: "32533",
    },
    {
      Id: 2,
      Name: "Restaurant 2 - Whitemarsh",
      Address: "9927 Whitemarsh Drive",
      City: "Schenectady",
      State: "NY",
      Zipcode: "12302",
    },
    {
      Id: 3,
      Name: "Restaurant 3 - Edgewood",
      Address: "51 Edgewood Lane",
      City: "Shrewsbury",
      State: "MA",
      Zipcode: "01545",
    },
    {
      Id: 4,
      Name: "Restaurant 4 - Cedar",
      Address: "265 Cedar Swamp St.",
      City: "Lemont",
      State: "IL",
      Zipcode: "60439",
    },
    {
      Id: 5,
      Name: "Restaurant 5 - Canterbury",
      Address: "9594 Canterbury Lane",
      City: "Mobile",
      State: "AL",
      Zipcode: "36605",
    },
    {
      Id: 6,
      Name: "Restaurant 6 - Jennings",
      Address: "7508 Jennings Circle",
      City: "Henderson",
      State: "KY",
      Zipcode: "42420",
    },
    {
      Id: 7,
      Name: "Restaurant 7 - Dogwood",
      Address: "9195 Dogwood Lane",
      City: "Clifton Park",
      State: "NY",
      Zipcode: "12065",
    },
    {
      Id: 8,
      Name: "Restaurant 8 - Hamilton",
      Address: "477B Hamilton Lane",
      City: "Moses Lake",
      State: "WA",
      Zipcode: "98837",
    },
    {
      Id: 9,
      Name: "Restaurant 9 - Pleasant",
      Address: "700 Pleasant Drive",
      City: "Copperas Cove",
      State: "TX",
      Zipcode: "76522",
    },
    {
      Id: 10,
      Name: "Restaurant 10 - James",
      Address: "8902 James Court",
      City: "Lakewood",
      State: "NJ",
      Zipcode: "08701",
    },
  ].map((r) => {
    return {
      key: r.Id,
      value: r.Id,
      text: r.Name,
    };
  });

  console.log(restaurantIds);
  console.log(dateInput);

  return (
    <Container>
      <Segment>
        <Dropdown
          placeholder="Restaurant Ids"
          fluid
          multiple
          selection
          options={options}
          value={restaurantIds}
          onChange={(event, data) => {
            setRestaurantIds(data.value);
          }}
        />
      </Segment>
      <div className="form-wrapper">
        <div className="form">
          <label htmlFor="exampleDate2">From Date</label>
          <ReactDatez
            name="dateInput"
            handleChange={(value) => {
              setDateInput(value);
            }}
            value={dateInput}
          />
        </div>
        <div className="form">
          <label htmlFor="exampleDate2">To Date</label>
          <ReactDatez
            name="dateInput"
            handleChange={(value) => {
              setDateInput(value);
            }}
            value={dateInput}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
