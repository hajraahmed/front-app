import { Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PostList } from './Posts/PostList';
import { SinglePost } from './Posts/SinglePost';
import { NotFoundPage } from './pages/NotFoundPage';
import { Container } from 'react-bootstrap';
import { UpdateUser } from './Users/UpdateUser';
import { EditPost } from './Posts/EditPost';
import { PostForm } from './Posts/PostForm';
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
          <Route path="/:user_id/edit" element={<UpdateUser />} />
          <Route path="/:user_id/:post_id/edit" element={<EditPost />} />
          <Route path="/:user_id/create" element={<PostForm/>} />
           
        </Routes>
      </Container>
    </>
  );
}
export default App;