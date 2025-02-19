import { Profile } from "./components/Profile/profile.tsx";
import { HomeContainer } from "./Home.ts";


export function Home(){ 
    return (
        <HomeContainer>
            <Profile></Profile>
            {/* <Profile>
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
                
            </Profile> */}
            {/* <Search>
                <div>
                    <h2>Publicações</h2>
                    <span>6 publicações</span>
                </div>
                <input type="text" />
            </Search> 
            
            colocar profile como componente para parar de atrapalhar aqui 
            */}

           
          

        </HomeContainer>
     
    )
}