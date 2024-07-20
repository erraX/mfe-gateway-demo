"use client";

import { addUser } from '../_actions/addUser';

export default function AddUser() {
  return (
    <button
      onClick={async () => {
        const result = await addUser();
        alert(`user id: ${result.id}`);
      }}
    >
      Add User
    </button>
  );
}
