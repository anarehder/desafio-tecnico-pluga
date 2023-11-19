import styled from 'styled-components';

import { useState } from 'react';

export default function ToolComponent(tool) {
    const [setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    return (
        <a onClick={handleOpenModal}>
            <ToolBlock>
                <div>
                    <img src={tool.tool.icon} alt={tool.tool.name} />
                </div>
                <h2> {tool.tool.name} </h2>
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