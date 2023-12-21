function Book(props) {
    if (props.data){
        return (
            <div className="book">
                <img src={props.data.imageLinks.smallThumbnail} alt="" className="book-img"/>
                <div className="title">{props.data.title}</div>
                <div className="subtitle"><span className="rating">{props.data.averageRating? props.data.averageRating : (Math.random() * (5 - 3) + 3).toFixed(1)} &#9733;</span><span className="cost">Free</span></div>
            </div>
        )
    }

}

export default Book