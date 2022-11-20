import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { updateUser, writeUserData } from "./utils/functions";

function App() {
  const initial = {
    username: "",
    phone: "",
    gender: "",
  };
  const [user, setUser] = useState(initial);
  const [btnName, setBtnName] = useState("ADD");
  //* user state i obje de alabilir.FormComponent'de girilen form bilgilerini obje formatinda tek bir state olan user'a atacagiz.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      //? user.id varsa bu islem güncelleme islemidir.
      updateUser(user);
    } else {
      //? id yoksa bu bir yeni kayit işlemidir.
      writeUserData(user);
    }
    setUser(initial);
    setBtnName("ADD");
  };
  const editUser = (id, username, phone, gender) => {
    setBtnName("UPDATE");
    setUser({ id, username, phone, gender });
  };

  return (
    <div className="App">
      <FormComponent
        user={user}
        setUser={setUser}
        handleSubmit={handleSubmit}
        btnName={btnName}
      />
      <Contacts editUser={editUser} />
    </div>
  );
}

export default App;

//* FormComponentdeki handleSubmit işlemini burada App.js de yapmak istiyorum (bütün database işlemleri burada olsun istediğim için) handleSubmit'i props ile FormComponent'den aldim
