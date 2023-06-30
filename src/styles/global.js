import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-color-primary: #ff577f;
        --color-color-primary-hover: #ff3176;
        --color-color-primary-50: #ff427f;
        --color-color-primary-disable: #59323f;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343b41;
        --color-grey-2-hover: #52595f;
        --color-grey-1: #868e96;
        --color-grey-0: #f8f9fa;
        --color-sucess: #3fe864;
        --color-negative: #e83f5b;
        --font-primary: "Inter", sans-serif;
    }

    .Modal {
                display: flex;
                flex-direction: column;
                height: fit-content;
                position: fixed;
                width: 94%;
                max-width: 369px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: var(--color-grey-3);
                border-radius: 4px;
                overflow: hidden;
                border: none;
            }
    `