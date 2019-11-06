import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  active: string;
  addPlace: (index: number, posY: number) => void;
}

const getProfile = graphql`
  query {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export const About: React.FC<Props> = ({ active, addPlace }) => {
  const {
    profile: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getProfile);

  const [toggle, setToggle] = useState<boolean>(false);
  const ref: any = useRef(null);

  active === 'about' ? !toggle && setToggle(true) : toggle && setToggle(false);

  useEffect(() => {
    addPlace(3, ref.current.getBoundingClientRect().top);
  }, [toggle]);

  return (
    <Container id="about">
      <div className="all-abouts" ref={ref}>
        <div className="about-container">
          <p>
            I'm Christian Villamin, a web developer specializing in ReactJS and
            its environment.
          </p>
          <ul>
            <li>I love learning new things and I learn fast.</li>
            <li>I'm flexible and adapt to environments fast</li>
            <li>I'm always on my programming game, I code clean and fast.</li>
          </ul>
          <br />
          <h2>Programming History</h2>
          <p>
            I have started programming back in 2007 when I was 11, using{' '}
            <a
              href="https://en.wikipedia.org/wiki/Blizzard_Entertainment"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blizzard
            </a>
            's event-driven scripting language called{' '}
            <a
              href="https://en.wikipedia.org/wiki/JASS"
              target="_blank"
              rel="noopener noreferrer"
            >
              JASS
            </a>{' '}
            to make modifications and create custom maps for their game,{' '}
            <a
              href="https://en.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Warcraft III
            </a>
            . I learned it through self learning and my love for their game, and
            since then have enjoyed the art of programming to heart. With it, I
            made games such as Hero Arena(Now as MOBA), Tower Defense, Campaign
            Adventures, and many more where I played it with my local and online
            friends.
          </p>
          <br />
          <p>
            After that, I learned to program in Java to make my own Android
            mobile game using the{' '}
            <a
              href="https://developer.android.com/studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android Studio
            </a>{' '}
            IDE and an awesome library called{' '}
            <a
              href="https://libgdx.badlogicgames.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              libGDX
            </a>
            . I made a 2D platform pixel-art running game. A year later, I
            decided to learn C# &{' '}
            <a
              href="https://www.blender.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blender
            </a>
            , and moved to{' '}
            <a
              href="https://unity.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unity3D
            </a>{' '}
            to step-up the game.
          </p>
          <br />
        </div>

        <div className="about-container">
          <h2>Web Development</h2>
          <p>`...description...`</p>
          <br />
          <h2>Hobbies & Interests</h2>
          <p>Things I love (other than programming)</p>
          <ul>
            <li>Playing the piano.</li>
            <li>Reading fantasy books.</li>
            <li>Helping people.</li>
          </ul>
          <br />
          <p>Things I want to do someday</p>
          <ul>
            <li>AI & Machine Learning</li>
            <li>Dungeons & Dragons</li>
            <li>Godot Engine & GDScript</li>
            <li>YT & Make Tutorials</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  /* border: 2px pink solid; */

  h1 {
    color: rgb(45, 45, 70);
    font-size: 8vw;
    text-shadow: 0 3px silver;
  }

  .profile {
    width: 125px;
    height: 125px;
    border: 5px white solid;
    border-radius: 50%;
    margin-bottom: 2vh;
  }

  .about-container {
    color: gainsboro;
    /* margin: 12px; */
    padding: 12px;
    background: black;
    border: 1px silver solid;

    h2 {
      font-size: 6vw;
    }

    p {
      font-size: 3vw;
    }

    ul {
      margin-left: 24px;
      font-size: 3vw;
    }
  }

  @media only screen and (max-height: 660px) {
    margin-top: 8vh;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      text-shadow: 0 6.5px silver;
    }

    .all-abouts {
      display: flex;
    }

    .about-container {
      color: gainsboro;
      width: 40vw;
      max-width: 500px;
      margin: 12px;
      padding: 12px;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      ul {
        margin-left: 24px;
        font-size: 1rem;
      }
    }
  }
`;
