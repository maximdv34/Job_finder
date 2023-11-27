import { Route, Routes } from "react-router-dom";
import { StudentForm } from "./StudentForm";
import { Header } from "./Header";
export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StudentForm />} />
      </Routes>
    </>
  );
};
