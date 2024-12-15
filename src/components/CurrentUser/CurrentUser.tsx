import { Link, useLocation } from "react-router-dom";
import { useGetUsers } from "@/hooks";
import { DataProps } from "@/types";
import { Loader } from "@/components";
import Arrow from "../../assets/arrow.png";
import { renderTableData } from "./helpers";
import * as S from "./styles";

export const CurrentUser = () => {
  const { pathname } = useLocation();
  const { data, isPending, erorr } = useGetUsers<DataProps | null>(pathname);

  return (
    <div css={S.UserWrapper}>
      <Link to="/">
        <img src={Arrow} alt="Back Arrow" />
      </Link>
      <h1>User information</h1>
      <Loader isPending={isPending} error={erorr}>
        <table css={S.Table} border={1}>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>{data && renderTableData(data)}</tbody>
        </table>
      </Loader>
    </div>
  );
};
