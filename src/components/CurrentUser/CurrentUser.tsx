import { useLocation } from "react-router-dom";
import { useGetUsers } from "@/hooks";
import { DataProps } from "@/types";
import { Loader } from "@/components";

export const CurrentUser = () => {
  const { pathname } = useLocation();
  const { data, isPending, erorr } = useGetUsers<DataProps | null>(pathname);

  const formatData = (key: string) => {
    if (key === "address" || key === "company") return
    // console.log(data[key] as any);
  };

  return (
    <Loader isPending={isPending} error={erorr}>
      <div>
        <h1>User information</h1>
        <table>
          <tbody>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
            {data &&
              Object.keys(data).map((item) => {
                // if (item && item === "address" || item === "company") return;
                formatData(item);
                return (
                  <tr key={item}>
                    <td>{item}</td>
                    {/* <td>{data[item as keyof DataProps]}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Loader>
  );
};
