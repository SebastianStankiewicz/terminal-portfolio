import './App.css';
import NameLogo from './components/NameLogo';
import PageContents from './components/PageContents';
import RightSide from './components/RightSide';
import Terminal from './components/Terminal';

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

