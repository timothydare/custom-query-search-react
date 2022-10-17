import "./App.css";
import "./App.css";
import { Button, Container, Dropdown, Form, Table } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { ReactDatez } from "react-datez";

function App() {
  const [restaurantIds, setRestaurantIds] = useState([]);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [fromHour, setFromHour] = useState();
  const [toHour, setToHour] = useState();
  const [metricDefinitions, setMetricDefinitions] = useState([]);
  const [metricCode, setMetricCode] = useState("");
  const [compareType, setCompareType] = useState("");
  const [metricValue, setMetricValue] = useState(0);

  useEffect(() => {
    getData(
      "https://customsearchquerytoolapi.azurewebsites.net/Search/MetricDefinitions"
    ).then((data) => {
      setMetricDefinitions(data);
    });
  }, []);

  const metricCodeOptions = metricDefinitions.map((m) => {
    return {
      key: m.metricCode,
      value: m.metricCode,
      text: m.alias,
    };
  });

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

  const compareTypeOptions = [
    { key: "Equal", text: "=", value: "Equal" },
    { key: "LessThan", text: "<", value: "LessThan" },
    { key: "LessThanOrEqual", text: "≤", value: "LessThanOrEqual" },
    { key: "GreaterThan", text: ">", value: "GreaterThan" },
    { key: "GreaterThanOrEqual", text: "≥", value: "GreaterThanOrEqual" },
  ];

  console.log(restaurantIds);
  console.log(fromDate);
  console.log(toDate);
  console.log(fromHour);
  console.log(toHour);
  console.log(metricCode);
  console.log(compareType);
  console.log(metricValue);

  return (
    <Container>
      <div className="landing__title">
        <h1 className="title">Custom Query Search Tool</h1>
      </div>
      <h2 className="landing__subtitle">Select your desired inputs</h2>
      <Form>
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
                startDate={"2021-10-01"}
                endDate={"2021-10-31"}
                defaultMonth={"2021-10-01"}
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
                startDate={"2021-10-01"}
                endDate={"2021-10-31"}
                defaultMonth={"2021-10-01"}
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
        <div className="metric-forms">
          <div className="metric__code--form">
            <label>Metric Code</label>
            <Dropdown
              fluid
              selection
              options={metricCodeOptions}
              value={metricCode}
              onChange={(event, data) => {
                setMetricCode(data.value);
              }}
            />
          </div>
          <div className="metric__compare--form">
            <label>Compare Type</label>
            <Dropdown
              fluid
              selection
              options={compareTypeOptions}
              onChange={(event, data) => {
                setCompareType(data.value);
              }}
            />
          </div>
          <div className="metric__value--form">
            <label>Value</label>
            <input
              type="number"
              min={0}
              max={99}
              value={metricValue}
              onChange={(event, data) => {
                setMetricValue(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="submit__button--wrapper">
          <Button className="submit__button" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <div className="results__title">
        <h4>RESULTS</h4>
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Restaurant</Table.HeaderCell>
            <Table.HeaderCell>Business Date</Table.HeaderCell>
            <Table.HeaderCell>Order number</Table.HeaderCell>
            <Table.HeaderCell>Order time</Table.HeaderCell>
            {metricDefinitions.map((md) => {
              return <Table.HeaderCell textAlign="center">{md.alias}</Table.HeaderCell>;
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>

        </Table.Body>
      </Table>
    </Container>
  );
}

async function getData(url = "") {
  const response = await fetch(url, {
    method: "GET",
    cache: "no-cache",
  });

  return response.json();
}

export default App;
