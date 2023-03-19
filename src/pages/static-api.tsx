

interface IGames {
    id: number,
    title: string,
    price: number
}


export async function getStaticProps() {
    const data = await fetch('http://localhost:3000/api/games');
    const games = await data.json();

    return {
        props: {
            games
        }
    }
}


export default function StaticApi(props: any) {

    const renderGames = () => {
        return props.games.map((game: IGames) => {
            return <li key={game.id}>
                Game: {game.title} only $ {game.price}
            </li>
        })
    }

    return (
        <>
          <div className="static">
             <h1>
                Static #03 - API Call
             </h1>
             <ul>
                {renderGames()}
             </ul>
          </div>  
        </>
    )
}