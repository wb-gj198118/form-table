import { Layout } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import styles from './style.less';

function BasicLayout(props) {
  return (
    <Layout className={styles.normal}>
      <Header style={{background: '#fff', padding: 0}}/>
      <Content style={{margin: '24px 16px 0'}}>
        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
          {props.children}
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
