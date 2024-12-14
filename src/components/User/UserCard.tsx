import { Link } from "react-router-dom";
import { DataProps } from "@/types";

export const UserCard = ({ data }: { data: DataProps }) => {
  return <Link to={`/user/${data.id}`}>{data.id}</Link>;
};
