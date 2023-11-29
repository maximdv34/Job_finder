import { Route, Routes } from "react-router-dom";
import { StudentForm } from "./StudentForm";
import { Header } from "./Header";
import { VacancyForm } from "./VacancyForm";
import { AllStudents } from "./AllStudents";
import { Home } from "./Home";
import { AllVacancies } from "./AllVacancies";
import { CssBaseline } from "@mui/material";
export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inserimento_studenti" element={<StudentForm />} />
        <Route
          path="/inserimento_offerte_di_lavoro"
          element={<VacancyForm />}
        />
        <Route path="/tutti_studenti" element={<AllStudents />} />
        <Route path="/tutti_offerte_di_lavoro" element={<AllVacancies />} />
      </Routes>
    </>
  );
};
