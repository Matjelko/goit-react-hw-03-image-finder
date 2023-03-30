const Searchbar = ({ handleSubmit }) => {
    return(
        <header className="searchbar">
            <form className="search-form" onSubmit={handleSubmit}>
                <button className="search-form-button" type="submit">
                    <span className="search-form-button">🔎</span>
                </button>

                <input
                    className="search-form-input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

export default Searchbar