import styled from 'styled-components';

function SearchTool(){
    return (
        <Container>
            Busque nessa página suas ferramentas
            <SearchBarForm>
                Barra de Busca
            </SearchBarForm>
            <Tools>
                Lista de Ferramentas
            </Tools>
        </Container>
    )
}

export default SearchTool;

const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
  gap: 15px;
`

const SearchBarForm = styled.form`
    height: 50px;
    width: 100%;
    background-color: blue;
`
const Tools = styled.div`
    height: 300px;
    width: 100%;
    background-color: red;
`