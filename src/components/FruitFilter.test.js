import React from "react";
import FruitsFilter from "./fruitFilter";
import { render, fireEvent } from '@testing-library/react';


describe("FruitsFilter", () => {
    it("should render the input",() => {
        const { getByLabelText } = render(<FruitsFilter />)
        const fruitFilterInput = getByLabelText("fruitFilter");
        expect(fruitFilterInput).toBeInTheDocument();
    })

    it("should render all the fruits on load",() => {
        const { getAllByTestId } = render(<FruitsFilter />)
        const fruits = getAllByTestId("fruitName");
        expect(fruits).toHaveLength(6);
    })

    it("should render only render items starting with 'ap' when filtered",() => {
        const { getByLabelText, getByText, getAllByTestId } = render(<FruitsFilter />)
        const filterInputBox = getByLabelText("fruitFilter");
        
        fireEvent.change(filterInputBox , { target: { value: "ap" } });
        expect(getAllByTestId("fruitName")).toHaveLength(2);
        expect(getByText("apple")).toBeInTheDocument();
        expect(getByText("apricot")).toBeInTheDocument();
        expect(() => getByText("citrus")).toThrowError();
    })
})