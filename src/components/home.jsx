import '../styles/style.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="manju">
      <Carousel>
        <Carousel.Item interval={1000}>
          {/* <imgclassName="d-block width={900}" */}
          <img width={1540} height={400} alt="First slide" src="/images/pic2.jpg" />

          {/* src="/pic2.jpg"
          alt="First slide" */}
          {/* /> */}
          <Carousel.Caption>
            <h3 className='text-danger  display-inline-block bg-light  fs-1  '>Welcome to Kuvempu University</h3>
            <p className='text-dark bg-light fs-4'>Jnana Sahyadri, Shankaraghatta,Shimoga(D)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img width={1540} height={400} alt="Second slide" src="/images/pic1.jpg" />

          <Carousel.Caption>
            <h3 className='text-light'>Kuvempu University</h3>
            <p>"When I hear Kannada, my heart leaps up and I am all ears.“ —  Kuvempu</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1540} height={400} alt="Third slide" src="/images/pic3.jpg" />

          <Carousel.Caption>
            {/* <h3 className='text-danger fs-1'>Kuvempu University</h3> */}
            <p className='text-light  fs-4'>
            „In me is the sky, in me lies the earth.“ —  Kuvempu</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <marquee behavior="" direction="">
            <img src="./pic2.jpg" alt=""/>
            <img src="./pic1.jpg" alt=""/>
            <img src="./pic4.jpg" alt=""/>
        </marquee> */}

      <div className="inner">
        <div className="mainContent">
          <div className="Content">
            <article className="topContent">
              <header>
                <h3><a href="#" title="My First Post">About Kuvempu University</a> </h3>
              </header>
              <footer>
                <p className="post-info"></p>
              </footer>
              <content>
                <p>Kuvempu University an affiliating University established in 1987. It is a State University
                  recognized by UGC under 2(f) and 12(b). The University has been named after great Kannada
                  writer Shri KUVEMPU and has achieved a distinctive academic profile and a cultural identity
                  of its own. Interestingly, the features of its identity seem to have emerged out of the
                  multifaceted personality of Kuvempu, the great doyen of Kannada literature, a Jnanapitha
                  awardee and one among the most significant cultural figures of modern India.</p>


              </content>
            </article>




            <article className="bottomContent">
              <header>
                <h3><a href="#" title="Pathway Programme">Pathway Programme</a> </h3>
              </header>
              <footer>
                <p className="post-info"></p>
              </footer>
              <content>
                <p> Kuvempu University is a confluence of the local and the global; of the regional and the
                  pan-Indian; of the sustenance provided by tradition and the dynamism provided by modernity;
                  of a deep sense of commitment to the socially and culturally disadvantaged and an equally
                  deep commitment to excellence. The emblem of the university has a mythical animal with the
                  trunk of an elephant and the body of a swan. This mythical animal, called Gajahamsa is
                  commonly found in the Vijayanagara and the Keladi sculpture and temple art. It symbolizes
                  the integration of knowledge and wealth. The jurisdiction of the university spreads over the
                  districts of Shivamogga and Chikkamagaluru. It is a university with a distinctive academic
                  profile, blending in itself commitment to rural ethos in modern spirit. The university
                  offers under-graduate, post- graduate and Ph.D programmes in a wide range of disciplines. It
                  has 35 Post-graduate Departments in the Faculties of Arts, Commerce, Education, and Science
                  and Technology. The University has its headquarters at Jnana Sahyadri campus. It sprawls
                  over an area of 230 acres of a lush green, picturesque locale providing the right ambience
                  for higher education. The main buildings of the university have been constructed on small
                  hillocks, thus blending naturally with the landscape. The entire campus area is free from
                  any form of pollution. The undisturbed and pleasant atmosphere on the campus makes it
                  ideally suited for the pursuit of higher education and research.</p>
              </content>
            </article>


          </div>
        </div>
        <div className="side">
          <aside className="top-sidebar">
            <article>
              <h3> MANUJAMATHA :</h3>
              {/* <p> */}
                <h4>The Religion of Man</h4>
              {/* </p> */}
            </article>
          </aside>

          <aside className="middle-sidebar">
            <article>
              <h3>VISHWAPATHA :</h3>
              {/* <p> */}
                <h4>The Universal Path</h4>
              {/* </p> */}
            </article>
          </aside>

          <aside className="buttom-sidebar">
            <article>
              <h3>SARVODAYA :</h3>
              {/* <p> */}
                <h4>The Welfare of All</h4>
              {/* </p> */}
            </article>
          </aside>

          <aside className="middle-sidebar">
            <article>
              <h3>SAMANVAYA :</h3>
              {/* <p> */}
                <h4>Reconciliation</h4>
              {/* </p> */}
            </article>
          </aside>

          <aside className="downBar1">
            <article>
              <h3> Vision:</h3>
              <p>Kuvempu University shall strive to become an 
                International Center of Excellence in teaching and 
                research to provide high quality value-based education 
                to all through various modes to meet the global challenges.
                {/* <h4>The Holistic Vision</h4> */}
              </p>
            </article>
          </aside>
        </div>
        <aside className="downBar2">
          <article>
            <h3> Mission:</h3>
            <p>Foster creativity in teaching, 
              learning and research to build a
               knowledge base and promote quality
                initiative. Provide access to education to all. 
                Develop human resources to meet the societal needs.
              {/* <h4>The Holistic Vision</h4> */}
            </p>
          </article>
        </aside>
        <aside className="downBar3">
          <article>
            <h3> Core Values:</h3>
            
            <ul>
            <li>Global Outlook- Regional Focus</li>
              <li>Commitment to Equity and Social Justice</li>
              <li>Conservation of Natural Resources and Cultural Heritage</li>
              <li>Humanism and Holistic View</li>
            
            </ul>
          </article>
        </aside>
        <aside className="middle-sidebar">
          <article>
            <h3> POORNA DRUSHTI:</h3>
            {/* <p> */}
              <h4>The Holistic Vision</h4>
            {/* </p> */}
          </article>
        </aside>
      </div>

    </div>


    // </div>
  );
}

export default Home;