import { LoaderProps } from "@/types";
import * as S from "./styles";

export const Loader = ({ isPending, error, children }: LoaderProps) => {
  if (isPending) return <div css={S.Loading}></div>;
  if (error) return <div css={S.Error}>{error}</div>;
  return children;
};
