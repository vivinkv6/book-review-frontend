import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "../src/hooks/UseFetch";
import HomePage from "./pages/HomePage";
import SingleItemPage from "./pages/SingleItemPage";
import SearchPage from "./pages/SearchPage";
import LanguagePage from "./pages/LanguagePage";
import PostReview from "./pages/PostReview";
import NotFound from "./pages/NotFound";

function App() {
  const { data, error, loading } = useFetch("http://localhost:1337/api/books");
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage data={data} error={error} loading={loading} />}
          />
          <Route
            path=":id"
            element={
              <SingleItemPage data={data} error={error} loading={loading} />
            }
          />
          <Route path="search" element={<SearchPage />} />
          <Route
            path="language"
            element={<LanguagePage language="English" data={data} />}
          />
          <Route
            path="language/:id"
            element={
              <SingleItemPage data={data} error={error} loading={loading} />
            }
          />
          <Route
            path="/english"
            element={<LanguagePage language="English" data={data} />}
          />
          <Route
            path="english/:id"
            element={
              <SingleItemPage data={data} error={error} loading={loading} />
            }
          />
          <Route
            path="/malayalam"
            element={<LanguagePage language="Malayalam" data={data} />}
          />
          <Route
            path="malayalam/:id"
            element={
              <SingleItemPage data={data} error={error} loading={loading} />
            }
          />
          <Route
            path="/hindi"
            element={<LanguagePage language="Hindi" data={data} />}
          />
          <Route
            path="hindi/:id"
            element={
              <SingleItemPage data={data} error={error} loading={loading} />
            }
          />
          <Route
            path="search/:id"
            element={
              <SingleItemPage data={data} error={error} loading={loading} />
            }
          />
          <Route path="post" element={<PostReview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
