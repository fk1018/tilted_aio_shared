export interface IAccount {
  id: string;
  userName: string;
  password: string;
  siteId: string;
}
export interface IAccountForm {
  id?: string;
  userName?: string;
  password?: string;
  siteId?: string;
}
export interface IAction<t> {
  payload: t;
  type: string;
}
export interface IAddress {
  address: string;
  addressName: string;
  addressAdditionalInfo?: string;
  city: string;
  country: string;
  id: string;
  isPrivacyAddress: boolean;
  state: string;
  zip: string;
}
export interface IAddressForm {
  address?: string;
  addressName?: string;
  addressAdditionalInfo?: string;
  country?: string;
  city?: string;
  id?: string;
  isPrivacyAddress?: boolean;
  state?: string;
  zip?: string;
}
export interface IAddressGroup {
  addresses: string[];
  id: string;
  name: string;
}
export interface IBrowserGroup {
  id: string;
  browserGroupName?: string;
}
export interface IBrowserGroupForm {
  browserGroupName?: string;
  id?: string;
  browsers?: string[];
}
export interface IBrowser {
  browserGroupId?: string;
  browserProfile?: string;
  browserURL: string;
  cookies?: any[];
  id: string;
  isAdidas?: boolean;
  isYeezySupply?: boolean;
  name: string;
  pullFromProxyGroup: boolean;
  inBrowserGroup: boolean;
  proxyId?: string;
  proxyGroup?: string;
  useBrowserProfile: boolean;
}
export interface IBrowserForm {
  amtToCreate?: number;
  browserProfile?: string;
  browserGroupId?: string;
  browserURL?: string;
  cookies?: any[];
  id?: string;
  isAdidas?: boolean;
  isYeezySupply?: boolean;
  name?: string;
  proxy?: IProxy;
  proxyGroupId?: string;
  pullFromProxyGroup?: boolean;
  inBrowserGroup?: boolean;
  useBrowserProfile?: boolean;
}
export interface ICreditCard {
  CVV: string;
  expirationMonth: string;
  expirationYear: string;
  id: string;
  isPrivacyCard: boolean;
  name: string;
  number: string;
  nameOnCard: string;
}
export interface ICreditCardForm {
  CVV?: string;
  expirationMonth?: string;
  expirationYear?: string;
  id?: string;
  isPrivacyCard?: boolean;
  name?: string;
  number?: string;
  nameOnCard?: string;
}
export interface ICreditCardGroup {
  creditCards: string[];
  id: string;
  name: string;
}
export interface IMenuItem {
  active: boolean;
  name: string;
}
export interface INavigation {
  activeIndex: number;
}
export interface IProfile {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  profileName: string;
}
export interface IProfileForm {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  profileName?: string;
}
export interface IProxy {
  id: string;
  inGroup?: any;
  inUse: boolean;
  isBannedOnSite?: any;
  isWorking?: any;
  ip: string;
  password: string;
  port: string;
  userName: string;
  fullProxy: string;
  proxyGroupId?: string;
}
export interface IProxyGroup {
  id?: string;
  proxyGroupName: string;
  proxies: string[];
}
export interface IProxyGroupForm {
  id?: string;
  proxyGroupName?: string;
}
export interface IProxiesForm {
  id?: string;
  proxies?: string;
  putInProxyGroup?: boolean;
  proxyGroup?: string;
}
export interface ISite {
  id: string;
  name: string;
}
export interface IUpdateProxiesGroup {
  proxyGroupId: string;
  proxies: string[];
  name?: string;
}
export interface IState {
  accounts: IAccount[];
  accountForm: IAccountForm;
  addresses: IAddress[];
  addressForm: IAddressForm;
  addressGroups: IAddressGroup[];
  browserForm: IBrowserForm;
  browserGroups: IBrowserGroup[];
  browserGroupForm: IBrowserGroupForm;
  browserProfiles: string[];
  browsers: IBrowser[];
  creditCardForm: ICreditCardForm;
  creditCardGroups: ICreditCardGroup[];
  creditCards: ICreditCard[];
  navigation: INavigation;
  profileForm: IProfileForm;
  proxies: IProxy[];
  proxiesForm: IProxiesForm;
  proxyGroupForm: IProxyGroupForm;
  proxyGroups: IProxyGroup[];
  profiles: IProfile[];
  sites: ISite[];
  tasks: ITask[];
  taskForm: ITaskForm;
  taskTypes: ITaskType[];
}
export interface ITask {
  addressId?: string;
  accountId?: string;
  creditCardId?: string;
  id: string;
  name: string;
  profileId?: string;
  privacyCardMode: boolean;
  proxyId?: string;
  proxyGroupId?: string;
  requiresLogin: boolean;
  siteId: string;
  taskTypeId: string;
  useProxyGroup: boolean;
}
export interface ITaskForm {
  addressId?: string;
  accountId?: string;
  creditCardId?: string;
  id?: string;
  name?: string;
  profileId?: string;
  privacyCardMode: boolean;
  proxyId?: string;
  proxyGroupId?: string;
  requiresLogin?: boolean;
  siteId?: string;
  taskTypeId?: string;
  useProxyGroup: boolean;
}
export interface ITaskGroup {
  id: string;
  name: string;
  tasks: string[];
}
export interface ITaskType {
  id: string;
  name: string;
}
