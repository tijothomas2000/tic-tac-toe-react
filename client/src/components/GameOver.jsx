export default function GameOver({winner,onRestart}){
    return(
        <div id="game-over">
            <h2>GAME OVER !</h2>
            {winner &&<p>{winner} won!</p>}
            {!winner &&<p>{winner} Its a Draw !</p>}
            <button onClick={onRestart}>Rematch</button>
        </div>
    )
}