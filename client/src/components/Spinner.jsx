import spinner from "../assets/spinner.gif";
const Spinner = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="loading" />
        </div>
    );
};

export default Spinner;
