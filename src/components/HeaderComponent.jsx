import styled from 'styled-components';
import logoPluga from '../assets/images/pluga.png';

export default function HeaderComponent() {

    return (
        <Header>
            <img src={logoPluga} alt={"logo Pluga"} />
            <h1> As ferramentas que você mais ama, agora juntas. </h1>
        </Header>
    );
}

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        width: 20%;
    }
`