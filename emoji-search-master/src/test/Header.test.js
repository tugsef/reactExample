import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../Header'


describe("Header varmı", () => {
    let headerRen;
    beforeEach(() => {
        render(<Header />)
        headerRen = screen.getByText("Emoji Search");
    })

    test("Başlık var mı", () => {
        expect(headerRen).toBeInTheDocument();
    });
});