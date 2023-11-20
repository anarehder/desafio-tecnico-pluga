/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function ToolComponent(props) {
    const handleClick = () => {
        props.openModal(props.tool);
    };

    return (
        <a onClick={handleClick}>
            <ToolBlock>
                <div>
                    <img src={props.tool.icon} alt={props.tool.name} />
                </div>
                <h2> {props.tool.name} </h2>
            </ToolBlock>
            
        </a>
    );
}

const ToolBlock = styled.div`
    width: 180px;
    height: 180px;
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
    h2 {
        font-size: 20px;
        text-align: center;
    }
`
