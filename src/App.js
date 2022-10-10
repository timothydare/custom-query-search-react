import "./App.css";
import "./App.css";
import {
  Header,
  Button,
  Container,
  Dropdown,
  Input,
  Label,
  Segment,
} from "semantic-ui-react";
import { useState } from "react";
import { ReactDatez } from "react-datez";

function App() {
  const [restaurantIds, setRestaurantIds] = useState([]);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [fromHour, setFromHour] = useState();
  const [toHour, setToHour] = useState();

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

  const hourOptions = [
    { key: 6, text: "6 am", value: 6 },
    { key: 7, text: "7 am", value: 7 },
    { key: 8, text: "8 am", value: 8 },
    { key: 9, text: "9 am", value: 9 },
    { key: 10, text: "10 am", value: 10 },
    { key: 11, text: "11 am", value: 11 },
    { key: 12, text: "12 am", value: 12 },
    { key: 13, text: "1 pm", value: 13 },
    { key: 14, text: "2 pm", value: 14 },
    { key: 15, text: "3 pm", value: 15 },
    { key: 16, text: "4 pm", value: 16 },
    { key: 17, text: "5 pm", value: 17 },
    { key: 18, text: "6 pm", value: 18 },
    { key: 19, text: "7 pm", value: 19 },
    { key: 20, text: "8 pm", value: 20 },
    { key: 21, text: "9 pm", value: 21 },
    { key: 22, text: "10 pm", value: 22 },
    { key: 23, text: "11 pm", value: 23 },
    { key: 24, text: "12 pm", value: 24 },
    { key: 25, text: "1 am (next day)", value: 25 },
    { key: 26, text: "2 am (next day)", value: 26 },
    { key: 27, text: "3 am (next day)", value: 27 },
    { key: 28, text: "4 am (next day)", value: 28 },
    { key: 29, text: "5 am (next day)", value: 29 },
  ];

  console.log(restaurantIds);
  console.log(fromDate);
  console.log(toDate);
  console.log(fromHour);
  console.log(toHour);

  return (
    <Container>
      <div className="landing__title">
        <h1 className="title">Custom Query Search Tool</h1>
      </div>
      <h2 className="landing__subtitle">Select your desired inputs</h2>
      <div className="form-wrapper">
        <div className="restaurant-form">
        <h4 className="form-title">RESTAURANT</h4>
          <label>Restaurant Ids</label>
          <Dropdown
            fluid
            multiple
            selection
            options={options}
            value={restaurantIds}
            onChange={(event, data) => {
              setRestaurantIds(data.value);
            }}
          />
        </div>
        <div className="calendar-forms">
          <div className="form-date">
          <h4 className="form-title">DATE</h4>
            <label>From Date</label>
            <ReactDatez
              name="fromDate"
              handleChange={(value) => {
                setFromDate(value);
              }}
              value={fromDate}
              allowPast={true}
              dateFormat={"MM/DD/YYYY"}
              startDate={"2021-01-01"}
              endDate={"2021-12-31"}
              defaultMonth={"2021-01-01"}
            />
          </div>
          <div className="form-date">
            <label>To Date</label>
            <ReactDatez
              name="toDate"
              handleChange={(value) => {
                setToDate(value);
              }}
              value={toDate}
              allowPast={true}
              dateFormat={"MM/DD/YYYY"}
              startDate={"2021-01-01"}
              endDate={"2021-12-31"}
              defaultMonth={"2021-01-01"}
            />
          </div>
        </div>
        <div className="time-forms">
          <h4 className="form-title">TIME</h4>
          <label>From Hour</label>
          <Dropdown
            fluid
            selection
            options={hourOptions}
            onChange={(event, data) => {
              setFromHour(data.value);
            }}
          />
          <label>To Hour</label>
          <Dropdown
            fluid
            selection
            options={hourOptions}
            onChange={(event, data) => {
              setToHour(data.value);
            }}
          />
        </div>
      </div>
      <div className="metric__title">
        <h4>METRIC CRITERIA</h4>
      </div>      
    </Container>
  );
}

export default App;
