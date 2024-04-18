'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import AgentPortrait from '../../public/images/Jett_fullPortrait.png';
import AgentBackground from '../../public/images/Jett_background.png';
import RoleIcon from '../../public/images/Duelist.png';
import UpdraftIcon from '../../public/images/Jett_Updraft.png';
import TailwindIcon from '../../public/images/Jett_Tailwind.png';
import Cloudburst from '../../public/images/Jett_Cloudburst.png';
import BladeStorm from '../../public/images/Jett_BladeStorm.png';

import './agentId.css';

import { road_rage } from '../../ui/fonts';


const AgentNumber = 11;


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

  const AgentName = params.agentId[0].toUpperCase() + params.agentId.slice(1);

  return (
    <div>

      {/* Agent Description */}
      <AgentDescription
        AgentNumber={AgentNumber}
        AgentName={AgentName}
        AgentBio={AgentBio}
        AgentPortrait={AgentPortrait}
        AgentBackground={AgentBackground}
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
                onClick={() =>{ handleAbilitySelect(ability)}}
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