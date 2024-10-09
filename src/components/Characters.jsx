import '../styles/Characters.scss'

export default function Characters({ data, onClick }) {
    return (
        <div className='characters'>
            {
                data.map((character) => {
                    return (
                        <div key={character.id} className='characterCard' style={{
                            background: `url(${character.thumbnail.path}.${character.thumbnail.extension}) no-repeat center`,
                            backgroundSize: "cover",
                        }}
                            onClick={() => { onClick(character.id) }}
                        >
                            <div className='caption'> {character.name} </div>
                            <div className='caption bottom'>View Comics</div>
                        </div>
                    )
                }

                )
            }
        </div>
    )
}
