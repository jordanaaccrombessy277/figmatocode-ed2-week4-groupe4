import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home,NotFound,DashboardAdmin,DashbordUser,MakingAppointment, SignUp } from './pages';
import { DashboardLayout } from './layouts';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/making-appointment" element={<MakingAppointment/>}/>
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
