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
        expect(wrapper.find('#noPlayersLabel').prop('className')).to.equal('noPlayersLabel')
        expect(wrapper.find('#noPlayersLabel').text()).to.equal('Select number of players - 2 or 4')
        expect(wrapper.find('#selectPlayers2')).to.have.length(1)
        expect(wrapper.find('#selectPlayers2').prop('className')).to.equal('selectPlayers unselected')
        expect(wrapper.find('#selectPlayers2').text()).to.equal('2')
        expect(wrapper.find('#selectPlayers4')).to.have.length(1)
        expect(wrapper.find('#selectPlayers4').prop('className')).to.equal('selectPlayers')
        expect(wrapper.find('#selectPlayers4').text()).to.equal('4')
      })

      it('Then it displays the input to select the time per player', () => {
        expect(wrapper.find('#setTimer')).to.have.length(1)
        expect(wrapper.find('#noMinsLabel')).to.have.length(1)
        expect(wrapper.find('#noMinsLabel').prop('className')).to.equal('noMinsLabel')
        expect(wrapper.find('#noMinsLabel').text()).to.equal('Set number of minutes per player:')
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

        expect(wrapper.find('#playerDiv0')).to.have.length(1)
        expect(wrapper.find('#playerDiv0').prop('className')).to.equal('playerDiv')
        expect(wrapper.find('#playerNameInput0')).to.have.length(1)
        expect(wrapper.find('#playerNameInput0').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput0').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput0').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput0').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput0').prop('value')).to.equal('Player Name 1')
        expect(wrapper.find('#playerNameInput0').prop('onChange')).to.exist
        expect(wrapper.find('#playerBtn0')).to.have.length(1)
        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerTimer0')).to.have.length(1)
        expect(wrapper.find('#playerTimer0').prop('className')).to.equal('playerTimer')
        expect(wrapper.find('#playerTimer0').text()).to.equal('30 : 00')

        expect(wrapper.find('#playerDiv1')).to.have.length(1)
        expect(wrapper.find('#playerDiv1').prop('className')).to.equal('playerDiv')
        expect(wrapper.find('#playerNameInput1')).to.have.length(1)
        expect(wrapper.find('#playerNameInput1').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput1').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput1').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput1').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput1').prop('value')).to.equal('Player Name 2')
        expect(wrapper.find('#playerNameInput1').prop('onChange')).to.exist
        expect(wrapper.find('#playerBtn1')).to.have.length(1)
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerTimer1')).to.have.length(1)
        expect(wrapper.find('#playerTimer1').prop('className')).to.equal('playerTimer')
        expect(wrapper.find('#playerTimer1').text()).to.equal('30 : 00')

        expect(wrapper.find('#playerDiv2')).to.have.length(1)
        expect(wrapper.find('#playerDiv2').prop('className')).to.equal('playerDiv')
        expect(wrapper.find('#playerNameInput2')).to.have.length(1)
        expect(wrapper.find('#playerNameInput2').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput2').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput2').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput2').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput2').prop('value')).to.equal('Player Name 3')
        expect(wrapper.find('#playerNameInput2').prop('onChange')).to.exist
        expect(wrapper.find('#playerBtn2')).to.have.length(1)
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerTimer2')).to.have.length(1)
        expect(wrapper.find('#playerTimer2').prop('className')).to.equal('playerTimer')
        expect(wrapper.find('#playerTimer2').text()).to.equal('30 : 00')

        expect(wrapper.find('#playerDiv3')).to.have.length(1)
        expect(wrapper.find('#playerDiv3').prop('className')).to.equal('playerDiv')
        expect(wrapper.find('#playerNameInput3')).to.have.length(1)
        expect(wrapper.find('#playerNameInput3').prop('className')).to.equal('playerNameInput')
        expect(wrapper.find('#playerNameInput3').prop('size')).to.equal('20')
        expect(wrapper.find('#playerNameInput3').prop('maxLength')).to.equal('20')
        expect(wrapper.find('#playerNameInput3').prop('type')).to.equal('text')
        expect(wrapper.find('#playerNameInput3').prop('value')).to.equal('Player Name 4')
        expect(wrapper.find('#playerNameInput3').prop('onChange')).to.exist
        expect(wrapper.find('#playerBtn3')).to.have.length(1)
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerTimer3')).to.have.length(1)
        expect(wrapper.find('#playerTimer3').prop('className')).to.equal('playerTimer')
        expect(wrapper.find('#playerTimer3').text()).to.equal('30 : 00')
      })
    })

    describe('When the timers are selected', () => {
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


      it('Then selecting player 0 starts the timer for the selected player', (done) => {
        wrapper.find('#playerBtn0').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerTimer0').text()).to.equal('29 : 59')
          expect(wrapper.find('#playerTimer1').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer2').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer3').text()).to.equal('30 : 00')

          done()
        }, 1500)
      }, 2000)

      it('Then selecting player 1 starts the timer for the selected player', (done) => {
        wrapper.find('#playerBtn1').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerTimer0').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer1').text()).to.equal('29 : 58')
          expect(wrapper.find('#playerTimer2').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer3').text()).to.equal('30 : 00')

          done()
        }, 2500)
      }, 3000)

      it('Then selecting player 2 starts the timer for the selected player', (done) => {
        wrapper.find('#playerBtn2').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerTimer0').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer1').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer2').text()).to.equal('29 : 57')
          expect(wrapper.find('#playerTimer3').text()).to.equal('30 : 00')

          done()
        }, 3500)
      }, 4000)

      it('Then selecting player 3 starts the timer for the selected player', (done) => {
        wrapper.find('#playerBtn3').simulate('click')

        setTimeout(() => {
          expect(wrapper.find('#playerTimer0').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer1').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer2').text()).to.equal('30 : 00')
          expect(wrapper.find('#playerTimer3').text()).to.equal('29 : 56')

          done()
        }, 4500)
      }, 5000)
    })

    describe('When a timer is at 0', () => {
      beforeEach(() => {
        wrapper = mount(<App />)
      })

      it('Then initially - no players are highlighted as red or amber', () => {
        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
      })

      it('Then player 0 is highlighted as red and player 1 is highlighted amber', () => {
        wrapper.find('App').setState({ timers: [0, 299, 300, 1800] })

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock zero')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock low')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
      })

      it('Then player 1 is highlighted as red and player 2 is highlighted amber', () => {
        wrapper.find('App').setState({ timers: [1800, 0, 299, 300] })

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock zero')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock low')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock')
      })

      it('Then player 2 is highlighted as red and player 3 is highlighted amber', () => {
        wrapper.find('App').setState({ timers: [300, 1800, 0, 299] })

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock zero')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock low')
      })

      it('Then player 3 is highlighted as red and player 0 is highlighted amber', () => {
        wrapper.find('App').setState({ timers: [299, 300, 1800, 0] })

        expect(wrapper.find('#playerBtn0').prop('className')).to.equal('clock low')
        expect(wrapper.find('#playerBtn1').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn2').prop('className')).to.equal('clock')
        expect(wrapper.find('#playerBtn3').prop('className')).to.equal('clock zero')
      })
    })

  })
