import { css } from "@emotion/react";

export const Loading = css`
  width: 60px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;
  margin: 50px 0;
  animation: l7 1s infinite linear;

  @keyframes l7 {
    33% {
      background-size: calc(100% / 3) 0%, calc(100% / 3) 100%,
        calc(100% / 3) 100%;
    }
    50% {
      background-size: calc(100% / 3) 100%, calc(100% / 3) 0%,
        calc(100% / 3) 100%;
    }
    66% {
      background-size: calc(100% / 3) 100%, calc(100% / 3) 100%,
        calc(100% / 3) 0%;
    }
  }
`;

export const Error = css`
  margin: 50px 0;
  font-size: 32px;
  font-weight: 600;
`;
