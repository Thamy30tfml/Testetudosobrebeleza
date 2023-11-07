import "./styles.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";
export default function App() {
  console.log;
  window.alert(`Olá Leitor`);
  window.confirm(`Esta gostando do conteúdo`);
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
