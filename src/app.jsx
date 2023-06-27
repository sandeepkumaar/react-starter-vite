import { Outlet } from 'react-router-dom';
const mode = import.meta.env.MODE;

const context = {
  name: "default",
  age: 0
};

export default function App() {
  return (
  <div className='app-container'>
    <header className='app__header header'>
      <div className='header__main'>
        <h4>React Starter: running in "{mode}"</h4>
      </div>
    </header>
    <nav className='app__nav'>
      <a href='/forms'>forms</a>
    </nav>
    <main className='app__main'>
      <Outlet context={context}/>
    </main>

  </div>
  
  )
}



