import { Route, Routes } from "react-router-dom";
import Landing from './App.jsx'
import PushUps from './challenge/challenge1.jsx'

export default function MAIN2() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path = "/challenge1" element = {<PushUps />} />
      </Routes>
  );
}
