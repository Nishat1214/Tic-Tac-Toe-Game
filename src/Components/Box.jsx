const Box = ({ value, onClick, disabled }) => {
    return (
        <button
            className="box"
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </button>
    );
};

export default Box;