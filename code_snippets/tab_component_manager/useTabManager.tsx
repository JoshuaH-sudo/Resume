  //since tab_id cannot be set before tab is created, it needs to be removed from the function param props type
  const create_tab = <T extends Tab_types>(
    tab_label: string,
    tab_type: T,
    //Because all available tabs have their props typed, when create_tab() is called, 
    //the user will know what it needs to provided to correctly create the tab component they want.
    props: Omit<Tab_component_props<T>, "tab_id">
  ) => {
    const id = v4();
    const updated_props: Tab_component_props<T> = { tab_id: id, ...props };
    const new_tab_index = tab_store.tabs.length;
    const new_tab: Tab<T> = {
      id,
      index: new_tab_index,
      label: tab_label,
      type: tab_type,
      props: updated_props,
    };

    dispatch(add_tab(new_tab));
    dispatch(set_selected_tab(id));
  };
