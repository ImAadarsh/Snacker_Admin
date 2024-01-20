const adminRoutes = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    url: 'dashboard',
    id: 'dashboard_01',
  },
  {
    name: 'branches',
    icon: 'shop',
    url: 'branches',
    id: 'branches',
  },
  {
    name: 'my.branch',
    icon: 'shop',
    url: 'my-branch',
    id: 'my-branch',
  },
  {
    name: 'my.branch.galleries',
    icon: 'fiImage',
    url: 'my-branch-galleries',
    id: 'my-branch-galleries',
  },
  {
    name: 'pos.system',
    icon: 'laptop',
    url: 'pos-system',
    id: 'pos.system_01',
  },
  {
    name: 'order',
    id: 'order.management',
    icon: 'fiShoppingCart',
    submenu: [
      {
        name: 'all.orders',
        icon: 'fiShoppingCart',
        url: 'orders-board',
        id: 'orders-board',
      },
      {
        name: 'delivery.orders',
        icon: 'TbTruckDelivery',
        url: 'orders-board/delivery',
        id: 'order-list-delivery',
      },
      {
        name: 'pickup.orders',
        icon: 'lightning',
        url: 'orders-board/pickup',
        id: 'order-list-pickup',
      },
      {
        name: 'scheduled.orders',
        icon: 'clock',
        url: 'orders-board/scheduled',
        id: 'order-list-schedule',
      },
      {
        name: 'reviews',
        icon: 'star',
        url: 'reviews/order',
        id: 'order-review_01',
      },
      {
        name: 'refunds',
        icon: 'TbReceiptRefund',
        url: 'refunds',
        id: 'refunds_02',
      },
      {
        icon: 'RiFileSettingsLine',
        url: 'settings/orderStatus',
        name: 'order.status',
        id: 'order.status',
      },
    ],
  },
  {
    name: 'reservation',
    id: 'order_management',
    icon: 'BookOutlined',
    submenu: [
      {
        name: 'reservation.list',
        icon: 'calendar',
        url: 'booking-list',
        id: 'admin/booking-list',
        children: [],
      },
      {
        name: 'reservation',
        icon: 'BsCalendarCheck',
        url: 'booking',
        id: 'admin/booking',
        children: [],
      },
      {
        name: 'reservation.zone',
        icon: 'BiMapPin',
        url: 'booking/zone',
        id: 'admin-reservation-zone',
        children: [],
      },
      {
        name: 'tables.and.qrcode',
        icon: 'QrcodeOutlined',
        url: 'booking/tables',
        id: 'admin-reservation-tables',
        children: [],
      },
      {
        name: 'reservation.time',
        icon: 'AiOutlineFieldTime',
        url: 'booking/time',
        id: 'admin-reservation-time',
        children: [],
      },
    ],
  },
  {
    name: 'deliveryman',
    id: 'deliveryman.management',
    icon: 'CarOutlined',
    submenu: [
      {
        name: 'deliveries.list',
        icon: 'TbTruckDelivery',
        id: 'deliveries_list',
        url: 'deliveries/list',
      },
      {
        name: 'deliveries.map',
        icon: 'TbSitemap',
        id: 'deliveries_map',
        url: 'deliveries/map',
      },
      {
        name: 'delivery.statistics',
        icon: 'ImStatsDots',
        id: 'delivery.statistics',
        url: 'delivery/statistics',
      },
      {
        name: 'deliveryboy.reviews',
        icon: 'TbTruckDelivery',
        url: 'reviews/deliveryboy',
        id: 'deliveryboy-reviews_01',
      },
    ],
  },
  {
    name: 'food',
    id: 'food.management',
    icon: 'branches',
    submenu: [
      {
        name: 'foods',
        icon: 'dropbox',
        url: 'catalog/products',
        id: 'food',
      },
      {
        name: 'discounts',
        icon: 'euroCircle',
        url: 'catalog/discounts',
        id: 'discounts',
        children: [],
      },
      {
        name: 'boxes',
        icon: 'recept',
        url: 'catalog/boxes',
        id: 'boxes',
      },
      {
        name: 'addons',
        icon: 'SlPuzzle',
        url: 'catalog/addons',
        id: 'addons',
      },
      {
        name: 'extras',
        icon: 'branches',
        url: 'catalog/extras/list',
        id: 'extras',
        children: [
          {
            name: 'extra.group',
            icon: 'groupOutlined',
            url: 'catalog/extras',
            id: 'extra.group',
          },
          {
            name: 'extra.value',
            icon: 'unGroupOutlined',
            url: 'catalog/extras/value',
            id: 'extra.value',
          },
        ],
      },
      {
        name: 'categories',
        icon: 'appStore',
        url: 'catalog/categories',
        id: 'categories',
      },
      {
        name: 'boxes.categories',
        icon: 'appStore',
        url: 'catalog/boxes-categories',
        id: 'boxes.categories',
      },
      {
        name: 'product.reviews',
        icon: 'skin',
        url: 'reviews/product',
        id: 'product-review',
      },
    ],
  },
  {
    name: 'content',
    id: 'content.management',
    icon: 'appStoreAdd',
    submenu: [
      {
        name: 'brands',
        icon: 'appStoreAdd',
        url: 'catalog/brands',
        id: 'brands',
      },
      {
        name: 'career',
        icon: 'CaretUpOutlined',
        url: 'careers/list',
        id: 'career.list',
        children: [
          {
            name: 'career',
            icon: 'caretUp',
            url: 'catalog/career',
            id: 'catalog.career',
            children: [],
          },
          {
            name: 'career.categories',
            icon: 'careerCategory',
            url: 'catalog/career-categories',
            id: 'career.categories',
            children: [],
          },
        ],
      },
      {
        name: 'stories',
        icon: 'BsClockHistory',
        url: 'stories',
        id: 'stories',
        children: [],
      },
      {
        name: 'units',
        icon: 'disconnect',
        url: 'catalog/units',
        id: 'units',
      },
      {
        name: 'banners',
        icon: 'bsImage',
        url: 'banners',
        id: 'banners',
      },
      {
        name: 'blogs',
        url: 'blogs',
        icon: 'form',
        id: 'blogs_02',
      },
      {
        name: 'gallery',
        url: 'gallery',
        icon: 'fiImage',
        id: 'gallery',
      },
      {
        name: 'notifications',
        icon: 'notificationsActive',
        url: 'notifications',
        id: 'notifications',
      },
    ],
  },
  {
    name: 'customer',
    id: 'customer.management_02',
    icon: 'wallet',
    submenu: [
      {
        name: 'wallets',
        icon: 'wallet',
        url: 'wallets',
        id: 'wallets_01',
      },
      {
        name: 'users',
        icon: 'user',
        url: 'users',
        id: 'user_list',
        children: [
          {
            icon: 'user',
            url: 'users/user',
            name: 'clients',
            id: 'user',
          },
          {
            icon: 'userGroupAdd',
            url: 'users/admin',
            name: 'users',
            id: 'userGroupAdd',
          },
          {
            icon: 'userSwitch',
            url: 'users/role',
            name: 'roles',
            id: 'userSwitch',
          },
        ],
      },
      {
        name: 'email.subscriber',
        icon: 'mail',
        url: 'email/subscriber',
        id: 'email.subscriber_01',
        children: [
          {
            icon: 'MdNotificationAdd',
            url: 'subscriber',
            name: 'subscriber',
            id: 'subscriber',
          },
          {
            icon: 'MdNotificationAdd',
            url: 'message/subscriber',
            name: 'message.subscriber',
            id: 'message.subscriber',
          },
        ],
      },
    ],
  },
  {
    name: 'transaction',
    id: 'transaction.management',
    icon: 'transaction',
    submenu: [
      {
        name: 'transactions',
        icon: 'transaction',
        url: 'transactions',
        id: 'transactions',
      },
      {
        name: 'payout.requests',
        icon: 'dollar',
        url: 'payout-requests',
        id: 'payout-requests',
      },
      {
        name: 'payouts',
        icon: 'moneyOut',
        url: 'payouts',
        id: 'admin.payouts',
      },
    ],
  },
  {
    name: 'marketing',
    id: 'restaurant.management_05',
    icon: 'copyright',
    submenu: [
      {
        icon: 'referral',
        url: 'settings/referal',
        name: 'referral',
        id: 'referral_02',
      },
      {
        icon: 'GiftOutlined',
        name: 'bonus',
        url: 'bonus/list',
        id: 'bonus_02',
      },
    ],
  },
  {
    name: 'analitics.and.reports',
    id: 'analytics',
    icon: 'products',
    submenu: [
      {
        name: 'food',
        icon: 'products',
        url: 'report/products',
        id: 'report-products',
      },
      {
        name: 'order',
        icon: 'orders',
        url: 'report/orders',
        id: 'report-orders',
      },
      {
        name: 'stock',
        icon: 'stock',
        url: 'report/stock',
        id: 'report-stock',
      },
      {
        name: 'category',
        icon: 'categories',
        url: 'report/categories',
        id: 'report-categories',
      },
      {
        name: 'overview',
        icon: 'overview',
        url: 'report/overview',
        id: 'report-overview',
      },
      {
        name: 'revenue',
        icon: 'revenue',
        url: 'report/revenue',
        id: 'report-revenue',
      },
      {
        name: 'variation',
        icon: 'variation',
        url: 'report/extras',
        id: 'report-variation',
      },
    ],
  },
  {
    name: 'business.settings',
    id: 'business.settings_02',
    icon: 'settings',
    submenu: [
      {
        icon: 'settings',
        url: 'settings/general',
        name: 'settings.general',
        id: 'settings.general_02',
      },
      {
        icon: 'moneyCollect',
        url: 'currencies',
        name: 'currencies',
        id: 'currencies',
      },
      {
        icon: 'wallet',
        url: 'settings/payments',
        name: 'payments',
        id: 'payments',
      },
      {
        icon: 'payload',
        url: 'payment-payloads',
        name: 'payment.payloads',
        id: 'payment.payloads',
      },
      {
        icon: 'message',
        url: 'settings/sms-payload',
        name: 'sms-payload',
        id: 'sms-payload',
      },
      {
        icon: 'emailSettings',
        url: 'settings/emailProviders',
        name: 'email.provider',
        id: 'settings_email.provider_02',
      },
      {
        icon: 'notificationsActive',
        url: 'settings/firebase',
        name: 'notification.settings',
        id: 'notification.settings',
      },
      {
        icon: 'instagram',
        url: 'settings/social',
        name: 'social.settings',
        id: 'instagram_social-settings_01',
      },
      {
        icon: 'GrAppleAppStore',
        url: 'settings/app',
        name: 'app.settings',
        id: 'app-settings',
      },
      {
        icon: 'settings',
        url: 'settings',
        name: 'page.setup',
        id: 'page.setup',
        children: [
          {
            icon: 'questionCircle',
            url: 'settings/faqs',
            name: 'FAQ',
            id: 'faq',
          },
          {
            icon: 'paperClip',
            url: 'settings/terms',
            name: 'terms',
            id: 'terms',
          },
          {
            icon: 'lock',
            url: 'settings/policy',
            name: 'policy',
            id: 'policy',
          },
          {
            icon: 'RiPageSeparator',
            url: 'pages',
            name: 'pages',
            id: 'pages',
          },
        ],
      },
    ],
  },
  {
    name: 'system.settings',
    id: 'system.settings_01',
    icon: 'global',
    submenu: [
      {
        icon: 'global',
        url: 'settings/languages',
        name: 'languages',
        id: 'languages_02',
      },
      {
        icon: 'translation',
        url: 'settings/translations',
        name: 'translations',
        id: 'translations_01',
      },
      {
        icon: 'database',
        url: 'settings/backup',
        name: 'backup',
        id: 'backup_01',
      },
      {
        icon: 'tool',
        url: 'settings/system-information',
        name: 'system.information',
        id: 'settings/system-informations_tool_01',
      },
      {
        icon: 'cloudUpload',
        url: 'settings/update',
        name: 'update',
        id: 'update',
      },
      {
        icon: 'AiOutlineClear',
        url: 'settings/cashClear',
        name: 'clear.cash',
        id: 'clear_cash_02',
      },
    ],
  },
  {
    name: 'logout',
    icon: 'logout',
    url: '',
    id: 'logout_04',
  },
];

