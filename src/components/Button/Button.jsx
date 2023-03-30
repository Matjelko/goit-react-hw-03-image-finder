const Button = ({ handleLoadMore }) => {
    return(
        <button className="button" type="button" onClick={() => handleLoadMore()}>
            Load More
        </button>
    )
}

export default Button