import React from "react";
import { VerticalMenu, MenuItem, SubMenuItem } from "@haulmont/jmix-react-ui";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";
import { tabs } from "@haulmont/jmix-react-core";

export const AppMenu = () => {
  return (
    <VerticalMenu>
      <MenuItem
        onClick={tabs.closeAll}
        icon={<HomeOutlined />}
        caption={"menu.home"}
        key={"home"}
      />
      <MenuItem
        screenId={"UserList"}
        icon={<BarsOutlined />}
        caption={"menu.UserList"}
        key={"ede02e7d-e3ae-4a88-8f48-e2da6fa05218"}
      />
      <MenuItem
        screenId={"BlankScreen"}
        icon={<BarsOutlined />}
        caption={"menu.BlankScreen"}
        key={"720a1fa7-6b37-4ac4-afd9-ac1eb56cf1c1"}
      />
    </VerticalMenu>
  );
};
