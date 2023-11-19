import styled from 'styled-components';

function SearchTool(){
    return (
        <Container>
            Busque nessa página suas ferramentas
            <SearchBarForm>
                Barra de Busca
            </SearchBarForm>
            <Tools>
                <ToolBlock>
                    Ferramenta 1
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 2
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 3
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 4
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 5
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 6
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 7
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 8
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 9
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 10
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 11
                </ToolBlock>
                <ToolBlock>
                    Ferramenta 12
                </ToolBlock>
            </Tools>
        </Container>
    )
}

export default SearchTool;

const Container = styled.div`
  width: 100%;
  padding: 15px 350px;
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    background-color: blue;
`
const Tools = styled.div`
    padding: 15px 50px;
    background-color: red;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

const ToolBlock = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
`