
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(Math.random() * 3));
  useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * 3));
  }, []);

  return (
    <>
      <div className="heading">
        <h1><b>Blogger Page</b></h1>
      </div>
      <div className='contain' id="box">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`} id="carousel1">
              <div className="card">
                <img height="300px" width="30%" src="https://picsum.photos/id/237/536/354" className="card-img-top" alt="Blog1Image" />
                <div className="card-body">
                  <h5 className="card-title">Animals matter</h5>
                  <p className="card-text">The first step is to determine whether the bird is a nestling or a fledgling. Nestlings are very young birds with few or no feathers. If you find a nestling on the ground, it needs your help to survive. Fledglings, on the other hand, are older and have a mix of fuzzy down and adult feathers. They’re often found hopping along on the ground or perching on low branches. If a fledgling appears healthy, it’s best to leave it alone.</p>
                  <a href="https://www.amtmindia.org/what-to-do-when-you-find-an-injured-or-orphaned-baby-bird/" className="btn btn-primary"><pre>for more..</pre></a>
                </div>
              </div>
            </div>
            <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`} id="carousel2">
              <div className="card">
                <img height="300px" width="30%" src="https://picsum.photos/seed/picsum/536/354" className="card-img-top" alt="Blog2Image" />
                <div className="card-body">
                  <h5 className="card-title">Mountains are Soul</h5>
                  <p className="card-text">I have never in my life claimed to be an adventurer or outdoors lover – until I started hiking in the mountains. With the lovely, lush green forests and foothills, the tantalizing teal lakes hidden away like a secret prize waiting to be found, and those stunning sky-high jagged peaks, it was love at first sight. But more than that, hiking in the mountains became an immediate passion because of the way it made me feel. I was able to just be the real me and connect with the version of myself that felt the most authentic and true.</p>
                  <a href="https://www.thepinkbackpack.com/ileftmyheartinthemountains/" className="btn btn-primary"><pre>for more..</pre></a>
                </div>
              </div>
            </div>
            <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`} id="carousel3">
              <div className="card">
                <img height="300px" width="30%" src="https://uploads-ssl.webflow.com/5e8ffd61d516146f7ddc860b/5f5f8d12c1e58d003564e9c3_Sandhill-Cranes_Migration_1.jpg" className="card-img-top" alt="Blog3Image" />
                <div className="card-body">
                  <h5 className="card-title">Annual Migrations</h5>
                  <p className="card-text">Birds are incredibly mobile beasts, given that they fly. Compared to us lowly Earthbound creatures, birds are free to go where they please. But they don’t just fly around the planet aimlessly.

Instead, a range of distinct movement types and patterns are seen among the Earth’s approximately 10,000 bird species.

At the smallest geographic and temporal scales, birds move around in their local habitats over the course of a day. They forage for food, seek shelter from predators and the weather; they defend territories, look for mates, and tend to their nests.

Another type of movement is the one that every bird makes once in their lifetime. Young birds begin their lives in one location and then venture forth into the unknown, often on their own, away from where they were born. This movement is called dispersal. Some bird species disperse long distances, others stay very close to where they hatched.</p>
                  <a href="https://www.scienceofbirds.com/blog/bird-migration" className="btn btn-primary"><pre>for more..</pre></a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
