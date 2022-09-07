import ContextProvider from "./store";
import AppRoutes from "./routes";

function App() {
      return (
            <ContextProvider>
                  <AppRoutes />
            </ContextProvider>
      );
}

export default App;
