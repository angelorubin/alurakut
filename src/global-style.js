import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
    :root {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        /** Colors */
        --primary-color: blue;
    }
    /** Sizes */
    --smallSize: 1rem;
    --mediumSize: 1.5rem;
    --largeSize: 2rem;
`;
