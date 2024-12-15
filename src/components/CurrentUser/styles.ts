import { css } from "@emotion/react";

export const UserWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 40px 0;

  a {
    position: absolute;
    left: 14px;
    top: 55px;

    img {
      max-width: 100%;
      width: 19px;
    }
  }
`;

export const Table = css`
  width: 100%;
  border-collapse: collapse;

  tr,
  td {
    padding: 5px;
  }

  strong {
    text-transform: capitalize;
  }
`;
