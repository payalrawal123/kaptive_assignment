import { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <select name="profession" onChange={handleChange} required>
        <option value="">Select Profession</option>
        <option value="Doctor">Doctor</option>
        <option value="Engineer">Engineer</option>
        <option value="Teacher">Teacher</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
