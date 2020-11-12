import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import tcb from "@cloudbase/js-sdk";

function App() {
  let url =
    "https://test-cloudbase-4g2syy34ec7a6083.service.tcloudbase.com/login";

  const data = {
    username: "huiui1",
    password: "123456",
  };


  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ a: 3, b: 4 }),
  // };

  const clickHandle = () => {
    // console.log("????");
    axios
      .post(url,data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        //console.log(err);
      });

    // const app = tcb.init({
    //   env: "test-cloudbase-4g2syy34ec7a6083",
    // });
    // app
    //   .callFunction({
    //     // 云函数名称
    //     name: "hello",
    //     // 传给云函数的参数
    //     data: {
    //       a: 1,
    //       b:2,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   });
    // fetch(url, requestOptions)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <div className="App">
      <p>for test only</p>
      <button onClick={clickHandle}>click</button>
    </div>
  );
}

export default App;
