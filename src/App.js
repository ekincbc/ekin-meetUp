import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
