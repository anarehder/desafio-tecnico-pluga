/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Modal from 'react-modal';
import { useToolContext } from '../contexts/ToolContext';

const ToolModal = (props) => {

    const { recentTools } = useToolContext();
    const handleClick = () => {
        props.closeModal(props.tool);
    };

    return (
        <ModalContainer>
            <Modal isOpen={!!props.tool} onClose={handleClick}>
                <ToolInfo>
                    <img src={props.tool.icon} alt={props.tool.name} />
                    <div>
                        <h1>{props.tool.name}</h1>
                        <a href={props.tool.link}>ACESSAR</a>
                    </div>
                </ToolInfo>
                <LastTools>
                    <h1> ÚLTIMAS FERRAMENTAS VISUALIZADAS </h1>
                    {recentTools.length === 0 ? <h1> Não foram visualizadas ferramentas anteriormente </h1> :
                        <LastToolsList>
                            {recentTools.map((tool) => (
                                <div key={tool.name}>
                                    <img src={tool.icon} alt={tool.name} />
                                    <h1>{tool.name}</h1>
                                </div>
                            ))}
                        </LastToolsList>}
                    <ModalButton onClick={handleClick}>Fechar Modal</ModalButton>
                </LastTools>
            </Modal>
        </ModalContainer>
    );
};


export default ToolModal;


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fundo escuro com opacidade */
    display: flex;
    justify-content: center;
    align-items: center;
`

const ToolInfo = styled.div`
    margin: 100px 50px 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    img {
        width: 170px;
        background-color: #EFEFEF;
        border-radius: 100px;
        padding: 15px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        gap: 20px;
        h1 {
            width: 250px;
            background-color: #EFEFEF;;
            color: #757575 !important;
            padding: 15px;
        }
        a{
            background-color:#A7A7A7;
            border-radius: 35px;
            font-weight: 700;
            padding: 15px;
            color: white;
        }
    }
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`

const LastTools = styled.div`
    margin: 120px 50px 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 70px;
    h1 {
        color: #757575 !important;
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        h1{
            width: 200px;
            text-align: center;
        }
        div{
            gap: 15px
        }
    }

`
const LastToolsList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    div {
        text-align: center;
    }
    img {
        width: 120px;
        background-color: #EFEFEF;
        border-radius: 100px;
        padding: 15px;
        margin-bottom: 25px;
    }
    h1 {
            width: 250px;
            background-color: #EFEFEF;
            color: #757575 !important;
            padding: 15px;
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        div{
            gap: 15px
        }
    }
`

const ModalButton = styled.button`
    padding: 10px;
    width: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
`
