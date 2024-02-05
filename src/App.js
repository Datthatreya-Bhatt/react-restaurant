

import Header from "./UI/Header";
import Summary from "./UI/Summary";
import Meals from "./Meals/Meals";

function App() {
  return (
    <div>
      <Header/>
      <Summary/>
      <div className="card">
        <Meals/>
      </div>



    </div>
  );
}

export default App;
