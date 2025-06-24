import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './Components/AppLayout';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter basename="/RaydiantWebs"> {/* Set your base path here */}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Nested routes for pages */}
          <Route index element={<HomePage />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
