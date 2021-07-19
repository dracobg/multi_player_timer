import './App.css'
import interruptIcon from './media/interruptIcon.png'

function Clock(props) {
    const minutesDisplayClock = Math.floor(props.clock / 60)
    const secondsDisplayClock = props.clock % 60

    const minutesDisplayTimer = Math.floor(props.timer / 60)
    const secondsDisplayTimer = props.timer % 60

    const ClassNameClock = props.clock === 0 ? 'clock zero' : props.clock < 300 ? 'clock low' : props.index === props.playerSelected ? 'clock playerSelected' : 'clock'
    const ClassNameTimer = props.timer === 0 ? 'timerDiv zero' : props.timer < 10 ? 'timerDiv critical' : props.timer < 30 ? 'timerDiv low' : props.index === props.playerSelected ? 'timerDiv playerSelected' : 'timerDiv'
    const ClassNameExt = props.extensions === 0 ? 'extDiv zero' : props.extensions < 3 ? 'extDiv low' : props.index === props.playerSelected ? 'extDiv playerSelected' : 'extDiv'

    const rotateClock = (props.rotate && props.playerQty === 4 && props.index < 2) || (props.rotate && props.playerQty === 2 && (props.index % 2) === 0)

    const interruptIconClassName = props.index === 1 || props.index === 2 ? 'interruptIcon right' : 'interruptIcon left'
    
    // const handleInterrupt = () => {
    //     props.handleInterrupt(props.index)
    // }

    return (
        <div id={'clockDiv' + props.index} className={rotateClock ? 'clockDiv rotate' : 'clockDiv'}>
            <div id={'displayClock' + props.index} className={props.playerName === '' ? 'hideClock' : 'displayClock'}>
                <div id={'playerNameTitle' + props.index} className='playerNameTitle'>
                    {props.playerName}
                </div>
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

                <div>
                    {/* <img id={'interruptIcon' + props.index} className={interruptIconClassName} alt='Interrupt' src={interruptIcon} onClick={handleInterrupt} /> */}
                    <img id={'interruptIcon' + props.index} className={interruptIconClassName} alt='Interrupt' src={interruptIcon} />
                </div>
            </div>
        </div>
    )
}

export default Clock
