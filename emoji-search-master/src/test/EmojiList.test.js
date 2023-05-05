import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import emojiList from '../emojiList.json'
import App from "../App";


describe("Emoje List Render", () => {
    beforeEach(() => {
        render(<App />)
    })
    test("Emoje list render", () => {
        const emojList = emojiList.slice(0, 20);
        emojList.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        });
    });
});
