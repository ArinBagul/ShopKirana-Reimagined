import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

function loader() {
  return <h1>Loading 3D Model</h1>;
}

function ThreeD() {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => {
    setIsLoaded(true);
  };
  return (
    <>
      {!isLoaded && <loader />}
      <Spline
        scene="https://prod.spline.design/bx921hJfdkR0JkIL/scene.splinecode"
        onLoad={handleLoad}
      />
    </>
  );
}

export default ThreeD;

// import React, { useState } from "react";
// import Spline from "@splinetool/react-spline";
// import Loader from "./Loader"; // Your custom loader component

// function ThreeD() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   const handleLoad = () => {
//     setIsLoaded(true);
//   };

//   return (
//     <>
//       {!isLoaded && <Loader />} {/* Show loader until Spline is loaded */}
//       <div style={{ display: isLoaded ? "block" : "none" }}>
//         <Spline
//           scene="https://prod.spline.design/bx921hJfdkR0JkIL/scene.splinecode"
//           onLoad={handleLoad}
//         />
//       </div>
//     </>
//   );
// }

// export default ThreeD;
