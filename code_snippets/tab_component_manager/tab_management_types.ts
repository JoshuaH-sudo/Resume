import Home_tab from "../../components/tabs/home/Home_tab";
import SSH_tab from "../../components/tabs/ssh/SSH_tab";
//This types are used in the redux store and in the useTabManager

/**
  * List of all available tabs that can be created
  */
export const tab_type_component_map = {
  home: Home_tab,
  ssh: SSH_tab,
} as const;

/**
  * All tab types
  */
export type Tab_types = keyof typeof tab_type_component_map;

/**
  * Common props that each tab will have access to
  */
export interface Common_tab_props {
  tab_id: string;
}

/**
  * List of each tab's props, this will help with knowing which props to give when creating the tab later.
  */
export type Tab_component_props<T extends Tab_types> =
  typeof tab_type_component_map[T]["defaultProps"] & Common_tab_props;

export interface Tab<T extends Tab_types> {
  id: string;
  index: number;
  label: string;
  type: T;
  //since jsx elements are not serializable on their own,
  //it is better practice to save the component props and then call the component later with the props stored in this redux store.
  props: Tab_component_props<T>;
}
