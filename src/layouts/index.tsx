import { ProLayout } from "@ant-design/pro-layout"
import { Link, Outlet, useAppData, useLocation } from 'umi';
import styles from './index.less';

export default function Layout() {
  const {clientRoutes} = useAppData()
  const location = useLocation()

  return (
    <ProLayout 
      route={clientRoutes[0]} 
      location={location} 
      title="Umi x Ant Design" 
      menuItemRender={(menuItemProps, defaultDom) => {
         if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom
         }

         if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          )
         }
         return defaultDom
      }}>
        <Outlet/>
    </ProLayout>
    // <div className={styles.navs}>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/docs">Docs</Link>
    //     </li>
    //     <li>
    //       <a href="https://github.com/umijs/umi">Github</a>
    //     </li>
    //     <li>
    //       <Link to="/products">Products</Link>
    //     </li>
    //   </ul>
    //   <Outlet />
    // </div>
  );
}
