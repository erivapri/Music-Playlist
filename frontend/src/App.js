import SongList from './components/SongList';
import PlayListCreator from './components/PlayListCreator';

function App() {
    return (
        <div className="bg-gradient-to-r from-green-100 to-blue-100 min-h-screen p-8">
            {/* App Title */}
            <header className="text-center mb-10">
                <h1 className="text-5xl font-bold text-green-700 mb-4">Music Playlist App</h1>
                <p className="text-gray-600 text-lg">Create and manage your playlists with ease</p>
            </header>
            
            {/* Create Playlist */}
            <section className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">🎵 Create a Playlist</h2>
                <PlayListCreator />
            </section>
            
            {/* List of Available Songs */}
            <section className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">🎧 Available Songs</h2>
                <SongList />
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-500 mt-10">
                <p>Made with ❤️ , blood, sweat and tears by <span className="text-green-700 font-semibold">Ericka</span></p>
                <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
