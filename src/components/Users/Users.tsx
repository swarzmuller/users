import { useState } from "react";
import { useDebounce, useGetUsers } from "@/hooks";
import { DataProps } from "@/types";
import { Loader, UserCard } from "@/components";
import * as S from "./styles";

export const Users = () => {
  const [searchName, setSearchName] = useState("");
  const debounceValue = useDebounce(searchName, 500);
  const { data, isPending, erorr } = useGetUsers<DataProps[]>(
    `/users${debounceValue}`
  );

  const handleChange = (value: string) => {
    if (value) {
      setSearchName(`?name_like=${value}`);
    } else {
      setSearchName("");
    }
  };

  const notFound = !data?.length ? "Nothing not found" : "";

  return (
    <div css={S.UsersWrapper}>
      <form
        css={S.Search(isPending)}
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleChange(e.target.search.value);
        }}
      >
        <h1>Search users</h1>
        <input
          type="search"
          name="search"
          placeholder="Search"
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value)
          }
        />
        <button>search</button>
      </form>
      <Loader isPending={isPending} error={erorr || notFound}>
        <ul css={S.UsersCardsList}>
          {data?.map((item, index) => (
            <li key={index}>
              <UserCard data={item} />
            </li>
          ))}
        </ul>
      </Loader>
    </div>
  );
};
