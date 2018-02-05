import React, { Component } from 'react';
import './Navbar.css';

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>


          <div className="carousel-inner">
            <div className="item active">
              <img src="https://ecs7.tokopedia.net/img/banner/2018/1/24/25618007/25618007_89f94b5b-3639-477c-aef3-9214810b41bd.png" alt="Chania"/>
              <div className="carousel-caption">
                <h3>Los Angeles</h3>
                <p>LA is always so much fun!</p>
              </div>
            </div>

            <div className="item">
              <img src="https://ecs7.tokopedia.net/img/banner/2018/1/24/25618007/25618007_89f94b5b-3639-477c-aef3-9214810b41bd.png" alt="Chicago"/>
              <div className="carousel-caption">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </div>
            </div>

            <div className="item">
              <img src="https://ecs7.tokopedia.net/img/banner/2018/1/24/25618007/25618007_89f94b5b-3639-477c-aef3-9214810b41bd.png" alt="New York"/>
              <div className="carousel-caption">
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </div>
            </div>
          </div>


          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
