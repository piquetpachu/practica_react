import { useState } from "react";

interface Prop {
    formatUserName:(userName:string)=>string;
    userName:string;
    name:string;
    initialisFollowing:boolean;
}

export function TarjetaTwiter({formatUserName ,userName, name, initialisFollowing}:Prop) {

    const [isFolowing, setIsFolowing] = useState(initialisFollowing)
    const Text = isFolowing ? 'siguiendo' : 'seguir'
    const buttonClasName = isFolowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const haceClick = () => setIsFolowing(!isFolowing)
    return (
      <>
          <article className='tw-followCard'>
            <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="avatar del usuario" />
            <div>
              <strong className='tw-followCard-info '>{name}</strong>
              <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
              <aside>
                <button className={buttonClasName} onClick={haceClick}>
                  <span className="tw-followCard-text">{Text}</span>
                  <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
                
              </aside>
            </header>
          </article>
          
        </>
    )
        
}