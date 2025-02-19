// assets
import { DashboardOutlined,PayCircleOutlined,ReconciliationOutlined,SecurityScanOutlined,SettingOutlined, LogoutOutlined} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,PayCircleOutlined,ReconciliationOutlined,SecurityScanOutlined,SettingOutlined, LogoutOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  // title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'violations',
      title: 'Violations',
      type: 'item',
      url: '/dashboard/violations',
      icon: icons.PayCircleOutlined,
      breadcrumbs: false
    },
    {
      id: 'violations-details',
      title: 'Violations Details',
      type: 'item',
      url: '/dashboard/violations-details',
      icon: icons.PayCircleOutlined,
      breadcrumbs: false
    },
    {
      id: 'ehallans',
      title: 'E-Challans',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.ReconciliationOutlined,
      breadcrumbs: false
    },
    {
      id: 'vehicleinfo',
      title: 'Vehicle Info',
      type: 'item',
      url: '/dashboard',
      icon: icons.SecurityScanOutlined,
      breadcrumbs: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/dashboard',
      icon: icons.SettingOutlined,
      breadcrumbs: false
    },
    {
      id: 'Logout',
      title: 'Logout',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.LogoutOutlined,
      breadcrumbs: false
    }

  ]
};

export default dashboard;
