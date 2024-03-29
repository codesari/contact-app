// import { getDatabase, ref, set } from "firebase/database";

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
//? yukaridaki yapiyi fonksiyonel hale getirdik.

//* CRUD --> C
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import startFirebase from "./firebase";
import { toastify } from "./toastify";

export const writeUserData = (user) => {
  const db = getDatabase(startFirebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: user.username,
    phone: user.phone,
    gender: user.gender,
  });
  console.log("process successfully..");
};

//* CRUD --> R

//? useFetch() bir custom hook
export const useFetch = () => {
  const [contact, setContact] = useState("");
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    const db = getDatabase(startFirebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContact(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contact };
};

export const deleteUser = (id) => {
  const db = getDatabase(startFirebase);

  remove(ref(db, "users/" + id));
  toastify("Deleted successfully");
};

export const updateUser = (user) => {
  const db = getDatabase(startFirebase);
  const userRef = ref(db, "users/");

  const updates = {};
  updates["/users/" + user.id] = user;
  return update(ref(db), updates);
};
