function Board(){
    return (
        <main className="content board">
            <div className="titBanner" >
                <h2>Board</h2>
                <img src={process.env.PUBLIC_URL + '/img/sub_board.jpg'} />
            </div>

            <div className="inner">

            </div>
        </main>
    )
}
export default Board;