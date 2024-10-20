// const loginStatusBtn = (status) => {
//   if (status) {
//     return <button>Logout</button>;
//   } else {
//     return <button>Login</button>;
//   }
// };

import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

// import Hero from "./component/Hero";

const App = () => {
  // const city = ["Dhaka", "new York", "london", "japan"];
  // return (
  //   <div>
  //     <ul>
  //       {city.map((item, i) => {
  //         return <li key={i}>{item}</li>;
  //       })}
  //     </ul>
  //   </div>
  // );
  // const status = false;
  // if (status) {
  //   return (
  //     <div>
  //       <h1>Login Status</h1>
  //       <button>Logout</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>Login Status</h1>
  //       <button>Login</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <h1>Login status</h1>
  //     {loginStatusBtn(true)}
  //   </div>
  // );
  // const status = true;
  // return (
  //   <div>
  //     <h1>Login status</h1>
  //     {status && <button>logout btn</button>}
  //   </div>
  // );
  // const status = true;
  // return (
  //   <div>
  //     <h1>Login status</h1>
  //     {/* have to return something always */}
  //     {(() => {
  //       if (status) {
  //         return <button>logout</button>;
  //       } else {
  //         return <button>login</button>;
  //       }
  //     })()}
  //   </div>
  // );
  // props -> data goes from parent to child not vice varsa
  // return (
  //   <div>
  //     <Hero title="learn react" des="how to pass props" />
  //   </div>
  // );
  // const itemObj = {
  //   name: "rana",
  //   age: 36,
  //   gender: "male",
  // };
  // return (
  //   <div>
  //     <Hero item={itemObj} />
  //   </div>
  // );

  // const BtnClick = () => {
  //   alert("Say hello");
  // };
  // return (
  //   <div>
  //     <Hero tiktiki={BtnClick} />
  //   </div>
  // );

  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         alert("Say hello");
  //       }}
  //     >
  //       click
  //     </button>
  //   </div>
  // );

  // const postFormData = (event) => {
  //   event.preventDefault();

  //   alert("form data submitted");
  // };

  // return (
  //   <div>
  //     <form action="" onSubmit={postFormData}>
  //       <input type="text" placeholder="name" />
  //       <button>click</button>
  //     </form>
  //   </div>
  // );

  // let myHeadline = useRef();

  // const change = () => {
  //   // myHeadline.current.innerText = "Hello user";
  //   myHeadline.current.innerHTML = "<ul><li>A</li><li>B</li></ul>";
  // };

  // return (
  //   <div>
  //     <h1 ref={myHeadline}></h1>

  //     <button onClick={change}>test</button>
  //   </div>
  // );

  // let myHeadline = useRef();

  // const change = () => {
  //   myHeadline.innerHTML = "<ul><li>A</li><li>B</li></ul>";
  // };

  // return (
  //   <div>
  //     <h1 ref={(h1) => (myHeadline = h1)}></h1>

  //     <button onClick={change}>test</button>
  //   </div>
  // );

  // let myImg = useRef();

  // const change = () => {
  //   myImg.current.src = "https://placehold.co/600x400?text=Hello+World";
  //   myImg.current.setAttribute("height", "300px");
  //   myImg.current.setAttribute("width", "200px");
  // };

  // return (
  //   <div>
  //     <img ref={myImg} src="https://placehold.co/600x400" alt="" />

  //     <button onClick={change}>test</button>
  //   </div>
  // );

  // let firstName = useRef();
  // let lastName = useRef();

  // const change = () => {
  //   let fName = firstName.current.value;
  //   let lName = lastName.current.value;

  //   alert(fName + " " + lName);
  // };

  // return (
  //   <div>
  //     <input ref={firstName} type="text" placeholder="first name" /> <br />
  //     <input ref={lastName} type="text" placeholder="last name" /> <br />
  //     <button onClick={change}>test</button>
  //   </div>
  // );

  // let firstName,
  //   lastName = useRef();

  // const change = () => {
  //   let fName = firstName.value;
  //   let lName = lastName.value;

  //   alert(fName + " " + lName);
  // };

  // return (
  //   <div>
  //     <input
  //       ref={(a) => (firstName = a)}
  //       type="text"
  //       placeholder="first name"
  //     />{" "}
  //     <br />
  //     <input
  //       ref={(a) => (lastName = a)}
  //       type="text"
  //       placeholder="last name"
  //     />{" "}
  //     <br />
  //     <button onClick={change}>test</button>
  //   </div>
  // );

  // let myHeadline = useRef();

  // const change = () => {
  //   myHeadline.current.classList.remove("text-success");
  //   myHeadline.current.classList.add("text-danger");
  // };

  // return (
  //   <div>
  //     <h1 className="text-success" ref={myHeadline}>
  //       This is headline
  //     </h1>
  //     <button onClick={change}>test</button>
  //   </div>
  // );

  // let number = useRef(0);

  // const change = () => {
  //   number.current++;
  //   console.log(number.current);
  // };

  // return (
  //   <div>
  //     <button onClick={change}>test</button>
  //   </div>
  // );

  // let apiData = useRef(null);
  // let pT = useRef();

  // const fetchData = async () => {
  //   const response = await fetch("https://dummyjson.com/products/");
  //   apiData.current = await response.json();
  // };

  // const showData = () => {
  //   pT.current.innerText = JSON.stringify(apiData.current);
  // };

  // return (
  //   <div>
  //     <p ref={pT}></p>
  //     <button onClick={fetchData}>Call API</button>
  //     <button onClick={showData}>Show data</button>
  //   </div>
  // );

  // let [number, setNumber] = useState(0);

  // return (
  //   <div>
  //     <h1>Number: {number}</h1>
  //     <button onClick={() => setNumber(number + 1)}>Click</button>
  //   </div>
  // );

  // let [number, setNumber] = useState(0);

  // const changeNumber = () => {
  //   setNumber(number - 1);
  // };

  // return (
  //   <div>
  //     <h1>Number: {number}</h1>
  //     <button onClick={changeNumber}>Click</button>
  //   </div>
  // );

  // let [myObj, setMyObj] = useState({
  //   key1: "value1",
  //   key2: "value2",
  //   key3: "value3",
  // });

  // const change = () => {
  //   setMyObj({
  //     key1: "new value1",
  //     key2: "new value2",
  //     key3: "new value3",
  //   });
  // };

  // return (
  //   <div>
  //     <h1>{myObj.key2}</h1>
  //     <button onClick={change}>change</button>
  //   </div>
  // );

  // let [myObj, setMyObj] = useState({
  //   key1: "value1",
  //   key2: "value2",
  //   key3: "value3",
  // });

  // const change = () => {
  //   setMyObj((prevObj) => ({
  //     ...prevObj,
  //     key1: "new value for key1",
  //   }));
  // };

  // return (
  //   <div>
  //     <h1>{myObj.key1}</h1>
  //     <button onClick={change}>change</button>
  //   </div>
  // );

  // const [list, setList] = useState([]);
  // const [item, setItem] = useState("");

  // const addToList = () => {
  //   list.push(item);
  //   setList([...list]);
  // };

  // return (
  //   <div>
  //     <h1>{list.length}</h1>
  //     <p>{item}</p> <br />
  //     <input
  //       onChange={(e) => setItem(e.target.value)}
  //       type="text"
  //       placeholder="item"
  //     />
  //     <button onClick={addToList}>add</button>
  //   </div>
  // );

  // todo examples using useState()

  // const [list, setList] = useState([]);
  // const [item, setItem] = useState("");

  // const addToList = () => {
  //   list.push(item);
  //   setList([...list]);
  // };

  // const removeItem = (index) => {
  //   // alert(index);
  //   list.splice(index, 1);
  //   setList([...list]);
  // };

  // return (
  //   <div>
  //     <table>
  //       <tbody>
  //         {list.length !== 0 ? (
  //           list.map((element, index) => {
  //             return (
  //               <tr>
  //                 <td>{element}</td>
  //                 <td>
  //                   <button
  //                     onClick={() => {
  //                       removeItem(index);
  //                     }}
  //                   >
  //                     Remove
  //                   </button>
  //                 </td>
  //               </tr>
  //             );
  //           })
  //         ) : (
  //           <tr></tr>
  //         )}
  //       </tbody>
  //     </table>
  //     <h1>{list.length}</h1>
  //     <p>{item}</p> <br />
  //     <input
  //       onChange={(e) => setItem(e.target.value)}
  //       type="text"
  //       placeholder="item"
  //     />
  //     <button onClick={addToList}>add</button>
  //   </div>
  // );

  //----------------------------------------------------------------
  // form related methods using useState()

  // let [formObj, setFormObj] = useState({
  //   fName: "",
  //   lName: "",
  //   city: "",
  //   gender: "",
  // });

  // const inputOnChange = (property, value) => {
  //   setFormObj((prevObj) => ({
  //     ...prevObj,
  //     [property]: value,
  //   }));
  // };

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(formObj);
  //   alert(JSON.stringify(formObj));
  // };

  // return (
  //   <div className="container">
  //     <form onSubmit={formSubmit} action="">
  //       <input
  //         onChange={(e) => {
  //           inputOnChange("fName", e.target.value);
  //         }}
  //         value={formObj.fName}
  //         type="text"
  //         placeholder="first name"
  //       />{" "}
  //       <br />
  //       <input
  //         onChange={(e) => {
  //           inputOnChange("lName", e.target.value);
  //         }}
  //         value={formObj.lName}
  //         type="text"
  //         placeholder="last name"
  //       />{" "}
  //       <br />
  //       <select
  //         onChange={(e) => {
  //           inputOnChange("city", e.target.value);
  //         }}
  //         value={formObj.city}
  //         name=""
  //         id=""
  //       >
  //         <option value="">Choose city</option>
  //         <option value="dhaka">dhaka</option>
  //         <option value="bogura">bogura</option>
  //       </select>
  //       <br />
  //       <input
  //         onChange={(e) => {
  //           inputOnChange("gender", "Male");
  //         }}
  //         checked={formObj.gender === "Male"}
  //         type="radio"
  //         name="gender"
  //       />
  //       Male
  //       <input
  //         onChange={(e) => {
  //           inputOnChange("gender", "Female");
  //         }}
  //         checked={formObj.gender === "Female"}
  //         type="radio"
  //         name="gender"
  //       />
  //       Female
  //       <br />
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );

  // useEffect(() => {
  //   console.log("hello");
  // }, [4]);

  // return <div></div>;

  // using promise methods
  // let [data, setData] = useState();

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/1")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);

  // return <div>{JSON.stringify(data)}</div>;

  // let [data, setData] = useState();

  // useEffect(() => {
  //   // immeidately invokable function (iif)
  //   (async () => {
  //     let response = await fetch("https://dummyjson.com/products/2");
  //     let json = await response.json();
  //     setData(json);
  //   })();
  // }, []);

  // return <div>{JSON.stringify(data)}</div>;

  // return (
  //   <div>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/product" element={<ProductPage />} />
  //         <Route path="/profile" element={<ProfilePage />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );

  // hashrouter ar sathe server ar kno relation nei ata just brower ar sathe related and HTML 5 history api hashrouter use kore na but browser router kore
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id/:name" element={<ProductPage />} />
          <Route
            path="/profile/:facebookId/:youtubeId"
            element={<ProfilePage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