const managerRoutes = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    url: 'dashboard',
    id: 'dashboard_02',
  },
  {
    name: 'branches',
    icon: 'shop',
    url: 'branches',
    id: 'branches',
  },
  {
    name: 'pos.system',
    icon: 'laptop',
    url: 'pos-system',
    id: 'pos_system_02',
  },
  {
    name: 'order',
    id: 'order.management',
    icon: 'fiShoppingCart',
    submenu: [
      {
        name: 'all.orders',
        icon: 'fiShoppingCart',
        url: 'orders-board',
        id: 'orders-board',
      },
      {
        name: 'delivery.orders',
        icon: 'TbTruckDelivery',
        url: 'orders-board/delivery',
        id: 'order-list-delivery',
      },
      {
        name: 'pickup.orders',
        icon: 'lightning',
        url: 'orders-board/pickup',
        id: 'order-list-pickup',
      },
      {
        name: 'scheduled.orders',
        icon: 'clock',
        url: 'orders-board/scheduled',
        id: 'order-list-schedule',
      },
      {
        name: 'reviews',
        icon: 'star',
        url: 'reviews/order',
        id: 'order-review_01',
      },
      {
        name: 'refunds',
        icon: 'TbReceiptRefund',
        url: 'refunds',
        id: 'refunds_02',
      },
      {
        icon: 'RiFileSettingsLine',
        url: 'settings/orderStatus',
        name: 'order.status',
        id: 'order.status',
      },
    ],
  },
  {
    name: 'deliveryman',
    id: 'deliveryman.management',
    icon: 'CarOutlined',
    submenu: [
      {
        name: 'deliveries.list',
        icon: 'TbTruckDelivery',
        id: 'deliveries_list',
        url: 'deliveries/list',
      },
      {
        name: 'deliveries.map',
        icon: 'TbSitemap',
        id: 'deliveries_map',
        url: 'deliveries/map',
      },
      {
        name: 'delivery.statistics',
        icon: 'ImStatsDots',
        id: 'delivery.statistics',
        url: 'delivery/statistics',
      },
      {
        name: 'deliveryboy.reviews',
        icon: 'TbTruckDelivery',
        url: 'reviews/deliveryboy',
        id: 'deliveryboy-reviews_01',
      },
    ],
  },
  {
    name: 'restaurant',
    id: 'restaurant.management_01',
    icon: 'shop',
    submenu: [
      {
        name: 'shop.tag',
        icon: 'shop',
        url: 'shop-tag',
        id: 'tag',
      },
      {
        name: 'categories',
        icon: 'appStore',
        url: 'catalog/shop/categories',
        id: 'shop_categories',
      },
    ],
  },
  {
    name: 'food',
    id: 'food_management',
    icon: 'branches',
    submenu: [
      {
        name: 'foods',
        icon: 'dropbox',
        url: 'catalog/products',
        id: 'food',
      },
      {
        name: 'addons',
        icon: 'SlPuzzle',
        url: 'catalog/addons',
        id: 'addons',
      },
      {
        name: 'extras',
        icon: 'branches',
        url: 'catalog/extras/list',
        id: 'extras',
        children: [
          {
            name: 'extra.group',
            icon: 'groupOutlined',
            url: 'catalog/extras',
            id: 'extra_group',
          },
          {
            name: 'extra.value',
            icon: 'unGroupOutlined',
            url: 'catalog/extras/value',
            id: 'extra_value',
          },
        ],
      },
      {
        name: 'categories',
        icon: 'appStore',
        url: 'catalog/categories',
        id: 'categories',
      },
      {
        name: 'product.reviews',
        icon: 'skin',
        url: 'reviews/product',
        id: 'product-review',
      },
    ],
  },
  {
    name: 'content',
    id: 'content.management',
    icon: 'appStoreAdd',
    submenu: [
      {
        name: 'brands',
        icon: 'appStoreAdd',
        url: 'catalog/brands',
        id: 'brands',
      },
      {
        name: 'stories',
        icon: 'BsClockHistory',
        url: 'stories',
        id: 'stories',
        children: [],
      },
      {
        name: 'units',
        icon: 'disconnect',
        url: 'catalog/units',
        id: 'units',
      },
      {
        name: 'banners',
        icon: 'bsImage',
        url: 'banners',
        id: 'banners_01',
      },
      {
        name: 'blogs',
        url: 'blogs',
        icon: 'form',
        id: 'blogs_01',
      },
      {
        name: 'gallery',
        url: 'gallery',
        icon: 'fiImage',
        id: 17,
      },
      {
        name: 'notifications',
        icon: 'notificationsActive',
        url: 'notifications',
        id: 11,
      },
    ],
  },
  {
    name: 'customer',
    id: 'customer.management_01',
    icon: 'wallet',
    submenu: [
      {
        name: 'wallets',
        icon: 'wallet',
        url: 'wallets',
        id: 'wallets_02',
      },
      {
        name: 'users',
        id: 'user',
        icon: 'user',
        url: 'users',
        children: [
          {
            icon: 'user',
            url: 'users/user',
            name: 'clients',
            id: 'users',
          },
          {
            icon: 'userGroupAdd',
            url: 'users/admin',
            name: 'users',
            id: 'userGroupAdd',
          },
          {
            icon: 'userSwitch',
            url: 'users/role',
            name: 'roles',
            id: 'userSwitch',
          },
        ],
      },
      {
        name: 'email.subscriber',
        icon: 'mail',
        url: 'email/subscriber',
        id: 'email_subscriber_02',
        children: [
          {
            icon: 'MdNotificationAdd',
            url: 'subscriber',
            name: 'subscriber',
            id: 'subscriber',
          },
          {
            icon: 'MdNotificationAdd',
            url: 'message/subscriber',
            name: 'message.subscriber',
            id: 'message_subscriber',
          },
        ],
      },
    ],
  },
  {
    name: 'transaction',
    id: 'transaction.management',
    icon: 'transaction',
    submenu: [
      {
        name: 'transactions',
        icon: 'transaction',
        url: 'transactions',
        id: 'transactions',
      },
      {
        name: 'payout.requests',
        icon: 'dollar',
        url: 'payout-requests',
        id: 'payout-requests',
      },
      {
        name: 'payouts',
        icon: 'moneyOut',
        url: 'payouts',
        id: 'admin_payouts',
      },
    ],
  },
  {
    name: 'marketing',
    id: 'management_02',
    icon: 'copyright',
    submenu: [
      {
        icon: 'referral',
        url: 'settings/referal',
        name: 'referral',
        id: 'referral_01',
      },
      {
        icon: 'GiftOutlined',
        name: 'bonus',
        url: 'bonus/list',
        id: 'bonus_01',
      },
    ],
  },
  {
    name: 'ANALYTICS.ADN.REPORTS',
    id: 'analytics',
    icon: 'products',
    submenu: [
      {
        name: 'food',
        icon: 'products',
        url: 'report/products',
        id: 'report-products',
      },
      {
        name: 'order',
        icon: 'orders',
        url: 'report/orders',
        id: 'report-orders',
      },
      {
        name: 'stock',
        icon: 'stock',
        url: 'report/stock',
        id: 'report-stock',
      },
      {
        name: 'category',
        icon: 'categories',
        url: 'report/categories',
        id: 'report-categories',
      },
      {
        name: 'overview',
        icon: 'overview',
        url: 'report/overview',
        id: 'report-overview',
      },
      {
        name: 'revenue',
        icon: 'revenue',
        url: 'report/revenue',
        id: 'report-revenue',
      },
      {
        name: 'variation',
        icon: 'variation',
        url: 'report/extras',
        id: 'report-variation',
      },
    ],
  },
  {
    name: 'business.settings',
    id: 'business_settings_01',
    icon: 'settings',
    submenu: [
      {
        icon: 'settings',
        url: 'settings/general',
        name: 'settings.general',
        id: 'settings_general_01',
      },
      {
        icon: 'moneyCollect',
        url: 'currencies',
        name: 'currencies',
        id: 'currencies',
      },
      {
        icon: 'wallet',
        url: 'settings/payments',
        name: 'payments',
        id: 'payments',
      },
      {
        icon: 'message',
        url: 'settings/sms-gateways',
        name: 'sms-gateways',
        id: 'sms-gateways',
      },
      {
        icon: 'emailSettings',
        url: 'settings/emailProviders',
        name: 'email.provider',
        id: 'email_provider_01',
      },
      {
        icon: 'notificationsActive',
        url: 'settings/firebase',
        name: 'notification.settings',
        id: 'notification_settings',
      },
      {
        icon: 'instagram',
        url: 'settings/social',
        name: 'social.settings',
        id: 'social_settings_id',
      },
      {
        icon: 'settings',
        url: 'settings',
        name: 'page.setup',
        id: 'page_setup',
        children: [
          {
            icon: 'questionCircle',
            url: 'settings/faqs',
            name: 'FAQ',
            id: 'faq',
          },
          {
            icon: 'paperClip',
            url: 'settings/terms',
            name: 'terms',
            id: 'terms',
          },
          {
            icon: 'lock',
            url: 'settings/policy',
            name: 'policy',
            id: 'policy',
          },
        ],
      },
    ],
  },
  {
    name: 'system.settings',
    id: 'system_settings_02',
    icon: 'global',
    submenu: [
      {
        icon: 'global',
        url: 'settings/languages',
        name: 'languages',
        id: 'languages_01',
      },
      {
        icon: 'translation',
        url: 'settings/translations',
        name: 'translations',
        id: 'translations_02',
      },
      {
        icon: 'database',
        url: 'settings/backup',
        name: 'backup',
        id: 'backup_02',
      },
      {
        icon: 'tool',
        url: 'settings/system-information',
        name: 'system.information',
        id: 'system_informations',
      },
      {
        icon: 'cloudUpload',
        url: 'settings/update',
        name: 'update',
        id: 'update',
      },
      {
        icon: 'AiOutlineClear',
        url: 'settings/cashClear',
        name: 'clear.cash',
        id: 'clear_cash_02',
      },
    ],
  },
  {
    name: 'logout',
    icon: 'logout',
    url: '',
    id: 'logout_05',
  },
];

