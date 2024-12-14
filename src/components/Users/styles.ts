import { css } from "@emotion/react";

export const UsersWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const Search = (isPending: boolean) => css`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-rows: auto auto;
  gap: 10px;
  max-width: 650px;
  width: 100%;
  opacity: ${isPending ? 0.5 : 1};
  pointer-events: ${isPending ? "none" : "all"};
  text-align: center;
  transition: 0.3s;

  h1 {
    grid-column: span 2;
  }
  button,
  input {
    grid-row: 2;
  }

  input {
    border: 1px solid #bdbdbd;
    outline: none;
    font-size: 16px;
    border-radius: 8px;
    padding: 10px;
    transition: 0.3s;

    &:focus {
      box-shadow: 0 0 3px 1px #bcbcbc;
    }
  }

  button {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.8px;
    padding: 0px 16px;
    color: rgb(255, 255, 255);
    border-radius: 6px;
    background: linear-gradient(
      247deg,
      rgb(117, 153, 222) 14.71%,
      rgb(65, 120, 225) 85.29%
    );

    &:hover {
      background: linear-gradient(
        247deg,
        rgb(72, 122, 218) 14.71%,
        rgb(14, 75, 193) 85.29%
      );
    }
  }
`;

export const UsersCardsList = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  max-width: 1000px;
  width: 100%;
  list-style-type: none;
  margin: 20px 0;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;
