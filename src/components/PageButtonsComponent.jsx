/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function PageButtonsComponent(props) {

    const nextPage = () => {
        if (props.currentPage < props.totalPages) {
            props.setPage(props.currentPage + 1)
        }
    };

    const prevPage = () => {
        if (props.currentPage > 1) {
            props.setPage(props.currentPage - 1)
        }
    };

    return (
        <Buttons>
            <PageButton onClick={prevPage} disabled={props.currentPage === 1}>
                PÁGINA ANTERIOR
            </PageButton>
            <PageButton onClick={nextPage} disabled={props.currentPage === props.totalPages}>
                PRÓXIMA PÁGINA
            </PageButton>
        </Buttons>
    );
}

const Buttons = styled.div`
    display: flex;
`

const PageButton = styled.button`
    padding: 10px;
`