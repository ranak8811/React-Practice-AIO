const Hero = (props) => {
  //   return (
  //     <div>
  //       <h1>{props.title}</h1>
  //       <p>{props.des}</p>
  //     </div>
  //   );

  // return (
  //   <div>
  //     <ul>
  //       <li>Name: {props.item["name"]}</li>
  //       <li>Age: {props.item["age"]}</li>
  //       <li>Gender: {props.item["gender"]}</li>
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      <button onClick={props.tiktiki}>click</button>
    </div>
  );
};

export default Hero;
