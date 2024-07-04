import './App.css';
// import Mainblog from './Components/Blogs/Mainblog.jsx';
// import LoginForm from "./Components/LoginDetails/LoginForm.jsx"

// import Incremental from "./Components/Practice/Incremental.jsx"

// import TourPlan from './Components/TourPlan/TourPlan.jsx';

// import MainFile from './Components/UseEffect/MainFile.js';

// import MainFile from './Components/Slider/MainFile';
// import MainGif from './Components/Gif/MainGif.jsx';
// import MainRedux from './Components/Redux/MainRedux.jsx';
import MainStore from './Components/Store/MainStore.jsx';
// import MainRoute from './Components/Routes/MainRoute.jsx';

function App() {
  return (

    //Without Route rendering
    // <div className="App">
    //   {/* <Incremental /> */}
    //   {/* <TourPlan /> */}

    //   {/* UseEffect */}
    //   {/* <MainFile></MainFile> */}

    //   {/* Slider */}
    //   {/* <MainFile></MainFile> */}
      
    //   <LoginForm />
    // </div>

    // With Route Rendering
    // <div>
    //   <MainRoute />
    // </div>
    
    <div>
      {/* <MainGif /> */}
      {/* <Mainblog /> */}
      {/* <MainRedux /> */}
      <MainStore />
    </div>
       
  );
}
export default App;