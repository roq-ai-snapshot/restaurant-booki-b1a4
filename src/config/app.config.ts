interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Read menu items', 'Book a table', 'Place an order'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'Manage table reservations',
    'Manage restaurant orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d4765ef4-5f59-40c3-9d05-2d8f0d28fef6',
};
