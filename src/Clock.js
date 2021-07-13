import './App.css'

function Clock(props) {
    const minutesDisplay = Math.floor(props.timer / 60)
    const secondsDisplay = props.timer % 60

    const timerClassName = props.timer === 0 ? 'clock zero' : props.timer < 300 ? 'clock low' : props.index === props.playerSelected ? 'clock playerSelected' : 'clock'

    return (
        <div id={'playerDiv' + props.index} className='playerDiv'>
            <input
                id={'playerNameInput' + props.index}
                className='playerNameInput'
                size='20'
                maxLength='20'
                type='text'
                value={props.playerName}
                onChange={(e) => props.handleChangeName(e, props.index)}
            />

            <button id={'playerBtn' + props.index} className={timerClassName} onClick={() => props.setSelectedPlayer(props.index)}>
                <div id={'playerTimer' + props.index} className='playerTimer'>
                    {minutesDisplay.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ' : ' + secondsDisplay.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                </div>

            </button>
        </div>
    );
}

export default Clock
