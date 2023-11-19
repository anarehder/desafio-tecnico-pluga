import styled from 'styled-components';

export default function ToolComponent({ name, icon, link }) {

    return (
        <a href={link}>
            <ToolBlock>
                <div>
                    <img src={icon} alt={name}/>
                </div>
                {name}
            </ToolBlock>
        </a>
    );
}

const ToolBlock = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EFEFEF;
    border-radius: 15px;
    gap: 30px;
    img {
        width: 70px;
    }
`