/// Refactored Version
//useSftp.tsx

//A hook that holds the common shared state variables and manages the sftp connection and all of its methods.
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

//The setup/mount and teardown/unmount handlers
  useEffect(() => {
    initialize_Sftp_connection();
  }, []);

  //Need to wait for the connection_id to be defined before setting the unmount side effect to close the connection.
  useEffect(() => {
    return () => {
      if (sftp_state.connection_id != null) endConnection();
    };
  }, [sftp_state.connection_id]);

//...
 return {
    sftp_state: sftp_state,
    sftp_actions: {
      initialize_Sftp_connection,
      endConnection,
      retrieveDirectoryListings,
      cd_to_path,
      makeDirectory,
      //...
    },
    credential_modal
  };

//Sftp.tsx
//The main component
 const { sftp_state, sftp_actions, credential_modal } = useSftp(
    service_id,
    host_id,
    window_id,
    close_window
  );
  //Unique states that are not shared are stored in their own state next to the component they will be used in.
  const [pagination, set_pagination] = useState({
    pageSize: 25
  });
  const [search_query, set_search_query] = useState('');

return (
	//...
  //This provider shares the common state variables across all its child components.
  <sftp_context.Provider value={{ sftp_state, sftp_actions }}>
    //...
    //This component provides UI elements to navigate through the remote host file system.
    //Will also update the search_query state for Dir_table
    <Table_navigation />
    //...
    //This will display the result (files, directories, etc.) from the sftp connection
    <Dir_table
      table_props={{
        search: search,
        pagination: pagination,
        onTableChange: onTableChange
      }}
    />
    //...
  </sftp_context.Provider>
  //...
)
