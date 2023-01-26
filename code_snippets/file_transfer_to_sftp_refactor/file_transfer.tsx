//// Old Version of the sftp plugin, originally named file_transfer 

/**
  * All the UI elements and logic handling for this plugin and component are in this one component.
  * The entire file_transfer component was over 1100 lines long,
  * after the refactor the main component was less than 100 lines and no child component went over 300+ lines.
  */

/**
  * The massive state later becomes refactored into smaller chucks and 
  * was separated out to components that will manage their states internally, 
  * while any common states was put into a context to be shared to all child components.
  */
    this.state = {
      mouseX: 0,
      mouseY: 0,
      errorLoading: '',
      showCredRequired: false,
      contextMenuXpos: 0,
      contextMenuYpos: 0,
      showMenu: false,
      contextMenuItem: null,
      show_confirm_prompt: false,
      confirm_prompt_props: {
        title: 'Warning!',
        description: 'This will recursively delete the directory, do you want to proceed?',
        colour: 'primary',
        confirm_func: () => null,
        clear_func: () => null
      },

      hasRefreshed: false,
      directoryView: [],
      cwd: '/',
      currentDir: '/',

      renameItem: '',
      newName: '',
      renameInvalid: false,

      isLoading: true,
      isUploading: true,

      connection: null,
      currentJobs: Object(),
      pagination: {
        pageSize: 25
      },

      search_query: ''
    };

/**
  * The setup/mount and teardown/unmount handlers
  */
  componentWillUnmount(): void {
    /**
      * In the later refactored version, the async/await syntax was used to handle promises.
      */
    if (this.state.connection != null) SFTP.endConnection(this.state.connection).catch(() => null);
  }
  
  componentDidMount(): void {
    //need to set up the input to have a identifying class name for the window change shortcut
    document
      .getElementById(`container-${this.props.window_id}`)
      .getElementsByClassName('euiFieldSearch')[0].className += ' main_input';

    getCurrentUserInfo()
      .then((result) => {
        this.user_id = result._id;
      })
      .catch(console.error);
    this.initialize_Sftp_connection();
  }

 return (
  //...
  <>
  /**
    * Section handled the navigation of the file system and was put into Table_navigation.tsx
    */
    <EuiButtonIcon
      size="xs"
      id="home"
      aria-label="home"
      iconType="home"
      onClick={() => this.retrieveDirectoryListings('')}
    />

    <EuiButtonIcon
      aria-label="refresh"
      size="xs"
      iconType="refresh"
      onClick={() => this.refresh()}
    />

    <EuiBreadcrumbs breadcrumbs={this.currentNavPath()} />

    <NewDirTextField
      create={(newDir: string) => {
        this.setState({ showMenu: false }, () => this.makeDirectory(newDir));
      }}
    />

    <EuiFilePicker
      id="fileUpload"
      multiple
      disabled={this.state.isLoading}
      display="default"
      initialPromptText="File(s) upload"
      onChange={onReceivingFiles}
    />
    //...
    /**
      * This table was moved into Dir_table.tsx
      */
      <EuiInMemoryTable
        items={this.state.directoryView}
        rowHeader="type"
        columns={dirViewInfo}
        search={search}
        pagination={this.state.pagination}
        error={this.state.errorLoading}
        sorting={sorting}
        loading={this.state.isLoading}
        onTableChange={this.onTableChange}
      />
  //...
  /**
    * This rendered a floating popup menu that provided table actions. 
    * It was later put into Context_menu.tsx that was then controlled by Dir_table.tsx
    */
  <Fragment>
    {this.state.showMenu
      ? this.ContextMenu(
          this.state.contextMenuXpos,
          this.state.contextMenuYpos,
          this.state.contextMenuItem
        )
      : ''}
  </Fragment>
  //..
</>
);
