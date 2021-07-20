import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from './App';
import { expect } from 'chai'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

let wrapper =

  describe('Given the App component', () => {
    describe('When the component renders', () => {
      it('Then renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
      })
    })

    describe('When the component successfully renders', () => {
      beforeEach(() => {
        wrapper = mount(<App />)
      })

      it('Then it displays the Settings Component', () => {
        expect(wrapper.find('Settings')).to.have.length(1)
        expect(wrapper.find('Clock')).to.have.length(0)
      })

      it('Then it displays buttons to select the number of players - 2 or 4', () => {
        expect(wrapper.find('#selectPlayerNumber')).to.have.length(1)
        expect(wrapper.find('#noPlayersLabel')).to.have.length(1)
        expect(wrapper.find('#noPlayersLabel').prop('className')).to.equal('settingsLabel')
        expect(wrapper.find('#noPlayersLabel').text()).to.equal('Players:')
        expect(wrapper.find('#selectPlayers2')).to.have.length(1)
        expect(wrapper.find('#selectPlayers2').prop('className')).to.equal('selectPlayers')
        expect(wrapper.find('#selectPlayers2').text()).to.equal('2')
        expect(wrapper.find('#selectPlayers2').prop('onClick').name).to.equal('bound handleSelectPlayerNumber')
        expect(wrapper.find('#selectPlayers4')).to.have.length(1)
        expect(wrapper.find('#selectPlayers4').prop('className')).to.equal('selectPlayers selected')
        expect(wrapper.find('#selectPlayers4').text()).to.equal('4')
        expect(wrapper.find('#selectPlayers4').prop('onClick').name).to.equal('bound handleSelectPlayerNumber')
      })

      it('Then selecting the number of Players will highlight the relevant button and set the number of players', () => {
        expect(wrapper.find('App').state().playerQty).to.equal(4)
        expect(wrapper.find('#selectPlayers2').prop('className')).to.equal('selectPlayers')
        expect(wrapper.find('#selectPlayers4').prop('className')).to.equal('selectPlayers selected')

        wrapper.find('#selectPlayers2').simulate('click')

        expect(wrapper.find('App').state().playerQty).to.equal(2)
        expect(wrapper.find('#selectPlayers2').prop('className')).to.equal('selectPlayers selected')
        expect(wrapper.find('#selectPlayers4').prop('className')).to.equal('selectPlayers')

        wrapper.find('#selectPlayers4').simulate('click')

        expect(wrapper.find('App').state().playerQty).to.equal(4)
        expect(wrapper.find('#selectPlayers2').prop('className')).to.equal('selectPlayers')
        expect(wrapper.find('#selectPlayers4').prop('className')).to.equal('selectPlayers selected')
      })

      it('Then it displays the inputs for player names', () => {
        expect(wrapper.find('#playerNameInput0')).to.have.length(1)
        expect(wrapper.find('#playerNameInput0').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput0').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput0').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput0').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('Player1')
        expect(wrapper.find('#playerNameInput0').prop('onChange')).to.exist

        expect(wrapper.find('#playerNameInput1')).to.have.length(1)
        expect(wrapper.find('#playerNameInput1').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput1').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput1').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput1').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('Player2')
        expect(wrapper.find('#playerNameInput1').prop('onChange')).to.exist

        expect(wrapper.find('#playerNameInput2')).to.have.length(1)
        expect(wrapper.find('#playerNameInput2').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput2').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput2').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput2').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('Player4')
        expect(wrapper.find('#playerNameInput2').prop('onChange')).to.exist

        expect(wrapper.find('#playerNameInput3')).to.have.length(1)
        expect(wrapper.find('#playerNameInput3').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput3').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput3').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput3').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player3')
        expect(wrapper.find('#playerNameInput3').prop('onChange')).to.exist
      })

      it('Then it displays the input to select the time per player', () => {
        expect(wrapper.find('#setPlayerMins')).to.have.length(1)
        expect(wrapper.find('#noMinsLabel')).to.have.length(1)
        expect(wrapper.find('#noMinsLabel').prop('className')).to.equal('settingsLabel')
        expect(wrapper.find('#noMinsLabel').text()).to.equal('Player Mins:')
        expect(wrapper.find('#noMinsInput')).to.have.length(1)
        expect(wrapper.find('#noMinsInput').prop('className')).to.equal('settingsInput')
        expect(wrapper.find('#noMinsInput').prop('size')).to.equal('20')
        expect(wrapper.find('#noMinsInput').prop('maxLength')).to.equal('2')
        expect(wrapper.find('#noMinsInput').prop('type')).to.equal('text')
        expect(wrapper.find('#noMinsInput').prop('value')).to.equal(30)
        expect(wrapper.find('#noMinsInput').prop('onChange').name).to.equal('bound handleChangeMinutes')
      })

      it('Then it displays the input to select the time per turn', () => {
        expect(wrapper.find('#setPlayerMins')).to.have.length(1)
        expect(wrapper.find('#noMinsLabel')).to.have.length(1)
        expect(wrapper.find('#noMinsLabel').prop('className')).to.equal('settingsLabel')
        expect(wrapper.find('#noMinsLabel').text()).to.equal('Player Mins:')
        expect(wrapper.find('#noMinsInput')).to.have.length(1)
        expect(wrapper.find('#noMinsInput').prop('className')).to.equal('settingsInput')
        expect(wrapper.find('#noMinsInput').prop('size')).to.equal('20')
        expect(wrapper.find('#noMinsInput').prop('maxLength')).to.equal('2')
        expect(wrapper.find('#noMinsInput').prop('type')).to.equal('text')
        expect(wrapper.find('#noMinsInput').prop('value')).to.equal(30)
        expect(wrapper.find('#noMinsInput').prop('onChange').name).to.equal('bound handleChangeMinutes')
      })
    })

    describe('When updating the inputs on the settings screen', () => {
      beforeEach(() => {
        wrapper = mount(<App />)
      })

      it('Then changing the time per player to an integer updates the screen and state', () => {
        const goodEvent = { target: { value: 15 } }

        expect(wrapper.find('App').state().numberMinutes).to.equal(30)
        expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 1800, 1800])

        expect(wrapper.find('#noMinsInput').prop('value')).to.equal(30)

        wrapper.find('#noMinsInput').simulate('change', goodEvent)

        expect(wrapper.find('App').state().numberMinutes).to.equal(15)
        expect(wrapper.find('App').state().clocks).to.eql([900, 900, 900, 900])

        expect(wrapper.find('#noMinsInput').prop('value')).to.equal(15)
      })

      it('Then trying to change the time per player to a non integer keeps the existing values', () => {
        const badEvent = { target: { value: 'ab' } }

        expect(wrapper.find('App').state().numberMinutes).to.equal(30)
        expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 1800, 1800])

        expect(wrapper.find('#noMinsInput').prop('value')).to.equal(30)

        wrapper.find('#noMinsInput').simulate('change', badEvent)

        expect(wrapper.find('App').state().numberMinutes).to.equal(30)
        expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 1800, 1800])

        expect(wrapper.find('#noMinsInput').prop('value')).to.equal(30)
      })

      it('Then changing the time per turn to an integer updates the screen and state', () => {
        const goodEvent = { target: { value: 3 } }

        expect(wrapper.find('App').state().timerMinutes).to.equal(2)
        expect(wrapper.find('App').state().timers).to.eql([120, 120, 120, 120])

        expect(wrapper.find('#timerMinsInput').prop('value')).to.equal(2)

        wrapper.find('#timerMinsInput').simulate('change', goodEvent)

        expect(wrapper.find('App').state().timerMinutes).to.equal(3)
        expect(wrapper.find('App').state().timers).to.eql([180, 180, 180, 180])

        expect(wrapper.find('#timerMinsInput').prop('value')).to.equal(3)
      })

      it('Then trying to change the time per turn to a non integer keeps the existing values', () => {
        const badEvent = { target: { value: 'a' } }

        expect(wrapper.find('App').state().timerMinutes).to.equal(2)
        expect(wrapper.find('App').state().timers).to.eql([120, 120, 120, 120])

        expect(wrapper.find('#timerMinsInput').prop('value')).to.equal(2)

        wrapper.find('#timerMinsInput').simulate('change', badEvent)

        expect(wrapper.find('App').state().timerMinutes).to.equal(2)
        expect(wrapper.find('App').state().timers).to.eql([120, 120, 120, 120])

        expect(wrapper.find('#timerMinsInput').prop('value')).to.equal(2)
      })

      it('Then changing the extensions quantity to an integer updates the screen and state', () => {
        const goodEvent = { target: { value: 3 } }

        expect(wrapper.find('App').state().extensionsQty).to.equal(5)
        expect(wrapper.find('App').state().extensions).to.eql([5, 5, 5, 5])

        expect(wrapper.find('#extQtyInput').prop('value')).to.equal(5)

        wrapper.find('#extQtyInput').simulate('change', goodEvent)

        expect(wrapper.find('App').state().extensionsQty).to.equal(3)
        expect(wrapper.find('App').state().extensions).to.eql([3, 3, 3, 3])

        expect(wrapper.find('#extQtyInput').prop('value')).to.equal(3)
      })

      it('Then trying to change the extensions quantity to a non integer keeps the existing values', () => {
        const badEvent = { target: { value: 'a' } }

        expect(wrapper.find('App').state().extensionsQty).to.equal(5)
        expect(wrapper.find('App').state().extensions).to.eql([5, 5, 5, 5])

        expect(wrapper.find('#extQtyInput').prop('value')).to.equal(5)

        wrapper.find('#extQtyInput').simulate('change', badEvent)

        expect(wrapper.find('App').state().extensionsQty).to.equal(5)
        expect(wrapper.find('App').state().extensions).to.eql([5, 5, 5, 5])

        expect(wrapper.find('#extQtyInput').prop('value')).to.equal(5)
      })
    })

    describe('When the game is started', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({ showSettings: false })
      })

      it('Then it displays the player clocks', () => {
        expect(wrapper.find('Settings')).to.have.length(0)
        expect(wrapper.find('Clock')).to.have.length(4)

        expect(wrapper.find('#clocksDiv')).to.have.length(1)

        expect(wrapper.find('#clockDiv0')).to.have.length(1)
        expect(wrapper.find('#clockDiv0').prop('className')).to.equal('clockDiv rotate')

        expect(wrapper.find('#clockDiv1')).to.have.length(1)
        expect(wrapper.find('#clockDiv1').prop('className')).to.equal('clockDiv rotate')

        expect(wrapper.find('#clockDiv2')).to.have.length(1)
        expect(wrapper.find('#clockDiv2').prop('className')).to.equal('clockDiv')

        expect(wrapper.find('#clockDiv3')).to.have.length(1)
        expect(wrapper.find('#clockDiv3').prop('className')).to.equal('clockDiv')
      })

      it('Then it displays the player buttons with clock displays', () => {
        expect(wrapper.find('#playerBtn0')).to.have.length(1)
        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerClock0')).to.have.length(1)
        expect(wrapper.find('#playerClock0').prop('className')).to.equal('playerClock')
        expect(wrapper.find('#playerClock0').text()).to.equal('30 : 00')

        expect(wrapper.find('#playerBtn1')).to.have.length(1)
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerClock1')).to.have.length(1)
        expect(wrapper.find('#playerClock1').prop('className')).to.equal('playerClock')
        expect(wrapper.find('#playerClock1').text()).to.equal('30 : 00')

        expect(wrapper.find('#playerBtn2')).to.have.length(1)
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerClock2')).to.have.length(1)
        expect(wrapper.find('#playerClock2').prop('className')).to.equal('playerClock')
        expect(wrapper.find('#playerClock2').text()).to.equal('30 : 00')

        expect(wrapper.find('#playerBtn3')).to.have.length(1)
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerClock3')).to.have.length(1)
        expect(wrapper.find('#playerClock3').prop('className')).to.equal('playerClock')
        expect(wrapper.find('#playerClock3').text()).to.equal('30 : 00')
      })

      it('Then it displays the player 2-minute timers', () => {
        expect(wrapper.find('#timerDiv0')).to.have.length(1)
        expect(wrapper.find('#timerDiv0').prop('className')).to.equal('timerDiv')

        expect(wrapper.find('#playerTimer0')).to.have.length(1)
        expect(wrapper.find('#playerTimer0').prop('className')).to.equal('playerTimer')
        expect(wrapper.find('#playerTimer0').text()).to.equal('2 : 00')
      })

      it('Then it displays the player names', () => {
        expect(wrapper.find('#playerNameTitle0')).to.have.length(1)
        expect(wrapper.find('#playerNameTitle0').prop('className')).to.equal('playerNameTitle')
        expect(wrapper.find('#playerNameTitle0').text()).to.equal('Player1')

        expect(wrapper.find('#playerNameTitle1')).to.have.length(1)
        expect(wrapper.find('#playerNameTitle1').prop('className')).to.equal('playerNameTitle')
        expect(wrapper.find('#playerNameTitle1').text()).to.equal('Player2')

        expect(wrapper.find('#playerNameTitle2')).to.have.length(1)
        expect(wrapper.find('#playerNameTitle2').prop('className')).to.equal('playerNameTitle')
        expect(wrapper.find('#playerNameTitle2').text()).to.equal('Player4')

        expect(wrapper.find('#playerNameTitle3')).to.have.length(1)
        expect(wrapper.find('#playerNameTitle3').prop('className')).to.equal('playerNameTitle')
        expect(wrapper.find('#playerNameTitle3').text()).to.equal('Player3')
      })

      it('Then the player is not displayed if the name is blank', () => {
        wrapper.setState({ names: ['Player1', '', 'Player4', 'Player3'] })

        expect(wrapper.find('#displayClock0').prop('className')).to.equal('displayClock')
        expect(wrapper.find('#displayClock1').prop('className')).to.equal('hideClock')
        expect(wrapper.find('#displayClock2').prop('className')).to.equal('displayClock')
        expect(wrapper.find('#displayClock3').prop('className')).to.equal('displayClock')
      })
    })

    describe('When the clocks are selected', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({ showSettings: false })
      })

      it('Then initially no players are highlighted', () => {
        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
      })

      it('Then selecting a player highlights the selected player', () => {
        wrapper.find('#playerBtn0').simulate('click')

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock playerSelected')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')

        wrapper.find('#playerBtn1').simulate('click')

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock playerSelected')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')

        wrapper.find('#playerBtn2').simulate('click')

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock playerSelected')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')

        wrapper.find('#playerBtn3').simulate('click')

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock playerSelected')
      })


      it('Then selecting player 0 starts the clock for the selected player and resets times for other players', (done) => {
        wrapper.find('#playerBtn0').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerClock0').text()).to.equal('29 : 59')
          expect(wrapper.find('#playerClock1').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock2').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock3').text()).to.equal('30 : 00')

          expect(wrapper.find('#playerTimer0').text()).to.equal('1 : 59')
          expect(wrapper.find('#playerTimer1').text()).to.equal('2 : 00')
          expect(wrapper.find('#playerTimer2').text()).to.equal('2 : 00')
          expect(wrapper.find('#playerTimer3').text()).to.equal('2 : 00')

          done()
        }, 1500)
      }, 2000)

      it('Then selecting player 1 starts the clock for the selected player and resets times for other players', (done) => {
        wrapper.find('App').setState({
          numberMinutes: 25,
          clocks: [1500, 1500, 1500, 1500],
          timerMinutes: 5,
          timers: [300, 300, 300, 300]
        })

        wrapper.find('#playerBtn1').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerClock0').text()).to.equal('25 : 00')
          expect(wrapper.find('#playerClock1').text()).to.equal('24 : 58')
          expect(wrapper.find('#playerClock2').text()).to.equal('25 : 00')
          expect(wrapper.find('#playerClock3').text()).to.equal('25 : 00')

          expect(wrapper.find('#playerTimer0').text()).to.equal('5 : 00')
          expect(wrapper.find('#playerTimer1').text()).to.equal('4 : 58')
          expect(wrapper.find('#playerTimer2').text()).to.equal('5 : 00')
          expect(wrapper.find('#playerTimer3').text()).to.equal('5 : 00')

          done()
        }, 2500)
      }, 3000)

      it('Then selecting player 2 starts the clock for the selected player and resets times for other players', (done) => {
        wrapper.find('App').setState({
          numberMinutes: 20,
          clocks: [1200, 1200, 1200, 1200],
          timerMinutes: 4,
          timers: [240, 240, 240, 240]
        })

        wrapper.find('#playerBtn2').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerClock0').text()).to.equal('20 : 00')
          expect(wrapper.find('#playerClock1').text()).to.equal('20 : 00')
          expect(wrapper.find('#playerClock2').text()).to.equal('19 : 57')
          expect(wrapper.find('#playerClock3').text()).to.equal('20 : 00')

          expect(wrapper.find('#playerTimer0').text()).to.equal('4 : 00')
          expect(wrapper.find('#playerTimer1').text()).to.equal('4 : 00')
          expect(wrapper.find('#playerTimer2').text()).to.equal('3 : 57')
          expect(wrapper.find('#playerTimer3').text()).to.equal('4 : 00')

          done()
        }, 3500)
      }, 4000)

      it('Then selecting player 3 starts the clock for the selected player and resets times for other players', (done) => {
        wrapper.find('App').setState({
          numberMinutes: 15,
          clocks: [900, 900, 900, 900],
          timerMinutes: 6,
          timers: [360, 360, 360, 360]
        })

        wrapper.find('#playerBtn3').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerClock0').text()).to.equal('15 : 00')
          expect(wrapper.find('#playerClock1').text()).to.equal('15 : 00')
          expect(wrapper.find('#playerClock2').text()).to.equal('15 : 00')
          expect(wrapper.find('#playerClock3').text()).to.equal('14 : 56')

          expect(wrapper.find('#playerTimer0').text()).to.equal('6 : 00')
          expect(wrapper.find('#playerTimer1').text()).to.equal('6 : 00')
          expect(wrapper.find('#playerTimer2').text()).to.equal('6 : 00')
          expect(wrapper.find('#playerTimer3').text()).to.equal('5 : 56')

          done()
        }, 4500)
      }, 5000)

      it('Then the same player being selected again pauses the clock', (done) => {
        expect(wrapper.find('App').state().started).to.be.false
        expect(wrapper.find('App').state().pausedPlayer[3]).to.be.false

        wrapper.find('#playerBtn3').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('App').state().started).to.be.true
          expect(wrapper.find('App').state().pausedPlayer[3]).to.be.false

          expect(wrapper.find('#playerClock0').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock1').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock2').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock3').text()).to.equal('29 : 59')

          wrapper.find('#playerBtn3').simulate('click')

          setTimeout(() => {
            expect(wrapper.find('App').state().started).to.be.true
            expect(wrapper.find('App').state().pausedPlayer[3]).to.be.true

            expect(wrapper.find('#playerClock0').text()).to.equal('30 : 00')
            expect(wrapper.find('#playerClock1').text()).to.equal('30 : 00')
            expect(wrapper.find('#playerClock2').text()).to.equal('30 : 00')
            expect(wrapper.find('#playerClock3').text()).to.equal('29 : 59')

            done()
          }, 1500)

        }, 1500)

      }, 5000)
    })

    describe('When a clock is at 0', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({ showSettings: false })
      })

      it('Then initially - no players are highlighted as red or orange', () => {
        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
      })

      it('Then player 0 is highlighted as red and player 1 is highlighted orange', () => {
        wrapper.find('App').setState({ clocks: [0, 299, 300, 1800] })

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock zero')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock low')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
      })

      it('Then player 1 is highlighted as red and player 2 is highlighted orange', () => {
        wrapper.find('App').setState({ clocks: [1800, 0, 299, 300] })

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock zero')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock low')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
      })

      it('Then player 2 is highlighted as red and player 3 is highlighted orange', () => {
        wrapper.find('App').setState({ clocks: [300, 1800, 0, 299] })

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock zero')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock low')
      })

      it('Then player 3 is highlighted as red and player 0 is highlighted orange', () => {
        wrapper.find('App').setState({ clocks: [299, 300, 1800, 0] })

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock low')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock zero')
      })
    })

    describe('When a clocks are in different states', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({
          showSettings: false,
          clocks: [300, 299, 0, 1800],
          playerSelected: 3
        })
      })

      it('Then the clocks have different colours', () => {
        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock low')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock zero')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock playerSelected')
      })
    })

    describe('When the turn timers are displayed', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({
          numberMinutes: 15,
          clocks: [900, 900, 900, 900],
          playerSelected: 1,
          showSettings: false,
          timerMinutes: 6,
          timers: [9, 0, 29, 120],
          extensions: [3, 5, 0, 2]
        })
      })

      it(`Then the timers display their values and the extensions are highlighted appropriately`, () => {
        expect(wrapper.find('#timerDiv0').prop('className')).to.equal('timerDiv critical')
        expect(wrapper.find('#timerDiv1').prop('className')).to.equal('timerDiv zero')
        expect(wrapper.find('#timerDiv2').prop('className')).to.equal('timerDiv low')
        expect(wrapper.find('#timerDiv3').prop('className')).to.equal('timerDiv')

        expect(wrapper.find('#playerTimer0').text()).to.equal('0 : 09')
        expect(wrapper.find('#playerTimer1').text()).to.equal('0 : 00')
        expect(wrapper.find('#playerTimer2').text()).to.equal('0 : 29')
        expect(wrapper.find('#playerTimer3').text()).to.equal('2 : 00')

        expect(wrapper.find('#extDiv0').prop('className')).to.equal('extDiv')
        expect(wrapper.find('#extDiv1').prop('className')).to.equal('extDiv playerSelected')
        expect(wrapper.find('#extDiv2').prop('className')).to.equal('extDiv zero')
        expect(wrapper.find('#extDiv3').prop('className')).to.equal('extDiv low')

        expect(wrapper.find('#extDiv0').text()).to.equal('Extensions: 3')
        expect(wrapper.find('#extDiv1').text()).to.equal('Extensions: 5')
        expect(wrapper.find('#extDiv2').text()).to.equal('Extensions: 0')
        expect(wrapper.find('#extDiv3').text()).to.equal('Extensions: 2')
      })

      it(`Then selecting the active player's extension button when timer is 0 will reset the timer mins and reduce the extensions left`, () => {
        wrapper.find('#extDiv1').simulate('click')

        expect(wrapper.find('#timerDiv0').prop('className')).to.equal('timerDiv critical')
        expect(wrapper.find('#timerDiv1').prop('className')).to.equal('timerDiv playerSelected')
        expect(wrapper.find('#timerDiv2').prop('className')).to.equal('timerDiv low')
        expect(wrapper.find('#timerDiv3').prop('className')).to.equal('timerDiv')

        expect(wrapper.find('#playerTimer0').text()).to.equal('0 : 09')
        expect(wrapper.find('#playerTimer1').text()).to.equal('6 : 00')
        expect(wrapper.find('#playerTimer2').text()).to.equal('0 : 29')
        expect(wrapper.find('#playerTimer3').text()).to.equal('2 : 00')

        expect(wrapper.find('#extDiv0').prop('className')).to.equal('extDiv')
        expect(wrapper.find('#extDiv1').prop('className')).to.equal('extDiv playerSelected')
        expect(wrapper.find('#extDiv2').prop('className')).to.equal('extDiv zero')
        expect(wrapper.find('#extDiv3').prop('className')).to.equal('extDiv low')

        expect(wrapper.find('#extDiv0').text()).to.equal('Extensions: 3')
        expect(wrapper.find('#extDiv1').text()).to.equal('Extensions: 4')
        expect(wrapper.find('#extDiv2').text()).to.equal('Extensions: 0')
        expect(wrapper.find('#extDiv3').text()).to.equal('Extensions: 2')
      })

      it(`Then selecting the active player's extension button when timer is NOT 0 will do nothing`, () => {
        wrapper.find('App').setState({
          numberMinutes: 15,
          clocks: [900, 900, 900, 900],
          timerMinutes: 6,
          timers: [360, 60, 360, 360]
        })

        expect(wrapper.find('#timerDiv0').prop('className')).to.equal('timerDiv')
        expect(wrapper.find('#timerDiv1').prop('className')).to.equal('timerDiv playerSelected')
        expect(wrapper.find('#timerDiv2').prop('className')).to.equal('timerDiv')
        expect(wrapper.find('#timerDiv3').prop('className')).to.equal('timerDiv')

        expect(wrapper.find('#playerTimer0').text()).to.equal('6 : 00')
        expect(wrapper.find('#playerTimer1').text()).to.equal('1 : 00')
        expect(wrapper.find('#playerTimer2').text()).to.equal('6 : 00')
        expect(wrapper.find('#playerTimer3').text()).to.equal('6 : 00')

        wrapper.find('#extDiv1').simulate('click')

        expect(wrapper.find('#timerDiv0').prop('className')).to.equal('timerDiv')
        expect(wrapper.find('#timerDiv1').prop('className')).to.equal('timerDiv playerSelected')
        expect(wrapper.find('#timerDiv2').prop('className')).to.equal('timerDiv')
        expect(wrapper.find('#timerDiv3').prop('className')).to.equal('timerDiv')

        expect(wrapper.find('#playerTimer0').text()).to.equal('6 : 00')
        expect(wrapper.find('#playerTimer1').text()).to.equal('1 : 00')
        expect(wrapper.find('#playerTimer2').text()).to.equal('6 : 00')
        expect(wrapper.find('#playerTimer3').text()).to.equal('6 : 00')
      })
    })

    describe('When a player name is changed', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({ showSettings: true })
      })

      it('Then player0 name is updated', () => {
        const event = { target: { value: 'New Player Name 1' } }

        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('Player1')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('Player2')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('Player4')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player3')

        wrapper.find('#playerNameInput0').simulate('change', event)


        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('New Player Name 1')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('Player2')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('Player4')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player3')
      })

      it('Then player1 name is updated', () => {
        const event = { target: { value: 'New Player Name 2' } }

        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('Player1')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('Player2')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('Player4')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player3')

        wrapper.find('#playerNameInput1').simulate('change', event)


        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('Player1')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('New Player Name 2')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('Player4')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player3')
      })

      it('Then player 1 name is updated', () => {
        const event = { target: { value: 'New Player Name 3' } }

        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('Player1')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('Player2')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('Player4')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player3')

        wrapper.find('#playerNameInput2').simulate('change', event)


        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('Player1')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('Player2')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('New Player Name 3')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player3')
      })
    })

    describe('When clocks are displayed when rotate is selected/unselected', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({
          showSettings: false,
          playerQty: 2,
          rotate: true
        })
      })

      it('Then player 0 is rotated for a 2 player game', () => {
        expect(wrapper.find('#clockDiv0').prop('className')).to.equal('clockDiv rotate')
        expect(wrapper.find('#clockDiv1').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#clockDiv2')).to.have.length(0)
        expect(wrapper.find('#clockDiv3')).to.have.length(0)

        wrapper.find('App').setState({ rotate: false })

        expect(wrapper.find('#clockDiv0').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#clockDiv1').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#clockDiv2')).to.have.length(0)
        expect(wrapper.find('#clockDiv3')).to.have.length(0)
      })

      it('Then players 0 & 1 are rotated for a 4 player game', () => {
        wrapper.find('App').setState({ playerQty: 4 })

        expect(wrapper.find('#clockDiv0').prop('className')).to.equal('clockDiv rotate')
        expect(wrapper.find('#clockDiv1').prop('className')).to.equal('clockDiv rotate')
        expect(wrapper.find('#clockDiv2').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#clockDiv3').prop('className')).to.equal('clockDiv')

        wrapper.find('App').setState({ rotate: false })

        expect(wrapper.find('#clockDiv0').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#clockDiv1').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#clockDiv2').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#clockDiv3').prop('className')).to.equal('clockDiv')
      })
    })

    describe('When settings are displayed when rotate is selected/unselected', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({
          showSettings: true,
          playerQty: 2,
          rotate: true
        })
      })

      it('Then player 0 is rotated for a 2 player game', () => {
        expect(wrapper.find('App').state().rotate).to.be.true
        expect(wrapper.find('#rotateButton')).to.have.length(1)
        expect(wrapper.find('#rotateButton').prop('className')).to.equal('settingsButtons')
        expect(wrapper.find('#rotateBtn')).to.have.length(1)
        expect(wrapper.find('#rotateBtn').prop('className')).to.equal('settingsBtn selected')
        expect(wrapper.find('#rotateBtn').text()).to.equal('Rotate')

        wrapper.find('#rotateBtn').simulate('click')

        expect(wrapper.find('App').state().rotate).to.be.false
        expect(wrapper.find('#rotateButton')).to.have.length(1)
        expect(wrapper.find('#rotateButton').prop('className')).to.equal('settingsButtons')
        expect(wrapper.find('#rotateBtn')).to.have.length(1)
        expect(wrapper.find('#rotateBtn').prop('className')).to.equal('settingsBtn')
        expect(wrapper.find('#rotateBtn').text()).to.equal('Rotate')

        wrapper.find('#rotateBtn').simulate('click')

        expect(wrapper.find('App').state().rotate).to.be.true
        expect(wrapper.find('#rotateButton')).to.have.length(1)
        expect(wrapper.find('#rotateButton').prop('className')).to.equal('settingsButtons')
        expect(wrapper.find('#rotateBtn')).to.have.length(1)
        expect(wrapper.find('#rotateBtn').prop('className')).to.equal('settingsBtn selected')
        expect(wrapper.find('#rotateBtn').text()).to.equal('Rotate')
      })
    })

    describe('When the Resume button is selected', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({
          showSettings: true,
          playerQty: 4,
          rotate: true,
          started: true
        })
      })

      it('Then the clocks screen is displayed', () => {
        expect(wrapper.find('App').state().showSettings).to.be.true
        expect(wrapper.find('#returnButton')).to.have.length(1)
        expect(wrapper.find('#returnButton').prop('className')).to.equal('settingsButtons')
        expect(wrapper.find('#return')).to.have.length(1)
        expect(wrapper.find('#return').prop('className')).to.equal('settingsBtn')
        expect(wrapper.find('#return').text()).to.equal('Resume')
        expect(wrapper.find('Clock')).to.have.length(0)

        wrapper.find('#return').simulate('click')

        expect(wrapper.find('App').state().showSettings).to.be.false
        expect(wrapper.find('#returnButton')).to.have.length(0)
        expect(wrapper.find('Clock')).to.have.length(4)
      })
    })

    describe('When the New Game button is selected', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({
          numberMinutes: 30,
          timerMinutes: 3,
          names: ['Player1', 'Player2', 'Player4', 'Player3'],
          clocks: [1800, 1200, 600, 0],
          timers: [0, 40, 80, 120],
          extensions: [5, 3, 2, 0],
          playerSelected: 2,
          playerInterrupting: 3,
          started: true,
          pausedPlayer: [false, false, true, false],
          playerQty: 4,
          rotate: false,
          showSettings: true,
          extensionsQty: 3
        })
      })

      it('Then the clocks screen is displayed with correct settings', () => {
        expect(wrapper.find('#startButton')).to.have.length(1)
        expect(wrapper.find('#startButton').prop('className')).to.equal('settingsButtons')
        expect(wrapper.find('#start')).to.have.length(1)
        expect(wrapper.find('#start').prop('className')).to.equal('settingsBtn')
        expect(wrapper.find('#start').text()).to.equal('New Game')
        expect(wrapper.find('Clock')).to.have.length(0)

        expect(wrapper.find('App').state()).to.eql({
          numberMinutes: 30,
          timerMinutes: 3,
          names: ['Player1', 'Player2', 'Player4', 'Player3'],
          clocks: [1800, 1200, 600, 0],
          timers: [0, 40, 80, 120],
          extensions: [5, 3, 2, 0],
          playerSelected: 2,
          playerInterrupting: 3,
          started: true,
          pausedPlayer: [false, false, true, false],
          playerQty: 4,
          rotate: false,
          showSettings: true,
          extensionsQty: 3
        })


        wrapper.find('#start').simulate('click')

        expect(wrapper.find('#startButton')).to.have.length(0)
        expect(wrapper.find('Clock')).to.have.length(4)

        expect(wrapper.find('App').state()).to.eql({
          numberMinutes: 30,
          timerMinutes: 3,
          names: ['Player1', 'Player2', 'Player4', 'Player3'],
          clocks: [1800, 1800, 1800, 1800],
          timers: [180, 180, 180, 180],
          extensions: [3, 3, 3, 3],
          playerSelected: 5,
          playerInterrupting: 5,
          started: false,
          pausedPlayer: [false, false, false, false],
          playerQty: 4,
          rotate: false,
          showSettings: false,
          extensionsQty: 3
        })
      })
    })

    describe('When the Settings icon is selected', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({
          numberMinutes: 30,
          timerMinutes: 2,
          names: ['Player1', 'Player2', 'Player4', 'Player3'],
          clocks: [1800, 1200, 600, 0],
          timers: [0, 40, 80, 120],
          extensions: [5, 3, 2, 0],
          playerSelected: 2,
          playerInterrupting: 3,
          started: true,
          pausedPlayer: [false, false, true, false],
          playerQty: 4,
          rotate: false,
          showSettings: false,
          extensionsQty: 5
        })
      })

      it('Then the settings screen is displayed with the same settings', () => {
        expect(wrapper.find('#settingsIconDiv')).to.have.length(1)
        expect(wrapper.find('#settingsIconDiv').prop('className')).to.equal('settingsIconDiv')
        expect(wrapper.find('#settingsIcon')).to.have.length(1)
        expect(wrapper.find('#settingsIcon').prop('className')).to.equal('settingsIcon')
        expect(wrapper.find('#settingsIcon').text()).to.equal('')
        expect(wrapper.find('Clock')).to.have.length(4)
        expect(wrapper.find('Settings')).to.have.length(0)


        expect(wrapper.find('App').state()).to.eql({
          numberMinutes: 30,
          timerMinutes: 2,
          names: ['Player1', 'Player2', 'Player4', 'Player3'],
          clocks: [1800, 1200, 600, 0],
          timers: [0, 40, 80, 120],
          extensions: [5, 3, 2, 0],
          playerSelected: 2,
          playerInterrupting: 3,
          started: true,
          pausedPlayer: [false, false, true, false],
          playerQty: 4,
          rotate: false,
          showSettings: false,
          extensionsQty: 5
        })


        wrapper.find('#settingsIcon').simulate('click')

        expect(wrapper.find('Clock')).to.have.length(0)
        expect(wrapper.find('Settings')).to.have.length(1)

        expect(wrapper.find('App').state()).to.eql({
          numberMinutes: 30,
          timerMinutes: 2,
          names: ['Player1', 'Player2', 'Player4', 'Player3'],
          clocks: [1800, 1200, 600, 0],
          timers: [0, 40, 80, 120],
          extensions: [5, 3, 2, 0],
          playerSelected: 2,
          playerInterrupting: 3,
          started: true,
          pausedPlayer: [false, false, true, false],
          playerQty: 4,
          rotate: false,
          showSettings: true,
          extensionsQty: 5
        })
      })
    })

    describe('When the Stop button is clicked', () => {
      beforeEach(() => {
        wrapper = mount(<App />)

        wrapper.setState({
          clocks: [1800, 1800, 600, 0],
          timers: [120, 0, 80, 120],
          extensions: [0, 5, 4, 2],
          playerSelected: 2,
          started: false,
          pausedPlayer: [false, false, false, false],
          playerQty: 4,
          showSettings: false
        })
      })

      it('Then an interrupt by the active player does nothing', (done) => {
        expect(wrapper.find('App').state().timers).to.eql([120, 0, 80, 120])
        expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 600, 0])

        wrapper.setState({
          started: true
        })

        setTimeout(() => {
          expect(wrapper.find('App').state().timers).to.eql([120, 0, 79, 120])
          expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 599, 0])

          wrapper.find('#interruptIcon2').simulate('click')
        }, 1500)

        setTimeout(() => {
          expect(wrapper.find('App').state().timers).to.eql([120, 0, 78, 120])
          expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 598, 0])

          done()
        }, 2500)

      }, 3000)

      it('Then an interrupt by a player who has no clock time remaining does nothing', (done) => {
        expect(wrapper.find('App').state().timers).to.eql([120, 0, 80, 120])
        expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 600, 0])

        wrapper.setState({
          started: true
        })

        setTimeout(() => {
          expect(wrapper.find('App').state().timers).to.eql([120, 0, 79, 120])
          expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 599, 0])

          wrapper.find('#interruptIcon3').simulate('click')
        }, 1500)

        setTimeout(() => {
          expect(wrapper.find('App').state().timers).to.eql([120, 0, 78, 120])
          expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 598, 0])

          done()
        }, 2500)

      }, 3000)

      it('Then an interrupt by a player who has clock time remaining but no extensions remaining will pause the active player and start their clock/timer', (done) => {
        expect(wrapper.find('App').state().timers).to.eql([120, 0, 80, 120])
        expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 600, 0])

        wrapper.setState({
          started: true
        })

        setTimeout(() => {
          expect(wrapper.find('App').state().timers).to.eql([120, 0, 79, 120])
          expect(wrapper.find('App').state().clocks).to.eql([1800, 1800, 599, 0])

          wrapper.find('#interruptIcon0').simulate('click')
        }, 1500)

        setTimeout(() => {
          expect(wrapper.find('App').state().timers).to.eql([119, 0, 79, 120])
          expect(wrapper.find('App').state().clocks).to.eql([1799, 1800, 599, 0])

          done()
        }, 2500)

      }, 3000)

      it(`Then selecting the interrupting player's extension button when timer is 0 will reset the timer mins and reduce the extensions left`, () => {
        wrapper.setState({
          timers: [120, 0, 80, 120],
          extensions: [0, 5, 4, 2],
          playerSelected: 2,
          playerInterrupting: 1,
          started: true,
          pausedPlayer: [false, false, true, false],
          playerQty: 4,
          showSettings: false
        })

        expect(wrapper.find('#timerDiv0').prop('className')).to.equal('timerDiv')
        expect(wrapper.find('#timerDiv1').prop('className')).to.equal('timerDiv zero')
        expect(wrapper.find('#timerDiv2').prop('className')).to.equal('timerDiv playerSelected')
        expect(wrapper.find('#timerDiv3').prop('className')).to.equal('timerDiv')

        expect(wrapper.find('#playerTimer0').text()).to.equal('2 : 00')
        expect(wrapper.find('#playerTimer1').text()).to.equal('0 : 00')
        expect(wrapper.find('#playerTimer2').text()).to.equal('1 : 20')
        expect(wrapper.find('#playerTimer3').text()).to.equal('2 : 00')

        expect(wrapper.find('#extDiv0').prop('className')).to.equal('extDiv zero')
        expect(wrapper.find('#extDiv1').prop('className')).to.equal('extDiv')
        expect(wrapper.find('#extDiv2').prop('className')).to.equal('extDiv playerSelected')
        expect(wrapper.find('#extDiv3').prop('className')).to.equal('extDiv low')

        expect(wrapper.find('#extDiv0').text()).to.equal('Extensions: 0')
        expect(wrapper.find('#extDiv1').text()).to.equal('Extensions: 5')
        expect(wrapper.find('#extDiv2').text()).to.equal('Extensions: 4')
        expect(wrapper.find('#extDiv3').text()).to.equal('Extensions: 2')

        wrapper.find('#extDiv1').simulate('click')

        expect(wrapper.find('#timerDiv0').prop('className')).to.equal('timerDiv')
        expect(wrapper.find('#timerDiv1').prop('className')).to.equal('timerDiv')
        expect(wrapper.find('#timerDiv2').prop('className')).to.equal('timerDiv playerSelected')
        expect(wrapper.find('#timerDiv3').prop('className')).to.equal('timerDiv')

        expect(wrapper.find('#playerTimer0').text()).to.equal('2 : 00')
        expect(wrapper.find('#playerTimer1').text()).to.equal('2 : 00')
        expect(wrapper.find('#playerTimer2').text()).to.equal('1 : 20')
        expect(wrapper.find('#playerTimer3').text()).to.equal('2 : 00')

        expect(wrapper.find('#extDiv0').prop('className')).to.equal('extDiv zero')
        expect(wrapper.find('#extDiv1').prop('className')).to.equal('extDiv')
        expect(wrapper.find('#extDiv2').prop('className')).to.equal('extDiv playerSelected')
        expect(wrapper.find('#extDiv3').prop('className')).to.equal('extDiv low')

        expect(wrapper.find('#extDiv0').text()).to.equal('Extensions: 0')
        expect(wrapper.find('#extDiv1').text()).to.equal('Extensions: 4')
        expect(wrapper.find('#extDiv2').text()).to.equal('Extensions: 4')
        expect(wrapper.find('#extDiv3').text()).to.equal('Extensions: 2')
      })

      // TODO: need test for selecting same interrupting player - nothing changes

      // TODO: need test for selecting different interrupting player - other times remain and new one is activated

      // TODO: need test for selecting extension for interrupting player - extention allowed

      // TODO: need test for selecting extension for non active or non interrupting player - extention NOT allowed

      // TODO: need test for selecting the original player after being interrupted - interrupting players do not reset

      // TODO: need test for selecting a different player after being interrupted - everything reset
    })
  })
