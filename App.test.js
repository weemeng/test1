import React from "react"
import { render } from '@testing-library/react';
import App from "./App"

describe("App",() => {
    it("should render Counter Component", () => {
        const {getByTestId} = render (<App />)
        const counter = getByTestId("Counter");
        expect(counter).toBeInTheDocument();
    })
})