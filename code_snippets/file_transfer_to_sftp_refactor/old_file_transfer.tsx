//// Old Version 
//File_transfer.tsx
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

//...
