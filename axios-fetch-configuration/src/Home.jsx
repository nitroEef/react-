import Feed from './Feed';
// import { useContext} from 'react'
// import DataContext from "./context/DataContext"

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {isLoading && <p className='statusMsg'>loading posts...</p>}
            {!isLoading && fetchError && <p className='statusMsg' style={{color:"red"}}> {fetchError}</p>}
            {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResult} /> : (<p className='statusMsg'>no posts to display</p>))}
           
                </main>
            )
        }
        
    
export default Home