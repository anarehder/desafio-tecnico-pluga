export interface Tool {
    app_id: string;
    color: string;
    icon: string;
    link: string;
    name: string;
  }
  
  export interface SearchToolProps {
    toolsDataInfo: Tool[];
  }