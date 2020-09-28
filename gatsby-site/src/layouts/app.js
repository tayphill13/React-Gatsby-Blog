import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/nav-bar';

// export default function App(props) {
//   return (
//     <div>
//       <Header />
//       {props.children}
//       <Footer />
//     </div>
//   );
// }


const App = (props) => {
  return (
    <div>
    <Header />
    <NavBar />
    {props.children}
    <Footer />
  </div>

  );
}

export default App;
