import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home,NotFound,DashboardAdmin,DashbordUser,MakingAppointment } from './pages';
import { DashboardLayout } from './layouts';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
