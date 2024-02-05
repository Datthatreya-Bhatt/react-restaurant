

import Header from "./UI/Header";
import Summary from "./UI/Summary";
import Meals from "./Meals/Meals";

function App() {
  return (
    <div className="container">
      <div className="row">
          <Header/>
          <Summary/>
          <div className="card col-mb-3" style={{width: '250rem'}}>
            <Meals/>
          </div>



      </div>
    </div>
    
  );
}

export default App;
