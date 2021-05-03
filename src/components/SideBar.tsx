import "../styles/sidebar.scss"

import { Button } from '../components/Button'


interface Genres {
  id:number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'  
  title: string;
}

interface BarProps {
  setSelectedGenreId: Function
  selectedGenreId: Number
  genres: Array<Genres>
}

export function SideBar({ setSelectedGenreId, selectedGenreId, genres } : BarProps) {
 
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}