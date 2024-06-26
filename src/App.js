import './App.css';
import PageContents from './components/PageContents';


function App() {
  return (
    <div className='backdrop-brightness-150 blur-sg no-scrollbar h-screen flex justify-center items-center drop-shadow-xl'>
      <div className='border border-gray-500 rounded-lg p-1 m-5 max-h-full overflow-hidden drop-shadow-xl'>
        <PageContents/>
      </div>
    </div>
  );
  
}

export default App;

