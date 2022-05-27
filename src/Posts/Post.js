import '../Style/Post.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
export function Post({ postdata }) {
  const Edit = () => {
    history(`/${postdata.user_id}/${postdata.id}/edit/`);
  }
  const Delete = () => {
    console.log("inside delete")
    console.log(postdata)
    fetch(`http://localhost:3000/api/v1/users/${postdata.user_id}/posts/${postdata.id}`, {

      headers: {

        "Accept": "application/json"
      },
      method: "DELETE",
    })
      .then(response => response.json())
      .catch((error) => console.log)
  }
  const history = useNavigate();
  const Posts = () => {
    console.log("postid", postdata.id)
    history(`/${postdata.user_id}/posts/${postdata.id}`);


  }
  return (
    <>


      <div className="single-card">
        <Card >
          <Card.Body onClick={() => Posts()}>
            <Card.Title>{postdata.title}</Card.Title>
            <Card.Text>
              {postdata.content}
            </Card.Text>
          </Card.Body>
          <button variant="primary" onClick={() => Edit()}>Edit Post</button>
          <button variant="primary" onClick={() => Delete()}>Delete Post</button>
        </Card>
      </div>
    </>
  )
}