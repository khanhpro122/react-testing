// Libraries
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// Routes
import { routes } from "./routes";

function App() {
  
  return (
    <Router>
      <Routes>
        {routes?.map((route) => {
          const Page = route.page;
          return (
            <Route
              key={route.page}
              path={route.path}
              element={<Page />}
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