const sellerRoutes = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    url: 'dashboard',
    id: 'dashboard_03',
  },
  {
    name: 'reservation',
    id: 'order_management',
    icon: 'BookOutlined',
    submenu: [
      {
        name: 'reservation.list',
        icon: 'calendar',
        url: 'seller/booking-list',
        id: 'seller/booking-list',
        children: [],
      },
      {
        name: 'reservation',
        icon: 'BsCalendarCheck',
        url: 'seller/booking',
        id: 'seller/booking',
        children: [],
      },
      {
        name: 'reservation.zone',
        icon: 'BiMapPin',
        url: 'seller/booking/zone',
        id: 'seller-reservation-zone',
        children: [],
      },
      {
        name: 'table.and.qrcode',
        icon: 'QrcodeOutlined',
        url: 'seller/booking/tables',
        id: 'reservation-tables',
        children: [],
      },
      {
        name: 'reservation.time',
        icon: 'AiOutlineFieldTime',
        url: 'seller/booking/time',
        id: 'reservation-time',
        children: [],
      },
    ],
  },
  {
    name: 'pos.system',
    icon: 'laptop',
    url: 'seller/pos-system',
    id: 'pos-system',
  },
  {
    name: 'galleries',
    icon: 'GrGallery',
    url: 'seller/galleries',
    id: 'galleries',
  },
  {
    name: 'order',
    id: 'order_management',
    icon: 'fiShoppingCart',
    submenu: [
      {
        name: 'all.orders',
        icon: 'fiShoppingCart',
        url: 'seller/orders-board',
        id: 'orders-board',
      },
      {
        name: 'reviews',
        icon: 'star',
        url: 'seller/reviews/order',
        id: 'order-review_01',
      },
      {
        name: 'refunds',
        icon: 'TbReceiptRefund',
        url: 'seller/refunds',
        id: 'refunds_01',
      },
    ],
  },
  {
    name: 'restaurant',
    id: 'restaurants_management',
    icon: 'shop',
    submenu: [
      {
        name: 'my.shop',
        icon: 'shop',
        url: 'my-shop',
        id: 'my-shop',
      },
    ],
  },
  {
    name: 'food',
    id: 'food_management',
    icon: 'branches',
    submenu: [
      {
        name: 'boxes',
        icon: 'recept',
        url: 'seller/boxes',
        id: 'seller_boxes',
      },
      {
        name: 'discounts',
        icon: 'euroCircle',
        url: 'seller/discounts',
        id: 'discounts',
        children: [],
      },
      {
        icon: 'dropbox',
        url: 'seller/product',
        name: 'Food',
        id: 'dropbox',
      },
      {
        name: 'product.reviews',
        icon: 'skin',
        url: 'seller/reviews/product',
        id: 'product-review',
      },
    ],
  },
  {
    name: 'marketing',
    id: 'restaurant_management_03',
    icon: 'calendar',
    submenu: [
      {
        name: 'coupons',
        icon: 'calendar',
        url: 'coupons',
        id: 'coupons',
      },
      {
        icon: 'GiftOutlined',
        name: 'shop.bonus',
        url: 'seller/bonus/shop',
        id: 'bonus_shop',
      },
      {
        icon: 'GiftOutlined',
        name: 'product.bonus',
        url: 'seller/bonus/product',
        id: 'bonus_product',
      },
    ],
  },
  {
    name: 'transaction',
    id: 'transaction_management',
    icon: 'wallet',
    submenu: [
      {
        name: 'payments',
        icon: 'wallet',
        url: 'seller/payments',
        id: 'payments',
      },
      {
        name: 'transactions',
        icon: 'transaction',
        url: 'seller/transactions',
        id: 'transactions',
      },
      {
        name: 'payouts',
        icon: 'dollar',
        url: 'seller/payouts',
        id: 'payouts',
      },
    ],
  },
  {
    name: 'content',
    id: 'content_management',
    icon: 'appStoreAdd',
    submenu: [
      {
        name: 'stories',
        icon: 'BsClockHistory',
        url: 'seller/stories',
        id: 'seller_stories',
        children: [],
      },
    ],
  },
  {
    name: 'logout',
    icon: 'logout',
    url: '',
    id: 'logout_01',
  },
];

