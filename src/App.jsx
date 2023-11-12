import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [mobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <div className={mobile ? "mobile" : "desktop"}></div>
    </>
  );
}

export default App;
