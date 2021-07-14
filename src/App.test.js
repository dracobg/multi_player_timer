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

      it('Then it displays buttons to select the number of players', () => {
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

      it('Then it displays the input to select the time per player', () => {
        expect(wrapper.find('#setClock')).to.have.length(1)
        expect(wrapper.find('#noMinsLabel')).to.have.length(1)
        expect(wrapper.find('#noMinsLabel').prop('className')).to.equal('settingsLabel')
        expect(wrapper.find('#noMinsLabel').text()).to.equal('Minutes:')
        expect(wrapper.find('#noMinsInput')).to.have.length(1)
        expect(wrapper.find('#noMinsInput').prop('className')).to.equal('noMinsInput')
        expect(wrapper.find('#noMinsInput').prop('size')).to.equal('20')
        expect(wrapper.find('#noMinsInput').prop('maxLength')).to.equal('2')
        expect(wrapper.find('#noMinsInput').prop('type')).to.equal('text')
        expect(wrapper.find('#noMinsInput').prop('value')).to.equal(30)
        expect(wrapper.find('#noMinsInput').prop('onChange').name).to.equal('bound handleChangeMinutes')
      })

      it('Then it displays the player clocks', () => {
        expect(wrapper.find('#clocksDiv')).to.have.length(1)
        expect(wrapper.find('Clock')).to.have.length(4)

        expect(wrapper.find('#clockDiv0')).to.have.length(1)
        expect(wrapper.find('#clockDiv0').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#playerNameInput0')).to.have.length(1)
        expect(wrapper.find('#playerNameInput0').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput0').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput0').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput0').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('Player 1 Name')
        expect(wrapper.find('#playerNameInput0').prop('onChange')).to.exist
        expect(wrapper.find('#playerBtn0')).to.have.length(1)
        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerClock0')).to.have.length(1)
        expect(wrapper.find('#playerClock0').prop('className')).to.equal('playerClock')
        expect(wrapper.find('#playerClock0').text()).to.equal('30 : 00')

        expect(wrapper.find('#clockDiv1')).to.have.length(1)
        expect(wrapper.find('#clockDiv1').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#playerNameInput1')).to.have.length(1)
        expect(wrapper.find('#playerNameInput1').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput1').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput1').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput1').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('Player 2 Name')
        expect(wrapper.find('#playerNameInput1').prop('onChange')).to.exist
        expect(wrapper.find('#playerBtn1')).to.have.length(1)
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerClock1')).to.have.length(1)
        expect(wrapper.find('#playerClock1').prop('className')).to.equal('playerClock')
        expect(wrapper.find('#playerClock1').text()).to.equal('30 : 00')

        expect(wrapper.find('#clockDiv2')).to.have.length(1)
        expect(wrapper.find('#clockDiv2').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#playerNameInput2')).to.have.length(1)
        expect(wrapper.find('#playerNameInput2').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput2').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput2').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput2').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('Player 3 Name')
        expect(wrapper.find('#playerNameInput2').prop('onChange')).to.exist
        expect(wrapper.find('#playerBtn2')).to.have.length(1)
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerClock2')).to.have.length(1)
        expect(wrapper.find('#playerClock2').prop('className')).to.equal('playerClock')
        expect(wrapper.find('#playerClock2').text()).to.equal('30 : 00')

        expect(wrapper.find('#clockDiv3')).to.have.length(1)
        expect(wrapper.find('#clockDiv3').prop('className')).to.equal('clockDiv')
        expect(wrapper.find('#playerNameInput3')).to.have.length(1)
        expect(wrapper.find('#playerNameInput3').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput3').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput3').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput3').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player 4 Name')
        expect(wrapper.find('#playerNameInput3').prop('onChange')).to.exist
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
    })

    describe('When the clocks are selected', () => {
      beforeEach(() => {
        wrapper = mount(<App />)
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


      it('Then selecting player 0 starts the clock for the selected player', (done) => {
        wrapper.find('#playerBtn0').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerClock0').text()).to.equal('29 : 59')
          expect(wrapper.find('#playerClock1').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock2').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock3').text()).to.equal('30 : 00')

          done()
        }, 1500)
      }, 2000)

      it('Then selecting player 1 starts the clock for the selected player', (done) => {
        wrapper.find('#playerBtn1').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerClock0').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock1').text()).to.equal('29 : 58')
          expect(wrapper.find('#playerClock2').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock3').text()).to.equal('30 : 00')

          done()
        }, 2500)
      }, 3000)

      it('Then selecting player 2 starts the clock for the selected player', (done) => {
        wrapper.find('#playerBtn2').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerClock0').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock1').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock2').text()).to.equal('29 : 57')
          expect(wrapper.find('#playerClock3').text()).to.equal('30 : 00')

          done()
        }, 3500)
      }, 4000)

      it('Then selecting player 3 starts the clock for the selected player', (done) => {
        wrapper.find('#playerBtn3').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerClock0').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock1').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock2').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerClock3').text()).to.equal('29 : 56')

          done()
        }, 4500)
      }, 5000)
    })

    describe('When a clock is at 0', () => {
      beforeEach(() => {
        wrapper = mount(<App />)
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

  })
