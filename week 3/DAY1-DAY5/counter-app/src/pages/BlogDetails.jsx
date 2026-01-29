import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return <h2>Showing Blog with ID: {id}</h2>;
}
export default BlogDetails;
