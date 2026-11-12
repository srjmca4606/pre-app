
type WelcomeMessageProps = {
    isLoggedIn: boolean;
};

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ isLoggedIn }) => {

    return (
    <div>
        {isLoggedIn ?        
        <div>
            <h1>Welcome to My App</h1>
            <p>We're glad you're here!</p>
        </div> : 
        <div>
            <h1>No access</h1>
            <p>Please log in to access this content.</p>
        </div> }
    </div>
    );  
    
}

export default WelcomeMessage;