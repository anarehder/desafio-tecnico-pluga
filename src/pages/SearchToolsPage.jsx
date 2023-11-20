import styled from 'styled-components';
import loadingGif from '../assets/images/spinner.gif';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getPlugaData } from '../services/plugaAPI';
import ToolComponent from '../components/ToolComponent';
import ToolModal from '../modal/ToolModal';
import { useToolContext } from '../contexts/ToolContext';
import HeaderComponent from '../components/HeaderComponent';

function SearchTool() {
    const [toolsData, setToolsData] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [toolsByPage, setToolsByPage] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 12;
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTools, setFilteredTools] = useState([]);
    const [selectedTool, setSelectedTool] = useState(null);
    const { addRecentTool } = useToolContext();

    function openModal(tool){
        setSelectedTool(tool);
    }

    function closeModal(tool) {
        addRecentTool(tool);
        setSelectedTool(null);
    }

    function setPage(page, array) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentTools = array.slice(startIndex, endIndex);
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

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            if (searchTerm.length > 0) {
                setPage(currentPage + 1, filteredTools);
            } else {
                setPage(currentPage + 1, toolsData);
            }
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            if (searchTerm.length > 0) {
                setPage(currentPage - 1, filteredTools);
            } else {
                setPage(currentPage - 1, toolsData);
            }
        }
    };

    const handleSearch = (event) => {
        const term = event.target.value;
        console.log(term);
        const filtered = toolsData.filter(tool =>
            tool.name.toLowerCase().includes(term.toLowerCase())
        );
        console.log(filtered);
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
        setPage(1, filtered);
        setSearchTerm(term);
        setFilteredTools(filtered);
    };

    return (
        <ContainerSearchTools>
            <HeaderComponent />
            <SearchBarDiv style={{ color: 'gray' }}>
                <FaSearch size={24} />
                <SearchBarForm>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </SearchBarForm>
            </SearchBarDiv>

            {carregando === true ?
                <h1>
                    <img src={loadingGif} alt={"gif carregando"} />
                </h1> :
                filteredTools.length === 0 && searchTerm.length === 0 ?
                    <Tools>
                        {toolsByPage.map((tool) => (
                            <ToolComponent key={tool.app_id} tool={tool} openModal={openModal} />))
                        }
                    </Tools> :
                    filteredTools.length === 0 && searchTerm.length > 0 ?
                        <h1> Sem resultados para esta busca </h1> :
                        <Tools>
                            {toolsByPage.map((tool) => (
                                <ToolComponent key={tool.app_id} tool={tool} openModal={openModal} />))
                            }
                        </Tools>
            }
            {selectedTool && (
                <ToolModal tool={selectedTool} closeModal={closeModal}/>
            )}
            <Buttons>
                <PageButton onClick={prevPage} disabled={currentPage === 1}>
                    PÁGINA ANTERIOR
                </PageButton>
                <PageButton onClick={nextPage} disabled={currentPage === totalPages}>
                    PRÓXIMA PÁGINA
                </PageButton>
            </Buttons>
        </ContainerSearchTools >
    )
}
// TO DO: COMPONENTES BUTTONS, HEADER PARA MINIMAR A PAGE?
// TO DO: FUNCOES PAGINACAO - JUNTAR
// TO DO: TESTE DE RENDERIZAÇÃO REACT

export default SearchTool;

const ContainerSearchTools = styled.div`
  width: 100%;
  padding: 0 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const SearchBarDiv = styled.div`
    height: 40px;
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
    min-height: 650px;
    padding: 10px 90px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 0 35px;
`
const Buttons = styled.div`
    display: flex;
`

const PageButton = styled.button`
    padding: 10px;
`