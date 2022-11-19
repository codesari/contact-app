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

import { getDatabase, push, ref, set } from "firebase/database";
import startFirebase from "./firebase";

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
