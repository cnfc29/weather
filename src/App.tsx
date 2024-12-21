import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

// Придирка: Советую юзать ES6. Стрелочные функции
// Советую указывать return type. Здесь - JSX.Element.
// Почитай в чем разница между JSX.Element и ReactNode
const App = (): JSX.Element => {
  return <MainPage />;
}

export default App;
