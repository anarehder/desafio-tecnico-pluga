import styled from 'styled-components';

export default function ToolComponent(tool) {
    return (
        <a href={tool.tool.link}>
            <ToolBlock>
                <div>
                    <img src={tool.tool.icon} alt={tool.tool.name}/>
                </div>
                {tool.tool.name}
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