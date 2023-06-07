import './App.css';
// import UseRefExample1 from './components/UseRefExample1';
// import UseRefPreviousState from './components/UseRefPreviousState';
// import UseRefMemoryLeak from './components/UseRefMemoryLeak';
// import UseMemoExample from './components/UseMemoExample';
// import UseCallbackExample from './components/UseCallbackExample';
// import CustomUseFetchHookExample from './components/CustomUseFetchHookExample';
import CustomUseLocalStorageHookExample from './components/CustomUseLocalStorageHookExample';



function App() {
  return (
    <div className="container mt-5">
      {/* <UseRefExample1></UseRefExample1> */}
      {/* <UseRefPreviousState></UseRefPreviousState> */}
      {/* <UseRefMemoryLeak></UseRefMemoryLeak> */}
      {/* <UseMemoExample></UseMemoExample> */}
      {/* <UseCallbackExample></UseCallbackExample> */}
      {/* <CustomUseFetchHookExample></CustomUseFetchHookExample> */}
      <CustomUseLocalStorageHookExample></CustomUseLocalStorageHookExample>
    </div>
  );
}

export default App;
