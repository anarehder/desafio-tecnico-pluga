import styled from 'styled-components';
import logoPluga from '../assets/images/pluga.png';
import loadingGif from '../assets/images/spinner.gif';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getPlugaData } from '../services/plugaAPI';

function SearchTool() {

    const [toolsData, setToolsData] = useState([]);
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const toolsData = await getPlugaData();
                setToolsData(toolsData);
                setCarregando(false);
            } catch (error) {
                setCarregando(false);
                alert("Não foi possível obter o dados!");
            }
        }
        getData();
    }, []);
    console.log(toolsData);
    return (
        <ContainerSearchTools>
            <Header>
                <img src={logoPluga} alt={"logo Pluga"} />
                <h1> As ferramentas que você mais ama, agora juntas. </h1>
            </Header>
            <SearchBarDiv style={{ color: 'gray' }}>
                <FaSearch size={24} />
                <SearchBarForm>
                    BUSCAR FERRAMENTA
                </SearchBarForm>
            </SearchBarDiv>

            {carregando === true ?
                <h1>
                    <img src={loadingGif} alt={"gif carregando"} />
                </h1> :
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
            }
            <PageButton>
                PRÓXIMA PÁGINA
            </PageButton>
        </ContainerSearchTools>
    )
}

export default SearchTool;

const ContainerSearchTools = styled.div`
  width: 100%;
  padding: 15px 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        width: 20%;
    }
`

const SearchBarDiv = styled.div`
    height: 50px;
    width: calc(100% - 20%);
    padding: 10px 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 50px;
    border: 1px solid #757575;
    gap: 15px;
`

const SearchBarForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
`

const Tools = styled.div`
    padding: 15px 50px;
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
    border-radius: 15px;
`

const PageButton = styled.button`
    padding: 10px;
`