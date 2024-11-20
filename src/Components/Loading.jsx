import { SyncLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <SyncLoader color="#7469B6" size={30}></SyncLoader>
        </div>
    );
};

export default Loading;