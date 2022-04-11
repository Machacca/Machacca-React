import Router from "./router";
import { UserProvider } from "./Context/UserContex";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router />
      </div>
    </UserProvider>
  );
};

export default App;