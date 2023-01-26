import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
    
      {post.map((repo) => {
        const list = (
          
            <ul>
              <li>Id: {repo.id}</li>
              <li>Name: {repo.name}</li>
              <li>Age: {repo.username}</li>
              <li>Address: {repo.address.street}</li>
            </ul>
            
          
        );
        return list;
      })}
    
    </div>
  );
}