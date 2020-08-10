import React, { Component } from 'react';

class Home extends Component {
   

    render() {
        const styles={
            height:500
        }
        return (
           <div style={styles}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://thewallpaper.co//wp-content/uploads/2016/03/bread-food-restaurant-people-hd-wallpaper-high-resolution-background-images-desktop-images-of-windows-amazing-cool-best-wallpaper-ever-images-free-stock-photos-1600x1025.jpg"  height="500" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://wallpapercave.com/wp/wp1874155.jpg" height="500" class="d-block w-100" alt="..."  />
                    </div>
                    <div class="carousel-item">
                        <img src="https://thewallpaper.co//wp-content/uploads/2016/03/bread-food-restaurant-people-hd-wallpaper-high-resolution-background-images-desktop-images-of-windows-amazing-cool-best-wallpaper-ever-images-free-stock-photos-1600x1025.jpg" height="500" class="d-block w-100" alt="..."  />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            </div>
        );
    }
}
export default Home;
