export enum KEYS {
  BACK_TICK = '`',
  //there values wont be used in checks, so its
  CTRL = 'Control',
  SHIFT = 'Shift'
 //...
}

export type Keyboard_shortcut_names =
  | 'close_window'
  | 'force_close_window'
  | 'next_window'
  | 'duplicate_window'
//...


export type Keyboard_shortcut_combo = string[];

//be carful to consider the uppercase form of the key if using shift
export const keyboard_shortcuts: Record<Keyboard_shortcut_names, Keyboard_shortcut_combo> = {
  close_window: [KEYS.CTRL, 'd'],
  force_close_window: [KEYS.CTRL, KEYS.SHIFT, 'D'],
  next_window: [KEYS.CTRL, KEYS.BACK_TICK],
  duplicate_window: [KEYS.CTRL, KEYS.SHIFT, 'Z'],
  //...
}

export const matches_shortcut = (
  keyboard_shortcut: Keyboard_shortcut_names,
  event: KeyboardEvent
): boolean => {
  const combination = keyboard_shortcuts[keyboard_shortcut];
  if (!combination) return false;

  let correct_combos: boolean[] = [];
  combination.forEach((key) => {
    let combo_match = false;
    //search the event for the correct key combinations
    switch (key) {
      case KEYS.CTRL:
        combo_match = event.ctrlKey;
        break;
      case KEYS.SHIFT:
        combo_match = event.shiftKey;
        break;
      default:
        combo_match = event.key === key;
        break;
    }
    correct_combos.push(combo_match);
  });
//...
}
