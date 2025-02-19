import { GithubLogo, Buildings, Users } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Info, InfoProfile, Profile, ProfileImage } from "./profile.ts";
import avatar from '../../assets/avatar.png'
import React from "react";

export function Profile() { 
    return(
        <Profile>
        <ProfileImage>
            <img src={avatar} alt="" />
        </ProfileImage>
        <InfoProfile>  
        <h1>Cameron Williamson</h1>
        <span><Link to={'/'}>Github</Link></span>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <Info>
            <div>
                <GithubLogo size={18} weight="fill"/>
                <span>cameronwill</span>
            </div>
            <div>
                <Buildings size={18} weight="fill"/>
                <span>Rocketseat</span>
            </div>
            <div>
                <Users size={18} weight="fill"/>
                <span>32 seguidores</span>
            </div>
        </Info>
        </InfoProfile>
        
    </Profile>
    )
}