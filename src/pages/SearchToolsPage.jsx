import styled from 'styled-components';
import logoPluga from '../assets/images/pluga.png';
import loadingGif from '../assets/images/spinner.gif';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getPlugaData } from '../services/plugaAPI';
import ToolComponent from '../components/ToolComponent';

function SearchTool() {
    const [toolsData, setToolsData] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [toolsByPage, setToolsByPage] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 12;

    function setPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentTools = toolsData.slice(startIndex, endIndex);
        setToolsByPage(currentTools);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const toolsDataInfo = await getPlugaData();
                setToolsData(toolsDataInfo);
                setToolsByPage(toolsDataInfo.slice(0, 12));
                setTotalPages(Math.ceil(toolsDataInfo.length / itemsPerPage));
                setCarregando(false);
            } catch (error) {
                setCarregando(false);
                alert("Não foi possível obter o dados!");
            }
        }
        getData();
    }, []);

    console.log(toolsByPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
          setPage(currentPage + 1);
        }
      };
    
      const prevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
          setPage(currentPage - 1);
        }
      };

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
                    {
                        toolsByPage.map((tool) => (
                            <ToolComponent key={tool.app_id} name={tool.name} icon={tool.icon} link={tool.link} color={tool.color} />
                        ))
                    }
                </Tools>
            }
            <Buttons>
                <PageButton onClick={prevPage} disabled={currentPage === 1}>
                    PÁGINA ANTERIOR
                </PageButton>
                <PageButton onClick={nextPage} disabled={currentPage === totalPages}>
                    PRÓXIMA PÁGINA
                </PageButton>
            </Buttons>

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
const Buttons = styled.div`
    display: flex;
`

const PageButton = styled.button`
    padding: 10px;
`