import './App.css'

function Clock(props) {
    const minutesDisplayClock = Math.floor(props.clock / 60)
    const secondsDisplayClock = props.clock % 60

    const minutesDisplayTimer = Math.floor(props.timer / 60)
    const secondsDisplayTimer = props.timer % 60

    const ClassNameClock = props.clock === 0 ? 'clock zero' : props.clock < 300 ? 'clock low' : props.index === props.playerSelected ? 'clock playerSelected' : 'clock'
    const ClassNameTimer = props.timer === 0 ? 'timerDiv zero' : props.timer < 10 ? 'timerDiv critical' : props.timer < 30 ? 'timerDiv low' : props.index === props.playerSelected ? 'timerDiv playerSelected' : 'timerDiv'
    const ClassNameExt = props.extensions === 0 ? 'extDiv zero' : props.extensions < 3 ? 'extDiv low' : props.index === props.playerSelected ? 'extDiv playerSelected' : 'extDiv'

    const rotateClock = props.rotate && ( props.playerQty === 4 && props.index < 2 || props.playerQty === 2 && (props.index % 2) === 0 )

    return (
        <div id={'clockDiv' + props.index} className={rotateClock ? 'clockDiv rotate' : 'clockDiv'}>
            <div id='displayClock' className={props.playerName === '' && props.started ? 'hideClock' : 'displayClock'}>
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

                <button id={'extDiv' + props.index} className={ClassNameExt} onClick={() => props.useExtension(props.index)}>
                    <div id={'playerExt' + props.index} className='playerExt'>
                        {'Extensions: ' + props.extensions}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Clock
