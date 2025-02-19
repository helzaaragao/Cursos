import { HomeContainer, Info, InfoProfile, Profile, ProfileImage } from "./Home";
import {Buildings, GithubLogo, Users} from '@phosphor-icons/react';
import avatar from '../src/assets/avatar.png'
import { Link } from "react-router-dom";

export function Home(){ 
    return (
        <HomeContainer>
            <Profile>
                <ProfileImage>
                    <img src={avatar} alt="" />
                </ProfileImage>
                <InfoProfile>
                <h1>Cameron Williamson</h1>
                <Link to={'/'}>Github</Link> 
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <Info>
                    <div>
                        <GithubLogo size={32} />
                        <span>cameronwill</span>
                    </div>
                    <div>
                        <Buildings size={32} />
                        <span>Rocketseat</span>
                    </div>
                    <div>
                        <Users size={32} />
                        <span>32 seguidores</span>
                    </div>
                </Info>
                </InfoProfile>
            </Profile>
          

        </HomeContainer>
     
    )
}