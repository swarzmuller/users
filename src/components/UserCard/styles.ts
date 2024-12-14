import { css } from "@emotion/react";

export const UserCard = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px 12px 24px;
  width: 100%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 0 8px 0;
  background: #ffffff;
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 0 20px 0;
    transform: scale(1.1);
  }

  img {
    max-width: 100px;
    width: 100%;
  }
`;

export const Name = css`
  font-weight: 600;
`

export const Email = css`
  font-size: 14px;
`