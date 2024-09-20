import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  DashboardAdmin,
  DashbordUser,
  MakingAppointment,
  SignUpAdmin,
  SignInUser,
  SignInAdmin,
  SignUpUser,
} from "./pages";
import { DashboardLayout } from "./layouts";
import Role from "./pages/Role";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role" element={<Role />} />
        <Route path="/signup/doctors" element={<SignUpAdmin />} />
        <Route path="/signup/patients" element={<SignUpUser />} />
        <Route path="/signin/doctors" element={<SignInAdmin />} />
        <Route path="/signin/patients" element={<SignInUser />} />
        <Route path="/making-appointment" element={<MakingAppointment />} />

        <Route path="/dashboard/user" element={<DashboardLayout />}>
          <Route index element={<DashbordUser/>} />
        </Route>

        <Route path="/dashboard/admin" element={<DashboardAdmin/>} />
        <Route path="*" element={<NotFound />} />        
      </Routes>
    </BrowserRouter>
  );
              
}

export default App;
