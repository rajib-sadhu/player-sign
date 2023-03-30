
import { useEffect, useState } from 'react'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Sign from './components/Sign/Sign';

function App() {

  const [data, setData] = useState([]);
  const [sign, setSign] = useState([]);

  useEffect(()=>{
    fetch('players.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[]);

  const handleSign = id =>{
    
    let newSign = [];
    const exists = sign.find(sign_id=>sign_id.id===id);

    if(!exists){
      const player = data.find(player_id => player_id.id==id )
      newSign = [...sign, player];
      setSign(newSign);
  
      toast.success(`${player.name} Sign!`)
    }
    else{
      toast.error(`${exists.name} Already Sign!`)
    }
  }

  const removeSign = id =>{

    const remainPlayers = sign.filter(sign_id=>sign_id.id!==id)
    setSign(remainPlayers);
    const removedPlayer=sign.find(p_id=>p_id.id===id);
    toast.warn(`Removed ${removedPlayer.name}`)
  }
  
  const removeAll = () =>{
    setSign([]);
  }


  return (
    <div className="App">
      <Header />

      <main className='min-h-[38rem] main-container px-10 grid md:grid-cols-5 grid-cols-1'>
        {/* for show players */}
        <section className='player-container col-span-4'>
          <Players data={data} handleSign={handleSign} />
        </section>
        {/*For show your players  */}
        <section className='player-sign col-span-1'>
        <Sign sign={sign} removeSign={removeSign} removeAll={removeAll} />
        </section>
      </main>

      <Footer />
      <ToastContainer 
      position="top-center"
      autoClose={2000}
      theme="colored"
      />
    </div>
  )
}

export default App;
