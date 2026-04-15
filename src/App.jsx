import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {
  const bottlePromise = fetch("/water-bottles.json")
    .then(res => res.json())


  return (
    <>
      <h1>Water Bottle</h1>
      <Suspense fallback={<p>Bottles loading...</p>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
