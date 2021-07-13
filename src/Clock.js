import './App.css'

function Clock(props) {
    const minutesDisplay = Math.floor(props.timer / 60)
    const secondsDisplay = props.timer % 60

    return (
        <div id={'PlayerDiv' + props.index} className='playerDiv'>
            <input
                id={'playerName' + props.index}
                className='playerName'
                size='20'
                maxLength='20'
                type='text'
                value={props.playerName}
                onChange={(e) => props.handleChangeName(e, props.index)}
            />

            <button id={'player' + props.index} className={props.timer === 0 ? 'clock zero' : props.index === props.playerSelected ? 'clock playerSelected' : 'clock'} onClick={() => props.setSelectedPlayer(props.index)}>
                <div id={'timer' + props.index} className='timer'>
                    {minutesDisplay.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ' : ' + secondsDisplay.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                </div>

            </button>
        </div>
    );
}

export default Clock
