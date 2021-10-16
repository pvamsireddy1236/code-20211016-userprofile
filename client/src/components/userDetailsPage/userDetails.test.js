import React from "react";
import { UserDetailsPage } from ".";
import { render } from "@testing-library/react";
import { userInfo } from "../../services/login";
import { renderHook, cleanup, act } from "@testing-library/react-hooks";

test("Renders UsersList component", async () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };

  global.localStorage = localStorageMock;
  jest.spyOn(localStorage, "getItem");

  const { result } = renderHook(() => UserDetailsPage());
});
