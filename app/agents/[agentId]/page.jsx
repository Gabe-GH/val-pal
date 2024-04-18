'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import JettPortrait from '../../public/images/Jett/Jett_fullPortrait.png';
import JettBackground from '../../public/images/Jett/Jett_background.png';
import JettHeadIcon from '../../public/images/Jett/Jett_displayIcon.png';

import AstraPortrait from '../../public/images/Astra/Astra_fullPortrait.png';
import AstraBackground from '../../public/images/Astra/Astra_background.png';
import AstraHeadIcon from '../../public/images/Astra/Astra_displayIcon.png';

import CypherPortrait from '../../public/images/Cypher/Cypher_fullPortrait.png';
import CypherHeadIcon from '../../public/images/Cypher/Cypher_displayIcon.png';
import CypherBackground from '../../public/images/Cypher/Cypher_background.png';

import RoleIcon from '../../public/images/Duelist.png';
import UpdraftIcon from '../../public/images/Jett_Updraft.png';
import TailwindIcon from '../../public/images/Jett_Tailwind.png';
import Cloudburst from '../../public/images/Jett_Cloudburst.png';
import BladeStorm from '../../public/images/Jett_BladeStorm.png';

import './agentId.css';

import { road_rage } from '../../ui/fonts';




const Abilities = [
  {
    icon_url: UpdraftIcon,
    name: 'Q - UPDRAFT',
    description: 'INSTANTLY propel Jett high into the air.'
  },
  {
    icon_url: TailwindIcon,
    name: 'E - TAILWIND',
    description: 'ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.'
  },
  {
    icon_url: Cloudburst,
    name: 'C - CLOUDBURST',
    description: 'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.'
  },
  {
    icon_url: BladeStorm,
    name: 'X - BLADE STORM',
    description: 'EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.'
  },];

const AgentBio = `Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.`;

const Role = `Duelist`;

const RoleDescription = `Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.`

const DynamicPage = () => {
  const params = useParams();

  const AgentList = {
    'Jett': 0,
    'Astra': 1,
    'Cypher': 2
  };

  const Agents = [
  {
    AgentName: 'Jett',
    AgentNumber: '11',
    AgentPortrait: JettPortrait,
    AgentHeadIcon: JettHeadIcon,
    AgentBackground: JettBackground
  },
  {
    AgentName: 'Astra',
    AgentNumber: '15',
    AgentPortrait: AstraPortrait,
    AgentHeadIcon: AstraHeadIcon,
    AgentBackground: AstraBackground
  },
  {
    AgentName: 'Cypher',
    AgentNumber: '06',
    AgentPortrait: CypherPortrait,
    AgentHeadIcon: CypherHeadIcon,
    AgentBackground: CypherBackground
  },
]
  console.log(params.agentId);
  const currentAgent = AgentList[params.agentId];

  // const AgentName = params.agentId[0].toUpperCase() + params.agentId.slice(1);
  const [selectedAgent, setSelectedAgent] = useState(Agents[currentAgent]); // Set the initial selected agent

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent); // Update the selected agent state
  };

  return (
    <div>
      {/* Carousel */}
      <div className="agent-carousel">
        <div className="agent-carousel-inner">
          {Agents.map((agent, index) => (
              <Link href={`/agents/${agent.AgentName}`} key={index} className={`agent-icon ${selectedAgent.AgentName === agent.AgentName ? 'selected' : ''}`}>
                <Image
                  src={agent.AgentHeadIcon}
                  width={80}
                  height={80}
                  alt={`Picture of agent ${agent.AgentName}`}
                  priority
                />
              </Link>
          ))}
        </div>
      </div>

      {/* Agent Description */}
      <AgentDescription
        AgentNumber={selectedAgent.AgentNumber}
        AgentName={selectedAgent.AgentName}
        AgentBio={AgentBio}
        AgentPortrait={selectedAgent.AgentPortrait}
        AgentBackground={selectedAgent.AgentBackground}
      />

      {/* Agent Role */}
      <AgentRole
        Role={Role}
        RoleIcon={RoleIcon}
        RoleDescription={RoleDescription}
      />

      {/* Agent Abilities */}
      <AgentAbilities Abilities={Abilities} />

    </div>
  );
};

const AgentCarousel = () => {

};



const AgentDescription = ({ AgentNumber, AgentName, AgentBio, AgentPortrait, AgentBackground }) => {
  return (
    <div className={`AgentDescriptionStyle`}>
      <div className={`AgentInfoStyle`}>
        <span className={`${road_rage.className} AgentNumberStyle`}>{AgentNumber}</span>
        <h2 className={`AgentNameStyle`}>{AgentName}</h2>
        <hr></hr>
        <p className={`AgentBioStyle`}>{AgentBio}</p>
      </div>
      {/* Agent Image */}
      <div className={`AgentImagesStyle`}>
        <Image
          className={`AgentPortraitStyle`}
          src={AgentPortrait}
          width={600}
          height={600}
          alt="Picture of Radiant agent Jett"
          priority
        />
        <Image
          className={`AgentBackgroundStyle`}
          src={AgentBackground}
          width={600}
          height={600}
          alt="Background image for Jett's portrait"
          priority
        />
      </div>
    </div>
  )
};

const AgentRole = ({ Role, RoleIcon, RoleDescription }) => {

  return (
    <div className='AgentRoleStyle'>
      <Image
        src={RoleIcon}
        width={200}
        height={200}
        alt="Duelist role icon"
        loading='lazy'
        className={`RoleIconStyle`}
      />
      <div className='RoleStyle'>
        <h3 className='RoleNameStyle'>{Role}</h3>
        <p className='RoleDescriptionStyle'>{RoleDescription}</p>
      </div>

    </div>
  )
}

const AgentAbilities = ({ abilities }) => {
  const [selectedAbility, setSelectedAbility] = useState(Abilities[0]);

  const handleAbilitySelect = (ability) => {
    setSelectedAbility(ability);
  }

  return (
    <div className='AbilitySectionStyle'>
      <h3 className='AbilityTitleStyle'>Abilities</h3>
      <ul className='AbilityListStyle'>
        {
          Abilities.map((ability, index) => {
            return (
              <li
                key={index}
                onClick={() => { handleAbilitySelect(ability) }}
                className={selectedAbility.name === ability.name ? 'SelectedAbility' : ''}
              >
                <Image
                  src={ability.icon_url}
                  width={200}
                  height={200}
                  alt="Duelist role icon"
                  loading='lazy'
                  className='AbilityIconStyle'
                />
              </li>
            );
          })
        }
      </ul>
      {
        selectedAbility && (
          <div className={`SelectedAbilitySection`}>
            <h3 className='SelectedAbilityTitle'>{selectedAbility.name}</h3>
            <p className='SelectedAbilityDescription'>{selectedAbility.description}</p>
          </div>
        )
      }
    </div>
  )
}

export default DynamicPage;