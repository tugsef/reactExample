import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'


describe("Emoji Kopya",() =>{
    let copyEmoji;
    beforeEach(()=>{
        render(<App/>)
        copyEmoji = screen.getByText("100")
    })
    test("yapıştır ",()=>{
        userEvent.click(copyEmoji);
        expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("💯")
    })
})