const Signup = () => {
    const [credentials, setCredentials] = useState({
      name: '',
      email: '',
      password: '',
      cpassword: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, password, cpassword } = credentials;
  
      if (password !== cpassword) {
        setError('Passwords do not match!');
        return;
      }
  
      setLoading(true);
      setError('');
  
      try {
        const response = await fetch('http://localhost:5000/api/auth/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password })
        });
  
        const json = await response.json();
  
        if (response.ok) {
          if (json.status) {
            localStorage.setItem('token', json.authtoken);
            navigate('/home');
          } else {
            setError(json.message || 'An error occurred. Please try again.');
          }
        } else {
          // Server returned an error status
          setError(json.message || 'Failed to create an account. Please try again.');
        }
      } catch (err) {
        setError('Unable to connect to the server. Please check your internet connection.');
      } finally {
        setLoading(false);
      }
    };
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
        <div className="container2 d-flex justify-content-center align-items-center min-vh-100">
          <div className="login-container2">
            <h2 className="text-center">Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label4">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={onChange}
                  placeholder="Enter your Name"
                  value={credentials.name}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="email" className="form-label4">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={onChange}
                  placeholder="Enter email"
                  value={credentials.email}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="password" className="form-label4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  onChange={onChange}
                  placeholder="Password"
                  value={credentials.password}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label4">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="cpassword"
                  id="cpassword"
                  onChange={onChange}
                  placeholder="Confirm Password"
                  value={credentials.cpassword}
                />
              </div>
  
              {error && <div className="alert alert-danger">{error}</div>}
  
              <div className="d-grid4">
                <button type="submit" className="newbtn btn btn-primary" disabled={loading}>
                  {loading ? 'Signing Up...' : 'Signup'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;
  