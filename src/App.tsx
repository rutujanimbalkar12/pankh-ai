import { Routes, Route } from "react-router-dom";
import { Providers } from "./providers";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CycleTracking from "./pages/CycleTracking";
import Symptoms from "./pages/Symptoms";
import AIInsights from "./pages/AIInsights";
import Diet from "./pages/Diet";
import MoodEnergy from "./pages/MoodEnergy";
import Wearables from "./pages/Wearables";
import NotFound from "./pages/NotFound";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Wellness from "./pages/Wellness";
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <Providers>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Index /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/cycle-tracking" element={<ProtectedRoute><CycleTracking /></ProtectedRoute>} />
      <Route path="/symptoms" element={<ProtectedRoute><Symptoms /></ProtectedRoute>} />
      <Route path="/ai-insights" element={<ProtectedRoute><AIInsights /></ProtectedRoute>} />
      <Route path="/diet" element={<ProtectedRoute><Diet /></ProtectedRoute>} />
      <Route path="/mood-energy" element={<ProtectedRoute><MoodEnergy /></ProtectedRoute>} />
      <Route path="/wearables" element={<ProtectedRoute><Wearables /></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
      <Route path="/wellness" element={<ProtectedRoute><Wellness /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Providers>
);

export default App;
