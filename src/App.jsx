import { useState } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import reactLogo from './assets/react.svg'
import godotLogo from './assets/godot_icon.svg'
import viteLogo from '/vite.svg'
import ibjIcon from './assets/idleblackjack.jpg'
import roc from './assets/roq.png'
import nss from './assets/nss.png'
import nss_large from './assets/nss large.png'
import uig from './assets/uig.jpg'

const SKILLS = {
  languages: [
    { name: "Java", icon_location: "https://www.svgrepo.com/show/184143/java.svg" },
    { name: "Python", icon_location: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" },
    { name: "Javascript", icon_location: "https://static-00.iconduck.com/assets.00/javascript-icon-2048x2048-dc9qqnwh.png" },
    { name: "C#", icon_location: "https://static-00.iconduck.com/assets.00/c-icon-1820x2048-5g8nvybk.png" },
    { name: "Kotlin", icon_location: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" },
    { name: "HTML", icon_location: "https://static-00.iconduck.com/assets.00/html5-icon-2018x2048-st7q7lm6.png" },
    { name: "CSS", icon_location: "https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" },
    { name: "SQL", icon_location: "https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png" },
    { name: "C++", icon_location: "https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png" },
    { name: "Rust", icon_location: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png" },
    { name: "GDScript", icon_location: godotLogo },
  ],
  tools: [
    { name: "Godot", icon_location: godotLogo },
    { name: "Unity", icon_location: "https://static-00.iconduck.com/assets.00/unity-icon-2048x2048-pcu6t1xp.png" },
    { name: "Git", icon_location: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { name: "AWS", icon_location: "https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-274bm1xi.png" },
    { name: "Android Studio", icon_location: "https://static-00.iconduck.com/assets.00/android-icon-icon-1745x2048-6ltk524v.png" },
    { name: "React", icon_location: reactLogo },
    { name: "Vite", icon_location: viteLogo },
    { name: "Processing", icon_location: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg" },
    { name: "NetBeans", icon_location: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/888px-Apache_NetBeans_Logo.svg.png" },
    { name: "Swing", icon_location: "https://www.svgrepo.com/show/184143/java.svg" },
  ],
}

const PROJECTS = [
  {
    name: "Zombee",
    icon_location: "https://img.itch.zone/aW1nLzExOTU0NjYzLnBuZw==/315x250%23c/e5O1V2.png",
    data: {
      large_icon_location: "https://youtube.com/embed/lXhu6udGhoo",
      is_video: true,
      desc: "A side-scrolling 2D shooter where you, a parasite that infects bees, hop from body to body",
      long_desc: "In Zombee, you play as an infected bee that is trying to search out and infect the queen. Shoot and sting in a procedurally-generated map, but be careful not to let your body decay! Weaken enemies by shooting them, and then use your stinger to infect a new body!",
      contributions: "Designed and implemented the procedurally generated map and one enemy type. Implemented the scrolling parallax background. Designed and programmed the possession mechanic. Composed and produced the music.",
      link:"https://pkflunr.itch.io/zombee",
      link_text:"Download at itch.io",
    },
  },
  {
    name: "Tycoon Idle Game",
    icon_location: uig,
    data: {
      large_icon_location: "https://youtube.com/embed/6NNnOtZ0tp0",
      is_video: true,
      desc: "a physics-based idle tycoon with lots of creative potential",
      long_desc: "This project is an idle game where you can place down machines on a grid-based map. Some machines produce physics-affected widgets, some move widgets around around, some upgrade widgets' value, and some sell those widgets, allowing you to buy more machines.",
      contributions: "Sole developer. Created robust generic systems for placing down different machines; creating, upgrading, and selling widgets; and a crafting system. Designed and implement UI/UX for machine shop and inventory screens.",
    },
  },
  {
    name: "Pathogen",
    icon_location: "https://img.itch.zone/aW1nLzU5NTE3MzcucG5n/315x250%23c/vhBj%2Ff.png",
    data: {
      large_icon_location: "https://youtube.com/embed/q0O8FoFcEU8",
      is_video: true,
      desc: "A bullet hell shooter where you can copy the enemies' abilities to use against them",
      long_desc: "In Pathogen, you control a vaccine ship, flying through the body and destroying viruses, absorbing their genes to use their own powers against them. This game is an entry in the shoot-em-up genre, and is adjacent to the bullet hell subgenre. In this game, you flip the table on the typical bullet hell, instead copying and stacking multiple of the enemies' abilities and attacks onto each other until you are unstoppable.",
      contributions: "Created infrastructure for enemies and enemy wave spawning. Designed and implemented two enemies. Designed and programmed player shooting and power stealing/stacking mechanic, as well as most stealable powers. Created the music and sound effects.",
      link:"https://yerdun.itch.io/pathogen",
      link_text:"Play at itch.io",
    },
  },
  {
    name: "The Eternally Damned",
    icon_location: roc,
    data: {
      large_icon_location: "https://youtube.com/embed/Nzecwz6evK4",
      is_video: true,
      desc: "A metroidvania 2D platformer where you seamlessly switch between two characters",
      long_desc: "This game is a 2D platformer in the \"Metroidvania\" genre, where the game takes place in one fully interconnected map, with the player exploring to find movement and combat powerups that allow them to progress further into the map. In this game specifically, you control two characters: Joshua, a vampire hunter, and Kravitz, a vampire, and each has different abilities. You can swap between each character seamlessly in order to pull off powerful combos and explore the map.",
      contributions: "Sole developer. Created player controller state machine and multiple movement and combat abilities. Created enemy behavior tree system and two enemy types. Implemented power unlock pickups, save points, and save game.",
    },
  },
  {
    name: "Idle Blackjack",
    icon_location: ibjIcon,
    data: {
      large_icon_location: "https://youtube.com/embed/2OQOgEcSFV8",
      is_video: true,
      desc: "An incremental idle game where you accrue money through gambling on blackjack",
      long_desc: "This is a mobile-designed idle game for Android where you accrue money through idling and gambling on blackjack games. Purchase upgrades and additional gamblers to get money even faster!",
      contributions: "Programmed blackjack card game. Designed upgrade system infrastructure. Designed and implemented UI/UX. Provided assistance and advice to newer programmers.",
      link:"https://github.com/pkflunr/idle-blackjack",
      link_text:"Download at Github",
    },
  },
  {
    name: "No Leg Up",
    icon_location: "https://img.itch.zone/aW1nLzEyMDg2MDY1LnBuZw==/315x250%23c/3A5RM3.png",
    data: {
      large_icon_location: "https://youtube.com/embed/x-wQgbsPdW8",
      is_video: true,
      desc: "A puzzle platformer where you control gravity, rather than your character",
      long_desc: "No Leg Up is a puzzle platformer where instead of having agency over yourself, you control the gravity in the room. Many objects, not just the player, are affected by gravity, and you need to figure out how to navigate controlling all of these independent parts to get your player to the end.",
      contributions: "Led team meetings and ran code reviews. Implemented most puzzle mechanics. Composed and created music.",
      link:"https://the64threalm.itch.io/no-leg-up",
      link_text:"Play at itch.io",
    },
  },
  {
    name: "Strategy RPG",
    icon_location: nss,
    data: {
      large_icon_location: nss_large,
      is_video: false,
      desc: "A fantasy-themed tactical strategy RPG on a top-down grid-based map",
      long_desc: "This is a fantasy strategy role-playing game based on titles like Final Fantasy Tactics and Fire Emblem. Take turns moving your armies across a grid-based map and fight for control.",
      contributions: "Sole developer. Implemented grid-based map movement and role-playing game combat. Designed and implemented gameplay UI/UX.",
    },
  },
]


function App() {
  const [project_name, set_project_name] = useState(PROJECTS[0].name)
  const [project_desc, set_project_desc] = useState(PROJECTS[0].data.desc)
  const [project_preview_location, set_project_preview_location] = useState(PROJECTS[0].data.large_icon_location)
  const [preview_is_video, set_preview_is_video] = useState(PROJECTS[0].data.is_video)
  const [project_long_desc, set_project_long_desc] = useState(PROJECTS[0].data.long_desc)
  const [project_contributions, set_project_contributions] = useState(PROJECTS[0].data.contributions)
  const [project_link,set_project_link] = useState(PROJECTS[0].data.link)
  const [project_link_text,set_project_link_text] = useState(PROJECTS[0].data.link_text)

  var language_squares = []

  SKILLS.languages.forEach(language => {
    language_squares.push(<SkillIcon name={language.name} icon_location={language.icon_location} />)
  })

  var tool_squares = []

  SKILLS.tools.forEach(tool => {
    tool_squares.push(<SkillIcon name={tool.name} icon_location={tool.icon_location} />)
  })

  return (
    <>
      <header className='top_bar'>
        <h1 className='name'>
          Miguel Valmonte
        </h1>
        <div className='flex_grow' />
        <Link className = 'linktext' to="about">About</Link>
        <span className='circle' />
        <Link className = 'linktext' to="projects">Projects</Link>
        <span className='circle' />
        <Link className = 'linktext' to="contact">Contact</Link>
      </header>

      <section className='about'>
        <h2 className='section_header'>
        <Element name="about"/>About</h2>
        <div className='horizontal_flex'>
          <div className='flex_grow'>
            <div className='hellopanel flex_grow panel'>
              <h3 className='hello_text'>Hello!</h3>
              <p className='hello_text'>I'm Miguel Valmonte, a Bay Area resident and recent graduate from Cal Poly Pomona.</p>
              <p className='hello_text'>I am a programmer with interests in software engineering, web development, and game development. I am constantly looking to improve myself in these fields and the skills they require.</p>
              <p className='hello_text'>Outside of programming, my hobbies include writing, making music, and biking.</p>
            </div>
            
            <div className='shrink panel'>
              <h3>Education</h3>
              <p className='bolded'>B.S. Computer Science - Cal Poly Pomona</p>
              <p>Sept 2020 to May 2024</p>
              <p>GPA: 3.4</p>
              <p>Dean's List: Spring 2021, Spring 2023, Spring 2024</p>
            </div>
          </div>
          <div className='spacer' />
          <div className='double_grow flex_grow'>
            <div className='panel'>
              <h3>Skills</h3>
              <h4>Languages</h4>
              <div className='wrapping horizontal_flex'>
                {language_squares}
              </div>
              <h4>Tools</h4>
              <div className='wrapping horizontal_flex'>
                {tool_squares}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='projects'>
        <h2 className='section_header'>Projects
        <Element name="projects"/></h2>
        <div className='previewpanel panel'>
          <div className='horizontal_flex'>

            {preview_is_video ? (<iframe className='project_preview' src={project_preview_location} />) : (<img className='project_preview' src={project_preview_location} />)}

            <div className='nocenter panel'>
              <h3 className='project_title'>{project_name}</h3>
              <p>{project_desc}</p>
              <div>
              <p className='project_text'>{project_long_desc}</p>
              <p className='project_text'>{project_contributions}</p>
                {(project_link != null ? <p><a href={project_link} className='project_text'>{project_link_text}</a></p>:null)}
              </div>
            </div>

          </div>
        </div>
        <div className='hscroll panel'>
          <ProjectHScrollBar />
        </div>
      </section>

      <section className='contact'>
      <Element name="contact"/>
        <footer>
          <h2>Contact</h2>
          <div className='contact_container horizontal_flex'>
            <p>Email<br /><a class_name="contact_link" href="mailto:miguel.p.valmonte@gmail.com">miguel.p.valmonte@gmail.com</a></p>
            <p>Github<br /><a class_name="contact_link" href="https://github.com/pkflunr" target="_blank" rel="noopener noreferrer">github.com/pkflunr</a></p>
            <p>Itch.io<br /><a class_name="contact_link" href="https://pkflunr.itch.io" target="_blank" rel="noopener noreferrer">pkflunr.itch.io</a></p>
          </div>
        </footer>
      </section>
    </>
  )

  function ProjectHScrollBar() {
    function on_button_click(project) {
      set_project_name(project.name)
      set_project_desc(project.data.desc)
      set_preview_is_video(project.data.is_video)
      set_project_preview_location(project.data.large_icon_location)
      set_project_long_desc(project.data.long_desc)
      set_project_contributions(project.data.contributions)
      set_project_link(project.data.link)
      set_project_link_text(project.data.link_text)
    }

    return (
      <>
        <ul style={{
        }}>
          {PROJECTS.map(project => (
            <li>
              <button className='project_button' onClick={() => on_button_click(project)}>
                <img className='project_icon' src={project.icon_location}></img>
                <h4>{project.name}</h4>
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

function SkillIcon({ name, icon_location }) {
  return (
    <div className='skill_panel'>
      <img className='skill_icon' src={icon_location}></img>
      <p className='skill_label'>{name}</p>
    </div>
  )
}



export default App
