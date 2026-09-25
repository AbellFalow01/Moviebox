import { Routes, Route } from "react-router"
import Layout from "./layouts/Layout"
import DashboardPage from "./pages/DashboardPage"
import ErrorPage from "./pages/ErrorPage"
import MoviePage from "./pages/MoviePage"
import SavedPage from "./pages/SavedPage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/movie/:id" element={<MoviePage/>}/>
        <Route path="/saved" element={<SavedPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
