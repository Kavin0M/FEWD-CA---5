function Book(props) {
    if (props.data){
        return (
            <div className="book">
                {props.data.imageLinks ? <img src={props.data.imageLinks.smallThumbnail} alt="" className="book-img"/> : <img src="https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg" alt="" className="book-img"/>}
                <div className="title">{props.data.title}</div>
                <div className="subtitle"><span className="rating">{props.data.averageRating? props.data.averageRating : (Math.random() * (5 - 3) + 3).toFixed(1)} &#9733;</span><span className="cost">Free</span></div>
            </div>
        )
    }

}

export default Book