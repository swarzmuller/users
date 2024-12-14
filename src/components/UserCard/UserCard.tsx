import { Link } from "react-router-dom";
import { DataProps } from "@/types";
import Users from '../../assets/user-img.jpg'
import * as S from "./styles";


export const UserCard = ({ data }: { data: DataProps }) => {
  const { id, name, email } = data;
  return (
    <Link css={S.UserCard} to={`/users/${id}`}>
      <img src={Users} alt={`${name} Image`} />
      <p css={S.Name}>{name}</p>
      <p css={S.Email}>{email}</p>
    </Link>
  );
};
