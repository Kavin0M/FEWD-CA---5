import Book from './Book'

function BookContainer(props) {
    return (
        <div id="book-container">
            {!props.data.error ? props.data.map((item,index) => <Book data={item} key={index}/>) : <div className='error-msg'>Books not available</div>}
        </div>
    )    
}

export default BookContainer