import { Link } from 'react-router-dom';
import errorImg from '../assets/errorpage.svg';

const ErrorPage = () => {
    return (
        <div className='min-h-screen mx-auto flex flex-col justify-center items-center space-y-4'>
            <div className='w-1/2'><img src={errorImg} alt="" /></div>
            <h3 className='italic md:text-3xl'>Page Not Found</h3>
            <Link to='/'><button className='btn bg-Tertiary text-primary'>Back to homepage</button></Link>
        </div>
    );
};

export default ErrorPage;