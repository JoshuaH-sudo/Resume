/**
  *Prevents the tab component itself from unmounting when tab display occurs
  */
const Tab_render: FC<Tab_render_props> = ({tab}) => {
  const {get_tab_component} = useTabManager();

  const tab_component = get_tab_component(tab.type);
  //This will ensure that the component does not continually keep being recreated and rerendered
  const [tab_render] = useState(tab_component(tab.props));

  return <EuiErrorBoundary>{tab_render}</EuiErrorBoundary>;
};

