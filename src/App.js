import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Container, Navbar } from 'react-bootstrap';
import Header from './components/Header';

 
function App() {
  return (
    <>
      
      <Container>
        <Header />

        
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:user_id/posts" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;