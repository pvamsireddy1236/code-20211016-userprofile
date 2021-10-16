import React from "react";
import { UsersList } from ".";
import { render } from "@testing-library/react";

test("Renders UsersList component", async () => {
  const { findByText } = render(<UsersList />);
  const myElement = await findByText(/User Details/i);
  expect(myElement).toHaveTextContent('User Details');
});
