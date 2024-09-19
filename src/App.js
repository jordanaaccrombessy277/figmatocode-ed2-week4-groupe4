import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  DashboardAdmin,
  DashbordUser,
  MakingAppointment,
  SignUp,
} from "./pages";
import { DashboardLayout } from "./layouts";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-up" element={<Home/>}/>
            <Route path="/making-appointment" element={<MakingAppointment/>}/>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="/dashboard/user" element={<DashbordUser/>} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/dashboard/admin" element={<DashboardAdmin/>} />
        </Routes>
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/making-appointment" element={<MakingAppointment />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
          <Route index element={<DashbordUser />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
>>>>>>> 8f6631fac55f4641edf8f9cb4a2dd25c65b3a94d
    </BrowserRouter>
  );
}

export default App;
