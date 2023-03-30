
import { useEffect, useState } from 'react'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Sign from './components/Sign/Sign';
import { addToDb, deleteShoppingCart, getPlayerSign, removeFromDb } from './utilities/fakedb';
// import { addValue } from './utilities/calculation';

function App() {

  const [data, setData] = useState([]);
  const [sign, setSign] = useState([]);
  const [ value, setValue ] = useState(0);

  useEffect(()=>{
    fetch('players.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[]);

  useEffect(()=>{

    const storedPlayer = getPlayerSign();
    const playerSign = [];

    for(const id of storedPlayer){
      const findPlayer = data.find(player=>player.id===id);
      if(findPlayer){
        playerSign.push(findPlayer);
      }
    }
    
    setSign(playerSign);
    const preValue = playerSign.map(p=> p.stats.value )
    const nowVal = preValue.reduce((a,c)=>a+c,0)
    setValue(nowVal)

  },[data])
  

  const handleSign = id =>{
    
    let newSign = [];
    const exists = sign.find(sign_id=>sign_id.id===id);
    // const budget = 40000000000;

    if(!exists){
      const player = data.find(player_id => player_id.id==id )
      newSign = [...sign, player];

      addToDb(id)

      // if(value<=budget){
        addValue(player)
        setSign(newSign);
        toast.success(`${player.name} Sign!`);
      // }
      // else{
      //   toast.error(`You have last ${budget-value} budget`) 
      // }
    }
    else{
      toast.error(`${exists.name} Already Sign!`)
    }
  }

  const removeSign = id =>{

    const removedPlayer=sign.find(p_id=>p_id.id===id);
    setValue(value-removedPlayer.stats.value);
    
    const remainPlayers = sign.filter(sign_id=>sign_id.id!==id)
    setSign(remainPlayers);

    removeFromDb(id);

    toast.info(`Removed ${removedPlayer.name}`);
  
  }
  
  const removeAll = () =>{
    setSign([]);
    setValue(0);
    deleteShoppingCart();
  }

  const addValue = player =>{
    const playerValue = player.stats.value;
    setValue(value + playerValue);
  }

  // console.log(value)


  return (
    <div className="App">
      
      <header className='sticky top-0 bg-black'>
      <Header />
      </header>

      <main className='min-h-[38rem] main-container px-10 grid md:grid-cols-5 grid-cols-1'>
        {/* for show players */}
        <section className='player-container col-span-4'>
          <Players data={data} handleSign={handleSign} />
        </section>
        {/*For show your players  */}
        <section className='player-sign col-span-1'>
        <Sign sign={sign} removeSign={removeSign} removeAll={removeAll} value={value} />
        </section>
      </main>

      <Footer />
      <ToastContainer 
      position="top-center"
      autoClose={1000}
      theme="colored"
      />
    </div>
  )
}

export default App;
