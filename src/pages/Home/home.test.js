/**
 * @jest-environment jsdom
 */
// Ici j'importe DOM Test Librairy
import '@testing-library/jest-dom'

import {
    getByTestId
} from '@testing-library/dom'

import { DataProvider, useData } from "../../contexts/DataContext";
import Home from "./index";

describe('Navigation bar Test Suites', () => {
    it('Nos services', async () => {
         document.body.innerHTML = `
            <div id="root"></div>
        `
    Home()

    expect(
            getByTestId(document.body, 'tousservercices')
        ).toHaveTextContent('Nous organisons des événements sur mesure partout dans le monde')
    })
})