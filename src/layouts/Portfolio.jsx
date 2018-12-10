import React from "react";
import TradeTable from "../components/tradeTable/TradeTable";

const data = [
  {
    datetime: "2018-10-01",
    ticker: "AAPL",
    quantity: 20,
    price: 30.02,
    action: "buy"
  }
];

const Portfolio = () => {
  return <TradeTable data={data} />;
};

export default Portfolio;
