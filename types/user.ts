import { Dispatch, SetStateAction } from "react";

export type User = {
  _id: string;
  name: string;
  email: string;

  image?: string;
  age?: string;
  city?: string;
  occupation?: string;
  phone?: string;

  basicInfoComplete: boolean;
};

export type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export type SyncUserRequest =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

export type SyncUserResponse = {
  user: User;
};
