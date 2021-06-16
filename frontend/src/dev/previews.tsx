import React from "react";
import { BlankScreen } from "../app/blank/BlankScreen";
import UserList from "../app/user/UserList";
import UserEditor from "../app/user/UserEditor";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/UserEditor">
        <UserEditor />
      </ComponentPreview>
      <ComponentPreview path="/UserList">
        <UserList />
      </ComponentPreview>
      <ComponentPreview path="/blankScreen">
        <BlankScreen />
      </ComponentPreview>
    </Previews>
  );
};
