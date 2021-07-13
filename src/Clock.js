import './App.css'

function Clock(props) {
    const minutesDisplayClock = Math.floor(props.clock / 60)
    const secondsDisplayClock = props.clock % 60

    const minutesDisplayTimer = Math.floor(props.timer / 60)
    const secondsDisplayTimer = props.timer % 60

    const ClassNameClock = props.clock === 0 ? 'clock zero' : props.clock < 300 ? 'clock low' : props.index === props.playerSelected ? 'clock playerSelected' : 'clock'
    const ClassNameTimer = props.timer < 10 ? 'timerDiv zero' : props.timer < 30 ? 'timerDiv low' : props.index === props.playerSelected ? 'timerDiv playerSelected' : 'timerDiv'

    return (
        <div id={'clockDiv' + props.index} className='clockDiv'>
            <input
                id={'playerNameInput' + props.index}
                className='playerNameInput'
                size='20'
                maxLength='20'
                type='text'
                value={props.playerName}
                onChange={(e) => props.handleChangeName(e, props.index)}
            />

            <button id={'playerBtn' + props.index} className={ClassNameClock} onClick={() => props.setSelectedPlayer(props.index)}>
                <div id={'playerClock' + props.index} className='playerClock'>
                    {minutesDisplayClock.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ' : ' + secondsDisplayClock.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                </div>
            </button>

            <div id={'timerDiv' + props.index} className={ClassNameTimer}>
                <div id={'playerTimer' + props.index} className='playerTimer'>
                    {minutesDisplayTimer.toLocaleString('en-US', { minimumIntegerDigits: 1, useGrouping: false }) + ' : ' + secondsDisplayTimer.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                </div>
            </div>
        </div>
    );
}

export default Clock
