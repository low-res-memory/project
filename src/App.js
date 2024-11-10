import logo from './logo.svg';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import RotatingCube from './RotatingCube';
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas>
        <RotatingCube />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
      </Canvas>
    </div>
  );
  
}

export default App;
