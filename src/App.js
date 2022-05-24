import { Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PostList } from './Posts/PostList';
import { SinglePost } from './Posts/SinglePost';
import { NotFoundPage } from './pages/NotFoundPage';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

 
function App() {
  return (
    <>
      
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:user_id/posts" element={<PostList />} />
          <Route path="/:user_id/posts/:post_id" element={<SinglePost />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;