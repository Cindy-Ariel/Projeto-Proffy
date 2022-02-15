import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import TeacherForm from "./Pages/TeacherForm";
import TeacherList from "./Pages/TeacherList";

function Rotas() {
  return (
      <Routes >
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<TeacherList />}/>
        <Route path="/give-classes" element={<TeacherForm />}/>
      </Routes>
  );
}

export default Rotas;
