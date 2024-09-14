import MessageList from './components/MessageList';

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search..."></input>
    </div>
  )
}

function App() {
  return (
      <div className='container'>
        <Search />
        <MessageList/>
      </div>
  );
}

export default App;
