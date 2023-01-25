//SSH_tab.tsx
export interface SSH_tab_props extends Common_tab_props {
  host: List_host;
}

const SSH_tab: FC<SSH_tab_props> = ({host, tab_id}) => {

//Hosts_table.tsx
//This component allows the user to preform special actions on hosts,
//like creating a interface tab to ssh to the host.

//...
  const ssh_host_action = (host: Smallfoot_list_host) => {
    const tab_name = `SSH: ${host.name}`;
    //As the props are defined in the tab component itself, 
    //and are then mapped to a key (like "ssh"), 
    //you cannot accidentally forget to add a prop when creating a tab.
    create_tab(tab_name, "ssh", { host });
  };
//..
