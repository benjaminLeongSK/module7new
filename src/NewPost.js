import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [username, setUsername] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, username };

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            navigate('/')
        })
    }

    return ( 
        <div className="newPost">
            <h2>Add a New Dweet</h2>

            <form onSubmit={handleSubmit}>
                <label>Dweet title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Dweet body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Dweeter:</label>
                <textarea
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></textarea>

               <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default NewPost;