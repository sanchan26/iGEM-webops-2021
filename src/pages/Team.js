import React from "react";
import Footer from "../components/Footer";
import images from "../images/core_dp.png";
import profile from "../images/profile.png";
import Head1 from "../images/Team member Photos/Gayathri.jpeg";
import Head2 from "../images/Team member Photos/Neha.jpg";
import Labhead1 from "../images/Jai_lab.jpg";
import Labhead2 from "../images/Varshini.jpeg";
import Labhead3 from "../images/Team member Photos/deepak_laxman.jpg";
import Core from "../images/Team member Photos/Core.png";
import Labhead4 from "../images/Team member Photos/Yogheshwer_Raja.jpg";
import Coordinator1 from "../images/Team member Photos/Ashvita_Lab_Hp.jpg";
import SponsCoordinator from "../images/Team member Photos/bensha.jpeg";
import Coordinator2 from "../images/Team member Photos/Siddharath.PNG";
import LabCoordinator3 from "../images/Team member Photos/Prahalaad Varahaswami_Lab.jpg";
import Webopshead from "../images/Team member Photos/Sanjay.jpeg";
import Webdesignhead from "../images/Team member Photos/Dhruv Lab_HP.jpg";
import Content_writingHead from "../images/Team member Photos/Dinesh.jpg";
import Content_writingHead2 from "../images/Team member Photos/Ishita Chechani.jpg";
import Webops_Coordinator1 from "../images/Team member Photos/Ishaan_Webops.jpg";
import Webops_Coordinator2 from "../images/Team member Photos/Sanjana Adluru_Design.jpg";
import Cotent_Coordinator1 from "../images/Team member Photos/Aarohee Vora_Content writing_Design.jpg";
import Coordinator4 from "../images/Team member Photos/Ujjaval_lab.jpeg";
import Coordinator3 from "../images/Team member Photos/Anvith.jpeg";
import Coordinator5 from "../images/Team member Photos/gokulnath.jpg";
import Coordinator6 from "../images/Team member Photos/Ganesh_HP.png";
import Coordinator7 from "../images/Team member Photos/Rajagopal_HP.jpg";
import Coordinator8 from "../images/Team member Photos/Nikil.jpeg";
import Coordinator9 from "../images/Team member Photos/Chirag_spons.jpg";
import "./Team.css";
function Team() {
  return (
    <div className="Main_Team">
      <div className="Container">
        <h1 className="h1">TEAM</h1>
        <div className="Space"></div>
        <div className="line"></div>
        <div className="Space"></div>
        <div className="square"></div>
        <div className="Space"></div>
        <div className="Core">
          <div className="line"></div>
          <div className="Space"></div>
          <div className="row">
            <div className="column" height="400px">
              <img src={Head1} alt="" />
              <div className="Space"></div>
              <h3>GAYATHRI PRAKASH</h3>
              <div className="Space"></div>
              <p className="green">CORE</p>
              <div className="Space"></div>
              <div className="square"></div>
              <div className="Space"></div>
              <p> 
                I am a fourth year Biosciences undergrad fascinated by the
                mechanisms of cell development and regulation, and love working
                in the lab. Apart from bio, I enjoy thriller novels, writing,
                cricket and crosswords! I was drawn into the iGEM team as a
                freshie by synthetic biology projects that seemed too cool to be
                true! My first year in the team was spent learning to work with
                a fungus, dealing with experimental failures and an enriching
                trip to the Giant Jamboree (final conference of iGEM) in Boston.
                Over the next two pandemic years, I learnt how the team can be
                so much more than just the competition as we recouped, explored
                new avenues and tried to give everyone a glimpse of the side of
                biology we had seen through iGEM. This three-year journey has
                given me friends in my team members, a growing passion for
                synbio & science communication and taught me what goes into
                making those cool projects possible!
              </p>
            </div>
            <div className="column offset-md-2">
              <div className="vertical_line"></div>
              <img src={Head2} alt="" />
              <div className="Space"></div>
              <h3>NEHA SWAMINATHAN</h3>
              <div className="Space"></div>
              <p className="green">CORE</p>
              <div className="Space"></div>
              <div className="square"></div>
              <div className="Space"></div>
              <p>
                {" "}
                I'm a fourth-year undergraduate majoring in biological
                engineering. I am deeply interested in the complexities of
                cancer immunology and other health-related research, and hope to
                someday make a positive contribution to the world. I first
                joined iGEM in my first year, as a curious freshie interested in
                research, the field of synthetic biology and its scope. The
                journey as a team member culminated in a trip to Boston, which
                only furthered my interest by showcasing the endless
                possibilities in the field. This also led me to continue on as a
                team head, getting my hands dirty on merging science and
                creativity. Apart from science, I’m also passionate about dance
                and music!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="bg" />
        <div className="Space" />
        <div className="Space" />
        <div className="line" />
        <div className="container2">
          <div className="co-ordinators">
            <div className="Space" />
            <div className="square " />
            <div className="Space" />
            <h3 className="color"> HEADS</h3>
            <div className="Space" />
            <div className="line" />
            <div className="Space" />
            <div className="firstrow">
              <div className="cord">
                <div className="line" />
                <div className="Space" />
                <div className="row1 flip-box">
                  <div className="flip-box-inner">
                    <div className="col-md-4 flip-box-front">
                      <img src={Labhead1} alt />
                    </div>
                    <div className="flip-box-back">
                      <div className="title">Jai Narayan Suresh</div>
                      <div className="subtitle">Lab Head</div>
                      <p>
                        "Me and my bed complete each other but my alarm clock
                        keeps trying to break us up somehow xD"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cord">
                <div className="line" />
                <div className="Space" />
                <div className="row1 flip-box">
                  <div className="flip-box-inner">
                    <div className="col-md-4 flip-box-front">
                      <img src={Labhead2} alt />
                    </div>
                    <div className="flip-box-back">
                      <div className="title">Varshini S</div>
                      <div className="subtitle">Lab Head</div>
                      <p>
                        "Cap me and tail me, I'll translate to mind blowing
                        information!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cord">
                <div className="line" />
                <div className="Space" />
                <div className="row1 flip-box">
                  <div className="flip-box-inner">
                    <div className="col-md-4 flip-box-front">
                      <img src={Webopshead} alt />
                    </div>
                    <div className="flip-box-back">
                      <div className="title">Sanjay Chandran M M</div>
                      <div className="subtitle">WebOps Head</div>
                      <p>
                        "Don't ask me if I am a magician, Coz others may
                        disappear when you see me!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="firstrow">
              <div className="cord spce1">
                <div className="line" />
                <div className="Space" />
                <div className="row1 flip-box">
                  <div className="flip-box-inner">
                    <div className="col-md-4 flip-box-front">
                      <img src={Labhead3} alt />
                    </div>
                    <div className="flip-box-back">
                      <div className="title">Deepak Laxman</div>
                      <div className="subtitle">Design Head</div>
                      <p>
                        "I am like a wall even though I don't react I will
                        always know what ever you do.I am silent but not
                        innocentx"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cord spce">
                <div className="line" />
                <div className="Space" />
                <div className="row1 flip-box">
                  <div className="flip-box-inner">
                    <div className="col-md-4 flip-box-front">
                      <img src={Labhead4} alt />
                    </div>
                    <div className="flip-box-back">
                      <div className="title">Yogheshwer Raja G</div>
                      <div className="subtitle">
                        Sponsorship and Branding Head
                      </div>
                      <p>
                        "According to me, a PC with Valorant and a Netflix
                        subscription can make hell a heaven."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="firstrow">
              <div className="cord spce1">
                <div className="line" />
                <div className="Space" />
                <div className="row1 flip-box">
                  <div className="flip-box-inner">
                    <div className="col-md-4 flip-box-front">
                      <img src={Content_writingHead} alt />
                    </div>
                    <div className="flip-box-back">
                      <div className="title">Dinesh Kumar</div>
                      <div className="subtitle">IHP Head</div>
                      <p>
                        "Given a free weekend, I would spend time reading and
                        writing fiction, watching movies and sleeping. Found
                        interest in working with microbes/microbiome. If you are
                        not Tamizh or English, you have something to teach me as
                        I would love learning new languages."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cord spce">
                <div className="line" />
                <div className="Space" />
                <div className="row1 flip-box">
                  <div className="flip-box-inner">
                    <div className="col-md-4 flip-box-front">
                      <img src={Content_writingHead2} alt />
                    </div>
                    <div className="flip-box-back">
                      <div className="title">Ishita Chechani</div>
                      <div className="subtitle">Content Writing Head</div>
                      <p>
                        "I'm a muggle who loves reading and travelling. You'll
                        like me once u get to know me😜. Basically a round peg
                        in a square hole!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="container narrow"></div>
        <div className="bg" />
        <div className="container2">
          <h3 className="color">CO-ORDINATORS</h3>
          <div className="Space" />
          <div className="line" />
          <div className="Space" />
          <div className="colsep">
            <div className="cord">
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Webops_Coordinator1} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Ishaan Jalan</div>
                  <div className="subtitle">WebOps coordinator</div>
                  <p>
                    "Proud owner of world's largest takeaway menus collection!"
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line phon" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Webops_Coordinator2} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Sanjana Adluru</div>
                  <div className="subtitle">Design Coordinator</div>
                  <p>
                    "I aspire to have a 5’ to 3’ job like DNA Polymerase, but
                    I’d hate to be on the lagging strand."
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line phon" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator1} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Ashvita</div>
                  <div className="subtitle">Lab and IHP Coordinator</div>
                  <p>
                    "Always high on melatonin I aspire to have a 5’ to 3’ job
                    like DNA Polymerase, but I’d hate to be on the lagging
                    strand."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="colsep">
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={LabCoordinator3} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Prahalaad</div>
                  <div className="subtitle">Lab Coordinator</div>
                  <p>
                    " I would tell you a joke about SynBio but it will just get
                    lost in translation, like introns."
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Cotent_Coordinator1} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Aarohee Vora</div>
                  <div className="subtitle">
                    Design and Content Writing Coordinator
                  </div>
                  <p>
                    "Eager to unravel the mysteries of the microscopic world as
                    I hum along with nature and its evolving hues... Amongst
                    other things, I enjoy travelling, art and playing
                    badminton!"
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={SponsCoordinator} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Fathima Bensha</div>
                  <div className="subtitle">Sponsorship Coordinator</div>
                  <p>
                    "From dust to dawn, I think of places I must have gone !"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="colsep">
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator2} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Siddharth Betala</div>
                  <div className="subtitle">Sponsorship and Lab Coordinator</div>
                  <p>
                    "Oh no, I missed the deadline for submitting this too? Gonna
                    have to mail the cores for an extension."
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator3} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Anvith</div>
                  <div className="subtitle">Sponsorship Coordinator</div>
                  <p>
                    "Best way to get my attention- you are an interstellar fan.
                    Usually spending most of my time around Biz-Tech and reading
                    about science and sustainability. Rest of the time you will
                    find me sleeping, just cant get the most of it xD"
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator4} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Ujjaval Neema</div>
                  <div className="subtitle">Lab Coordinator</div>
                  <p>
                    "You can find me playing with words until the world plays
                    with me"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="colsep">
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Webdesignhead} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Dhruv Raghunath</div>
                  <div className="subtitle">Sponsorship and Lab Coordinator</div>
                  <p>
                    "Historia que tu hiciste, historia por hacer. Porque nadie
                    resiste tus ganar de vencer! 戦う最後まで、Mourir jamais mes
                    amis..."
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator5} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Gokulnath</div>
                  <div className="subtitle">Lab Coordinator</div>
                  <p>
                    "Ever since people told me about the microbial world, I have
                    always wondered if I could talk to them, watch them dance
                    and communicate. This passion of mine is second to none, but
                    for sambhar and probably badminton!""
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator6} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Ganesh</div>
                  <div className="subtitle">IHP Coordinator</div>
                  <p>
                    "Just living my DNA code , Always Trying Go Chilllll and
                    rest of my life is just the combination of that."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="colsep">
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator7} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Rajagopal</div>
                  <div className="subtitle">IHP Coordinator</div>
                  <p>
                    "I like to read, but more importantly sleep. I am also a
                    foodie. I love to discuss and debate on random topics. I
                    love to code"
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator8} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Nikhil Anand</div>
                  <div className="subtitle">Lab Coordinator</div>
                  <p>
                    Hey, I'm Nikhil. I love to pick up new skills and work on
                    really impactful projects, and that is one of the reasons I
                    joined iGEM IITM. Apart from my general interests, I also
                    have a couple of hobbies, including singing, playing the
                    guitar and playing tennis.
                  </p>
                </div>
              </div>
            </div>
            <div className="cord">
              <div className="line" />
              <div className="Space" />
              <div className="row1">
                <div>
                  <img src={Coordinator9} alt />
                </div>
                <div className="col-md-8 padbox">
                  <div className="title">Chirag</div>
                  <div className="subtitle">Sponsorship Coordinator</div>
                  <p>
                    "My ideal day would be going out with my friends and
                    spending the day eating as much as I can and coming back
                    home to game all night. I'd instantly be in love with you if
                    you're into 'how I met your mother".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;