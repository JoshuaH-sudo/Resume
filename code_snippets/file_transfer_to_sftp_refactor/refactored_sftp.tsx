/// Refactored Version
//useSftp.tsx
//A hook that holds the state variables for the sftp connection and all of its methods.
const [sftp_state, set_sftp_state] = useState<Sftp_state>({
    listing: [],
    cwd: '/',
    currentDir: '/',
    connection_id: null,
    isLoading: true,
    currentJobs: Object(),
    showCredRequired: false,
    host_id,
    service_id,
    window_id
  });

  ...

//Sftp.tsx
//The main component
 const { sftp_state, sftp_actions, credential_modal } = useSftp(
    service_id,
    host_id,
    window_id,
    close_window
  );
  const [pagination, set_pagination] = useState({
    pageSize: 25
  });
  const [search_query, set_search_query] = useState('');

	...
  
  <sftp_context.Provider value={{ sftp_state, sftp_actions }}>

  ...
  
    <Table_navigation />

	...

	<Dir_table
    table_props={{
      search: search,
      pagination: pagination,
      onTableChange: onTableChange
    }}
  />

	...
  </sftp_context.Provider>
