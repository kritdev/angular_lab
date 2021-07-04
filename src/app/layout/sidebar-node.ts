export interface SidebarNode {
  name: string;
  icon: string;
  children?: SidebarNode[];
}

export const TREE_DATA: SidebarNode[] = [
  {
    name: 'Catalog', icon: 'library_books',
    children: [
      {
        name: 'Products', icon: 'radio_button_checked'
      },
      {
        name: 'Categories', icon: 'radio_button_checked'
      },
      {
        name: 'Manufacturers', icon: 'radio_button_checked'
      },
      {
        name: 'Product reviews', icon: 'radio_button_checked'
      },
      {
        name: 'Product tags', icon: 'radio_button_checked'
      },
      {
        name: 'Attributes', icon: 'radio_button_checked',
        children: [
          {
            name: 'Product attributes', icon: 'radio_button_unchecked'
          },
          {
            name: 'Specification attributes', icon: 'radio_button_unchecked'
          },
          {
            name: 'Checkout attributes', icon: 'radio_button_unchecked'
          }
        ]
      }
    ]
  },
  {
    name: 'Sales', icon: 'shopping_cart',
    children: [
      {
        name: 'Orders', icon: 'radio_button_checked'
      },
      {
        name: 'Shipments', icon: 'radio_button_checked'
      },
      {
        name: 'Return requests', icon: 'radio_button_checked'
      },
      {
        name: 'Recurrin payments', icon: 'radio_button_checked'
      },
      {
        name: 'Gift cards', icon: 'radio_button_checked'
      },
      {
        name: 'Shopping carts and wishlists', icon: 'radio_button_checked'
      }
    ]
  },
  {
    name: 'Customers', icon: 'person_outline',
    children: [
      {
        name: 'Customers', icon: 'radio_button_checked'
      },
      {
        name: 'Customer roles', icon: 'radio_button_checked'
      },
      {
        name: 'Online customers', icon: 'radio_button_checked'
      },
      {
        name: 'Vendors', icon: 'radio_button_checked'
      },
      {
        name: 'Activity log', icon: 'radio_button_checked'
      },
      {
        name: 'Activity Types', icon: 'radio_button_checked'
      },
      {
        name: 'GDPR requests(log)', icon: 'radio_button_checked'
      }      
    ]
  },
  {
    name: 'Promotions', icon: 'sell',
    children: [
      {
        name: 'Discounts', icon: 'radio_button_checked'
      },
      {
        name: 'Affiliates', icon: 'radio_button_checked'
      },
      {
        name: 'Newsletter subscribers', icon: 'radio_button_checked'
      },
      {
        name: 'Campaigns', icon: 'radio_button_checked'
      }
    ]
  },
  {
    name: 'Content management', icon: 'widgets',
    children: [
      {
        name: 'Topics (pages)', icon: 'radio_button_checked'
      },
      {
        name: 'Message templates', icon: 'radio_button_checked'
      },
      {
        name: 'News items', icon: 'radio_button_checked'
      },
      {
        name: 'News comments', icon: 'radio_button_checked'
      },
      {
        name: 'Blog posts', icon: 'radio_button_checked'
      },
      {
        name: 'Blog comments', icon: 'radio_button_checked'
      },
      {
        name: 'Pools', icon: 'radio_button_checked'
      },
      {
        name: 'Forums', icon: 'radio_button_checked'
      }
    ]
  },
  {
    name: 'Configuration', icon: 'settings',
    children: [
      {
        name: 'Setting', icon: 'radio_button_checked',
        children: [
          {
            name: 'General settings', icon: 'radio_button_unchecked'
          },
          {
            name: 'Customer setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Order setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Shipping setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Tax setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Catalog setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Shopping card setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Reward setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'GDRP setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Vendor setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Blog setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'News setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Forum setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'Media setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'App setting', icon: 'radio_button_unchecked'
          },
          {
            name: 'All settings (advanced)', icon: 'radio_button_unchecked'
          }
        ]
      },
      {
        name: 'Email accounts', icon: 'radio_button_checked'
      },
      {
        name: 'Stores', icon: 'radio_button_checked'
      },
      {
        name: 'Countries', icon: 'radio_button_checked'
      },
      {
        name: 'Languages', icon: 'radio_button_checked'
      },
      {
        name: 'Currencies', icon: 'radio_button_checked'
      },
      {
        name: 'Payment methods', icon: 'radio_button_checked'
      },
      {
        name: 'Payment restrictions', icon: 'radio_button_checked'
      },
      {
        name: 'Tax providers', icon: 'radio_button_checked'
      },
      {
        name: 'Shipping', icon: 'radio_button_checked',
        children: [
          {
            name: 'Shipping providers', icon: 'radio_button_unchecked'
          },
          {
            name: 'Warehouses', icon: 'radio_button_unchecked'
          },
          {
            name: 'Pickup points', icon: 'radio_button_unchecked'
          },
          {
            name: 'Date and ranges', icon: 'radio_button_unchecked'
          },
          {
            name: 'Measures', icon: 'radio_button_unchecked'
          }
        ]
      },
      {
        name: 'Access control list', icon: 'radio_button_checked'
      },
      {
        name: 'Widgets', icon: 'radio_button_checked'
      },
      {
        name: 'Authentication', icon: 'radio_button_checked',
        children: [
          {
            name: 'External authentication', icon: 'radio_button_unchecked'
          },
          {
            name: 'Multi-factor authentication', icon: 'radio_button_unchecked'
          }
        ]
      },
      {
        name: 'Local plugins', icon: 'radio_button_checked'
      },
      {
        name: 'All plugins and themes', icon: 'radio_button_checked'
      }
    ]
  },
  {
    name: 'System', icon: 'view_list',
    children: [
      {
        name: 'System information', icon: 'radio_button_checked'
      },
      {
        name: 'Log', icon: 'radio_button_checked'
      },
      {
        name: 'Warnings', icon: 'radio_button_checked'
      },
      {
        name: 'Maintenance', icon: 'radio_button_checked'
      },
      {
        name: 'Message queue', icon: 'radio_button_checked'
      },
      {
        name: 'Schedule tasks', icon: 'radio_button_checked'
      },
      {
        name: 'Search engine friendly page name', icon: 'radio_button_checked'
      },
      {
        name: 'Templates', icon: 'radio_button_checked'
      },
    ]
  },
  {
    name: 'Reports', icon: 'trending_up',
    children: [
      {
        name: 'Sales summary',  icon: 'radio_button_checked'
      },
      {
        name: 'Low stock',  icon: 'radio_button_checked'
      },
      {
        name: 'Bestsellers',  icon: 'radio_button_checked'
      },
      {
        name: 'Product never purchaseed',  icon: 'radio_button_checked'
      },
      {
        name: 'Country sales',  icon: 'radio_button_checked'
      },
      {
        name: 'Customer reports',  icon: 'radio_button_checked',
        children: [
          {
            name: 'Registered customers', icon: 'radio_button_unchecked'
          }, 
          {
            name: 'Customers by order total', icon: 'radio_button_unchecked'
          }, 
          {
            name: 'Customers by number of orders', icon: 'radio_button_unchecked'
          }, 
        ]
      },      
    ]
  },
  {
    name: 'Help', icon: 'help',
    children: [
      {
        name: 'Help topics', icon: 'radio_button_checked'
      },
      {
        name: 'Community forums', icon: 'radio_button_checked'
      },
      {
        name: 'Premium support services', icon: 'radio_button_checked'
      },
    ]
  }
];


