import React from "react";
import { Table } from "antd";

const TradeTable = props => {
  const columns = [
    {
      title: "Time",
      dataIndex: "datetime",
      key: "datetime"
    },
    {
      title: "Ticker",
      dataIndex: "ticker",
      key: "ticker"
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action"
    }
  ];

  return <Table dataSource={props.data} columns={columns} />;
};

export default TradeTable;
