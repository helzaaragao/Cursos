import { HomeContainer, Info, Profile } from "./Home";
import github from '../src/assets/github-alt-brands-solid.svg'
import buiding from '../src/assets/building-solid.svg'
import React from "react";

export function Home(){ 
    return (
        <HomeContainer>
            <Profile>
                <h1>Cameron Williamson</h1>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <Info>
                    <div>
                    <img src={github} alt="" />
                     <span>cameronwill</span>
                    </div>
                    <div>
                    <img src={buiding} alt="" />
                    <span>Rocketseat</span>
                    </div>
                </Info>
            </Profile>
          

        </HomeContainer>
     
    )
}