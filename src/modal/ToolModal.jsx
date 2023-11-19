import styled from 'styled-components';
import { useToolContext } from '../contexts/ToolContext';

const ToolModal = (isOpen, onClose, tool) => {
    const { setRecentTool } = useToolContext();

    if (!isOpen) return null;

    function handleCloseModal() {
        setModalOpen(false);
        setRecentTool(tool);
    }

    return (
        <ModalOvarlay onClick={onClose}>
            <Modal>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    {children}
                </ModalContent>
            </Modal>
        </ModalOvarlay>
    );
};

export default ToolModal;

const ModalOvarlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Modal = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 16px;
`

const ModalContent = styled.div`
    background-color: white;
`