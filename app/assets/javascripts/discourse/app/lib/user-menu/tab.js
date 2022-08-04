/**
 * abstract class representing a tab in the user menu
 */
export default class UserMenuTab {
  constructor(currentUser, siteSettings, site) {
    this.currentUser = currentUser;
    this.siteSettings = siteSettings;
    this.site = site;
  }

  /**
   * @returns {boolean} Controls whether the tab should be rendered or not.
   */
  get shouldDisplay() {
    return true;
  }

  /**
   * @returns {number} Controls the blue badge (aka bubble) count that's rendered on top of the tab. If count is zero, no badge is shown.
   */
  get count() {
    return 0;
  }

  /**
   * @returns {string} Dasherized version of the component name that should be rendered in the panel area when the tab is active.
   */
  get panelComponent() {
    throw new Error("not implemented");
  }

  /**
   * @returns {string} ID for the tab. Must be unique.
   */
  get id() {
    throw new Error("not implemented");
  }

  /**
   * @returns {string} Icon for the tab.
   */
  get icon() {
    throw new Error("not implemented");
  }
}

export const customTabsClasses = [];

export function registerUserMenuTab(func) {
  customTabsClasses.push(func(UserMenuTab));
}

export function resetUserMenuTabs() {
  customTabsClasses.clear();
}
