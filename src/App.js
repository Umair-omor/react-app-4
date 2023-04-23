import logo from './logo.svg';
import './App.css';
import Index from './routes/Index';
import { useDispatch, useSelector } from 'react-redux';
import { currentsortvalue} from './component/pages/slices/postSlice';


// const charec = [
//   {
//     name: "kazi uamir",
//     age: 25,
//   },
//   {
//     name: "Abdulla",
//     age: 20,
//   },
//   {
//     name: "Halim ali",
//     age: 27,
//   },
//   {
//     name: "Abdul Korim",
//     age: 10,
//   },
//   {
//     name: "Babul",
//     age: 13,
//   },
//   {
//     name: "Zalal",
//     age: 30,
//   },
//   {
//     name: "Mahubab",
//     age: 8,
//   },
//   {
//     name: "Yeamin",
//     age: 9,
//   },

// ];


// const num = [5,3,7,2,6,1,9]


function App() {


//   const dispatch = useDispatch();

//   const sel = useSelector((state) => state.posts.sorting_value);

//   const hi = (e) => {
//     dispatch(currentsortvalue(e))
  
//   }


// const res = charec.sort((a, b) => {
//   if(sel === "one"){
//     return a.name.localeCompare(b.name)
//   }
//   if(sel === "two"){
//     return b.name.localeCompare(a.name)
//   }
//   if(sel === "three"){
//     return a.age - b.age
//   }
//   if(sel === "four"){
//     return b.age - a.age
//   }
// });



  return (
    <div className="App">
      <Index />
      {/* <div>
        <form action="#">
          <select name="u" id="u" onChange={(e) => {hi(e.target.value)}}>
            <option value="one">A-Z</option>
            <option value="two">Z-A</option>
            <option value="three">1-2</option>
            <option value="four">2-1</option>
          </select>
        </form>
      </div> */}

      {/* <h1>Umair</h1>
      {
        res.map((okk, i) => {
          const {name, age} = okk;
          return (
            <div key={i}>
              <hr />
              <hr />
              <div>
                <h3>{name}</h3>
              </div>
              <div>
                <h3>{age}</h3>
              </div>
            </div>
          )
        })
      } */}


    </div>
  );
}

export default App;


// npm i react-router-dom
// npm i react-redux
// npm i axios
// npm i react-icons
// npm i redux
// npm i redux-thunk
// npm i @reduxjs/toolkit

