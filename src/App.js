import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { writeUserData } from "./utils/functions";

function App() {
  const initial = {
    username: "",
    phone: "",
    gender: "",
  };
  const [user, setUser] = useState(initial);
  //* user state i obje de alabilir.FormComponent'de girilen form bilgilerini obje formatinda tek bir state olan user'a atacagiz.

  const handleSubmit = (e) => {
    e.preventDefault();
    writeUserData(user);
  };
  return (
    <div className="App">
      <FormComponent
        user={user}
        setUser={setUser}
        handleSubmit={handleSubmit}
      />
      <Contacts />
    </div>
  );
}

export default App;

//* FormComponentdeki handleSubmit işlemini burada App.js de yapmak istiyorum (bütün database işlemleri burada olsun istediğim için) handleSubmit'i props ile FormComponent'den aldim
