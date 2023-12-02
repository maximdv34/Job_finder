import { Route, Routes } from "react-router-dom";
import { StudentForm } from "./StudentForm";
import { Header } from "./Header";
import { VacancyForm } from "./VacancyForm";
import { Home } from "./Home";
import { AllStudentsPage } from "./AllStudentsPage";
import { AllVacanciesPage } from "./AllVacanciesPage";
import { CssBaseline } from "@mui/material";
import { Corses } from "./Corses";
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
        <Route path="/tutti_studenti" element={<AllStudentsPage />} />
        <Route path="/tutti_offerte_di_lavoro" element={<AllVacanciesPage />} />
        <Route path="/API" element={<Corses />} />
      </Routes>
    </>
  );
};
