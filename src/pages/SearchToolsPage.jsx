import styled from 'styled-components';

function SearchTool(){
    return (
        <Container>
            Busque nessa página suas ferramentas
        </Container>
    )
}

export default SearchTool;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`