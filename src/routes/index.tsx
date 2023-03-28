import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Experience } from "../pages/experience";
import { Form } from "../pages/form";
import { Home } from "../pages/home";
import { Information } from "../pages/information";
import { Sectors } from "../pages/sectors";
import { Ticket } from "../pages/ticket";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/information" element={<Information />} />
      <Route path="/form" element={<Form />} />
      <Route path="/ticket" element={<Ticket />} />
    </Routes>
  );
}