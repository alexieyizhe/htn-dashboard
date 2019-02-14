import React from "react";
import { storiesOf } from "@storybook/react";
import DashboardCard from "./DashboardCardComponent";


storiesOf("DashboardCard", module)
  .add("Default", () => <DashboardCard />)
  .add("Completed", () => <DashboardCard completed />);
