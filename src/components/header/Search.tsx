import React from "react";

import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export const SearchField: React.FC = () => (
  <Space direction="vertical">
    <Search
      classNames={{ input: "input" }}
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
    />
  </Space>
);
