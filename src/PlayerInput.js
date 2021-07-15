import './App.css'

function PlayerInput(props) {
  return (
    <div id={'playerInput' + props.index} className='playerInput'>
      <label id='playerNameLabel' className='settingsLabel'>{'Player ' + props.playerNumber + ':'}</label>
      <input
        id={'playerNameInput' + props.index}
        className='playerNameInput'
        size='20'
        maxLength='20'
        type='text'
        value={props.playerName}
        onChange={(e) => props.handleChangeName(e, props.index)}  
      />
    </div>
  )
}

export default PlayerInput
