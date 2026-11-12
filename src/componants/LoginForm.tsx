import {  useState , type SyntheticEvent} from 'react';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        console.log(target,{email, password});
        // Handle form submission logic here
    }

    return (
        <form onSubmit={submitForm}>
            <h1>Login Form</h1> 
            <input onChange={(e) => {
                setEmail(e.target.value);
            }} value={email} type="email" placeholder="Enter your email" />
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} value={password} type="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
         </form>   
    );
}

export default LoginForm;