const moderatorRoutes = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    url: 'dashboard',
    id: 'dashboard_04',
  },
  {
    name: 'pos.system',
    icon: 'laptop',
    url: 'seller/pos-system',
    id: 'pos-system',
  },
  {
    icon: 'dropbox',
    url: 'seller/product',
    name: 'Products',
    id: 'dropbox',
  },
  {
    name: 'my.shop',
    icon: 'shop',
    url: 'my-shop',
    id: 'my-shop',
  },
  {
    name: 'orders',
    icon: 'fiShoppingCart',
    url: 'seller/orders-board',
    id: 'orders',
  },
  {
    name: 'logout',
    icon: 'logout',
    url: '',
    id: 'logout_02',
  },
];

const deliverymanRoutes = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    url: 'dashboard',
    id: 'dashboard_05',
  },
  {
    name: 'orders',
    icon: 'fiShoppingCart',
    url: 'deliveryman/orders',
    id: 'orders',
  },
  {
    name: 'logout',
    icon: 'logout',
    url: '',
    id: 'logout_03',
  },
];

const waiterRoutes = [
  {
    name: 'my.orders',
    id: 'orders-board',
    icon: 'user',
    url: 'waiter/orders-board',
  },
  {
    name: 'all.orders',
    icon: 'fiShoppingCart',
    id: 'order_management',
    url: 'waiter/orders',
  },
  {
    name: 'logout',
    icon: 'logout',
    url: '',
    id: 'logout_03',
  },
];

export const data = {
  admin: adminRoutes,
  manager: managerRoutes,
  seller: sellerRoutes,
  moderator: moderatorRoutes,
  deliveryman: deliverymanRoutes,
  waiter: waiterRoutes,
};
