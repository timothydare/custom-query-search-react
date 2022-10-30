import "./App.css";
import "./App.css";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Pagination,
  Table,
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import { ReactDatez } from "react-datez";
import React from "react";
import Restaurant from "./RestaurantData.json";

function App() {
  const [restaurantIds, setRestaurantIds] = useState([]);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [fromHour, setFromHour] = useState();
  const [toHour, setToHour] = useState();
  const [metricDefinitions, setMetricDefinitions] = useState([]);
  const [results, setResults] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [metricCriteria, setmetricCriteria] = useState([
    {
      metricCode: "",
      compareType: "",
      value: 0,
    },
  ]);

  useEffect(() => {
    getData(
      "https://customsearchquerytoolapi.azurewebsites.net/Search/MetricDefinitions"
    ).then((data) => {
      setMetricDefinitions(data);
    });
  }, []);

  const submit = () => {
    const input = {
      restaurantIds: restaurantIds,
      fromDate: fromDate,
      toDate: toDate,
      fromHour: fromHour,
      toHour: toHour,
      metricCriteria: metricCriteria,
    };
    postData(
      "https://customsearchquerytoolapi.azurewebsites.net/Search/Query",
      input
    ).then((data) => {
      setResults(data);
    });
  };

  const metricCodeOptions = metricDefinitions.map((m) => {
    return {
      key: m.metricCode,
      value: m.metricCode,
      text: m.alias,
    };
  });

  const options = Restaurant.map((r) => {
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

  const handlePaginationChange = (pageNumber) => {
    setActivePage(pageNumber);
    console.log(pageNumber);
  };

  const handleCriteriaAdd = () => {
    setmetricCriteria([
      ...metricCriteria,
      {
        metricCode: "",
        compareType: "",
        value: 0,
      },
    ]);
  };

  const handleCriteriaRemove = (index) => {
    const newArray = [...metricCriteria];
    newArray.splice(index, 1);
    setmetricCriteria(newArray);
  };

  const handleMetricCriteriaChange = (property, index, value) => {
    const newArray = [...metricCriteria];
    newArray[index][property] = value;
    setmetricCriteria(newArray);
  };
  
  const indexOfLastResult = activePage * 10;
  const indexOfFirstResult = indexOfLastResult - 10;
  const transactionDataPaginated = results.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  console.log(results);
  console.log(metricDefinitions);
  console.log(metricCriteria);

  return (
    <Container>
      <div className="landing__title">
        <h1 className="title">Delaget Custom Query Search Tool</h1>
      </div>
      <h2 className="landing__subtitle">Select your desired inputs</h2>
      <Form onSubmit={() => submit()}>
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
        {metricCriteria.map((mc, index) => (
          <>
            <div key={index} className="metric-forms">
              <div className="metric__code--form">
                <label>Metric Code</label>
                <Dropdown
                  fluid
                  selection
                  options={metricCodeOptions}
                  value={mc.metricCode}
                  onChange={(e, data) =>
                    handleMetricCriteriaChange(
                      "metricCode",
                      index,
                      data.value
                    )
                  }
                />
              </div>
              <div className="metric__compare--form">
                <label>Compare Type</label>
                <Dropdown
                  fluid
                  selection
                  options={compareTypeOptions}
                  value={mc.compareType}
                  onChange={(e, data) =>
                    handleMetricCriteriaChange(
                      "compareType",
                      index,
                      data.value
                    )
                  }
                />
              </div>
              <div className="metric__value--form">
                <label>Value</label>
                <input
                  name="value"
                  type="number"
                  value={mc.value}
                  onChange={(e) =>
                    handleMetricCriteriaChange(
                      e.target.name,
                      index,
                      Number.parseInt(e.target.value)
                    )
                  }
                ></input>
              </div>
              {metricCriteria.length > 1 && (
                <Button 
                  type="button"
                  className="remove__criteria--button"
                  onClick={() => handleCriteriaRemove(index)}
                >
                  Remove Criteria
                </Button>
              )}
            </div>
            {metricCriteria.length - 1 === index && metricCriteria.length < 5 && (
              <div className="remove__button--wrapper">
                <Button
                  className="add__criteria--button"
                  onClick={handleCriteriaAdd}
                >
                  Add Criteria
                </Button>
              </div>
            )}
          </>
        ))}
        <div className="submit__button--wrapper">
          <Button className="submit__button" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <div className="results__title">
        <h4>RESULTS</h4>
      </div>
      {results.length === 0 ? (
        <React.Fragment>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Restaurant</Table.HeaderCell>
                <Table.HeaderCell>Business Date</Table.HeaderCell>
                <Table.HeaderCell>Order number</Table.HeaderCell>
                <Table.HeaderCell>Order time</Table.HeaderCell>
                {metricDefinitions.map((md) => {
                  return (
                    <Table.HeaderCell textAlign="center">
                      {md.alias}
                    </Table.HeaderCell>
                  );
                })}
              </Table.Row>
            </Table.Header>
          </Table>
          <p className="no__results">No Results</p>
        </React.Fragment>
      ) : (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Restaurant</Table.HeaderCell>
              <Table.HeaderCell>Business Date</Table.HeaderCell>
              <Table.HeaderCell>Order number</Table.HeaderCell>
              <Table.HeaderCell>Order time</Table.HeaderCell>
              {metricDefinitions.map((md) => {
                return (
                  <Table.HeaderCell textAlign="center">
                    {md.alias}
                  </Table.HeaderCell>
                );
              })}
            </Table.Row>
          </Table.Header>
          <React.Fragment>
            <Table.Body> 
              {transactionDataPaginated.map((d) => {
                return (
                  <Table.Row>
                    <Table.Cell>
                      {Restaurant.find(
                        (x) => x.Id === d.restaurantId
                      ).Name.slice(14)}
                    </Table.Cell>
                    <Table.Cell>{d.busDt.slice(0, 10)}</Table.Cell>
                    <Table.Cell>{d.orderNumber}</Table.Cell>
                    <Table.Cell>{d.orderTime.slice(11, 16)}</Table.Cell>
                    {metricDefinitions.map((m) => {
                      const metricCodeName =
                        m.metricCode.charAt(0).toLowerCase() +
                        m.metricCode.slice(1);
                      console.log(metricCodeName);
                      return (
                        <Table.Cell textAlign="center">
                          {formatData(d[metricCodeName], m)}
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>
                );
              })}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="12">
                  <Pagination
                    floated="right"
                    className="table__pagination"
                    activePage={activePage}
                    onPageChange={(event, data) =>
                      handlePaginationChange(data.activePage)
                    }
                    totalPages={Math.ceil(results.length / 10)}
                  ></Pagination>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </React.Fragment>
        </Table>
      )}
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

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

function formatData(value, metricDefinition) {
  let formattedValue = "";

  switch (metricDefinition.dataType) {
    case "Money":
      formattedValue = `$ ${value.toFixed(metricDefinition.decimalPlaces)}`;
      break;

    case "Percent":
      formattedValue = `${value.toFixed(metricDefinition.decimalPlaces)} %`;
      break;

    default:
      formattedValue = value.toFixed(metricDefinition.decimalPlaces);
      break;
  }

  return formattedValue;
}

export default App;
