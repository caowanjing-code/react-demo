
// 公共index样式
// react单页面构造
import React,{ useState } from 'react';
import {Link,} from 'react-router-dom';
import 'antd/dist/antd.css';


import { Layout, Menu, Breadcrumb ,Avatar,PageHeader,Affix} from 'antd';
import {
  DesktopOutlined,
  CalendarOutlined,
  FileOutlined,
  TeamOutlined,
  OrderedListOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Input, Space,Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';



// 导入路由
import RouterPage from './router/RouterPage'
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const onSearch = value => console.log(value);
const { Meta } = Card;




class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      key:1,
    collapsed: false,

    }
  }
 handleClick=(e)=>{
   console.log(e)
   this.props.getValue(e.key,e.item.props.children)
 }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>

        {/* 侧边导航栏 */}
        <div>

        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />

          <Menu
          onClick={this.handleClick}
          onChange={this.getValue}
          defaultSelectedKeys={['1']}
          defaultOpenKeys = {['sub1','sub2','sub3','sub4','sub5','sub10']}
           mode="inline">

            {/* 用户卡片 */}

            <Card
            key="1"
            style={{ width: 200 }}
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
            >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="用户"
    />
  </Card>
{/* 侧边栏部分 */}
            <Menu.Item key="1" icon={<CalendarOutlined />}>
             <Link className="axiosTest" to="/axiosTest">axiosTest</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<OrderedListOutlined />} title="List">
              <Menu.Item key="3">
                <Link className="list" to="/list">list</Link>
              </Menu.Item>
              <Menu.Item key="4">
                  
              <Link className="des" to="/description">
                    Desceiption
                </Link>
              </Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">
                  <Link className="form1" to="/form1">
                      form1
                  </Link>
              </Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<TableOutlined />} title="Table">
              <Menu.Item key="10" >
                <Link className="table1" to="/table1">
                    table1
                </Link>
                </Menu.Item>
              <Menu.Item key="11">
              <Link className="table2" to="/table2">
                    table2
                </Link>
              </Menu.Item>
              <Menu.Item key="12">
              <Link className="table3" to="/table3">
                    table3
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        </div>
        <Layout className="site-layout">

          {/* 页头固定 */}
        <div className="site-page-header-ghost-wrapper">
          <Affix>
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="返回"
      subTitle="This is a subtitle"
      extra={[

      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      ]}
    >

    </PageHeader>
    </Affix>
  </div>
          <Content style={{ margin: '0 16px' }}>
          <Breadcrumb>
    <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Component</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item >
      <a href="">General</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Button</Breadcrumb.Item>
  </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* 右侧显示栏 */}
            {/* 这里注册路由 */}
            {/* <Route path="/list" component={List}/>
            <Route path="/table1" component={ChartCom}/>
            <Route path="/table2" component={LineMarkerEcharts}/>
            <Route path="/description" component={Table}/>
            <Route path="/table3" component={Stactic} />
            <Route path="/form1" component={Form1} /> */}
            <RouterPage />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
