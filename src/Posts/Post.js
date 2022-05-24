import '../Style/Post.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { SinglePost } from './SinglePost';


export function Post({ postdata }) {

 
  const history = useNavigate();
  const Posts = () => {
    console.log("postid", postdata.id)
    history(`/${postdata.user_id}/posts/${postdata.id}`);
    
  }
  return (
    <>


      <div className="single-card">

        <Card onClick={() => Posts()}>

          <Card.Body>
            <Card.Title>{postdata.title}</Card.Title>
            <Card.Text>
              {postdata.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}