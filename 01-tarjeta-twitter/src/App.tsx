import './App.css'
import { TarjetaTwiter } from './TarjetaSeguirTW'

function App() {
  const formatUserName = (username:string) => `@${username}`
  return (
  <section className='App'>
  <TarjetaTwiter 
    formatUserName={formatUserName} initialisFollowing={false}
    userName='nacho'
    name='un tal nacho' />
  <TarjetaTwiter initialisFollowing
    formatUserName={formatUserName} 
    userName='pepe' 
    name='un tal pepe' />
  <TarjetaTwiter 
    formatUserName={formatUserName} 
    initialisFollowing userName='alcachofa' 
    name='ALCACHOFA' />
  <TarjetaTwiter 
    formatUserName={formatUserName} 
    initialisFollowing userName='pachuu' 
    name='pachu' />
  <TarjetaTwiter 
    formatUserName={formatUserName} 
    initialisFollowing={false} 
    userName='Musolini' 
    name='Musolini' />
  </section>
  )
}

export default App

