import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog._id} >
            <h2>{ blog.name }</h2>
            <p>Edad: { blog.age }</p>
            <p>Radio: { blog.radius } km</p>

            {blog.description ? <p>descripción: {blog.description}</p> : <p>descripción: SIN DESCRIPCIÓN</p>}
            
            <p>Fecha: { blog.date } </p>
            <p>Hora: { blog.time } </p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;