import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/home.css';


class Testinomialdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isHovered: false,
    };
  }

  componentDidMount() {
    this.carouselInterval = setInterval(this.nextSlide, 3000); // Auto scroll every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  nextSlide = () => {
    if (!this.state.isHovered) {
      const { activeIndex } = this.state;
      const nextIndex = activeIndex === this.props.items.length - 1 ? 0 : activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Carousel
        activeIndex={activeIndex}
        onSelect={() => {}}
        indicators={false}
        pause="hover"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.items.map((item, index) => (
          <Carousel.Item
            key={index}
            classNam e={index === activeIndex ? 'active' : ''}
          >
            <div className="testnomial-content mt-3 bg-white p-2 rounded-4">
                <div className="row">
                    <div className="col-3 col-lg-2">
                        <img src={item.profile} alt="" />
                    </div>
                    <div className="col-9 col-lg-10">
                        <h3 className='text-black'>{item.name}</h3>
                        <p className='text-black'>{item.position}</p>
                    </div>
                    <hr />
                </div>
                <h3 className="testinomial-heading text-white">{item.heading}</h3>
                <p className="description text-black fs-5">{item.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Testinomialdata;
