import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Picture from './picture'
import ButtonBase from 'material-ui/ButtonBase';
const max = 3
const min = 0
const tick = 5000

var timer

export class Slider extends PureComponent {
  static propTypes = {
  }

  state = {
    image: 0
  }

  decrement = () => {
    let number
    const { image } = this.state
    image === min ? number = max : number = image - 1
    this.setState({ image: number })
  }

  increment = () => {
    let number
    const { image } = this.state
    image === max ? number = min : number = image + 1
    this.setState({ image: number })
  }

  setActive = (e) => {
    this.timerMove()
    let to = e.target.getAttribute('data-to')
    this.setState({ image: +to })
  }

  timerTick = (time) => {
    timer = setInterval(
      () => {
        this.increment()
      }, time
    )
  }

  timerMove = () => {
    clearInterval(timer);
    this.timerTick(tick)
  }

  componentDidMount = () => {
    this.timerTick(tick)
  }

  componentWillUnmount = () => {
    clearInterval(timer);
  }

  handleincrement = () => {
    this.timerMove()
    this.increment()
  }

  handledecrement = () => {
    this.timerMove()
    this.decrement()
  }

  render() {
    const { image } = this.state
    // console.log(image)
    const count = []
    for (var i = 0; i <= max;) {
      count.push(i)
      i++
    }
    const images = [
      {
        image: 'slide1.jpeg',
        title: 'Тобі цікаво абсолютно все...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!'
      },
      {
        image: 'slide2.jpeg',
        title: 'В тебе є потяг до вивчення чогось нового?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!'
      },
      {
        image: 'slide3.jpeg',
        title: 'Ти не боїшся експерементувати?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!'
      },
      {
        image: 'slide4.jpeg',
        title: 'Тоді ти потрапив туди де треба!!!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat!'
      }
    ]
    return (
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: '700px' }}>
        <SlideLint size={images.length} isActive={`${image}`}>
          {images.map( (item, index) => (
            <Picture key={index} image={item.image} title={item.title} text={item.description} />
          ))}
        </SlideLint>
        <SlideButton left={true} onClick={this.handledecrement} />
        <SlideButton right={true} onClick={this.handleincrement} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)

export const SlideLint = styled.div`
	position: absolute;
  display: flex;
  will-change: translate;
  transition: 0.3s;
	width: ${props => props.size * 100}% !important;
  transform: translateX(-${ props => props.isActive ? (+props.isActive * 100 / +props.size) : 20}%);
  min-height: 600px;
`

export const SlideButton = styled(ButtonBase)`
	position: absolute;
  width: 50%;
  left: ({ left }) => {'0' || 'initial'};
  right: ({ right }) => {'0' || 'initial'};
  top: 0;
  min-height: 500px;
  bottom: 0;
  z-index: 1140;
`
			// <div className='carousel slide ng-img-slide-container'>
			// 	<ol className='carousel-indicators'>
			// 		{count.map(active => (
			// 			<li key={active} onClick={this.setActive} data-to={active} className={`${active === image ? 'active' : ''}`} />
			// 		))}

			// 	</ol>
			// 	<div className='carousel-inner'>
			// 		<SlideLint size={count.length} isActive={`${image}`}>
			// 			{count.map(active => (
			// 				<div key={active} className={`item slider-slide ng-img-slide${active + 1} ${active === image ? 'active' : ''}`} />
			// 			))}
			// 		</SlideLint>

			// 	</div>
			// 	<a className='left carousel-control' role='button' onClick={this.handledecrement}>
			// 		<span className='glyphicon glyphicon-chevron-left' aria-hidden='true' />
			// 		<span className='sr-only'>Previous</span>
			// 	</a>
			// 	<a className='right carousel-control' role='button' onClick={this.handleincrement}>
			// 		<span className='glyphicon glyphicon-chevron-right' aria-hidden='true' />
			// 		<span className='sr-only'>Next</span>
			// 	</a>
			// </div>