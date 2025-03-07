import React, { useState } from "react";
import { Calendar, Layout, Menu, Switch } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import calendar from "../../assets/calendar.svg"

const { Sider, Content } = Layout;

const Home = () => {
  const [theme, setTheme] = useState("dark");
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("1");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      key: "sub1",
      label: "Navigation One",
      icon: <MailOutlined />,
      children: [
        { key: "1", label: "Asosiy" },
        { key: "2", label: "Mijozlar" },
        { key: "3", label: "Hisobot" },
        { key: "4", label: "Sozlama" },
      ],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Yon panel (Sidebar) */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme={theme}>
        <div className="logo" style={{ color: "white", textAlign: "center", padding: 20 }}>
          Dashboard
        </div>
        <Menu
          theme={theme}
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
        <div style={{ textAlign: "center", padding: 10 }}>
          <Switch
            checked={theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
      </Sider>

      <Layout>
        <Content style={{ margin: "16px", padding: 24, background: "#fff", minHeight: 280 }}>
          <div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "168px",
              marginBottom: "38px"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px"
              }}>
                <Avatar
                  style={{
                    backgroundColor: '#87d068',
                  }}
                  icon={<UserOutlined />}
                  label="Test uchun"
                />
                <label htmlFor="#">Test uchun</label>
              </div>
              <div>
                <img src={calendar} alt="" />
              </div>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "344px",
              height: "88px",
              backgroundColor: "#30AF49",
              borderRadius: "20px",
              marginLeft: "35%",
              marginBottom: "31px"
            }}>
              <div style={{
                color: "#fff",
                textAlign: "center",
                margin: 0
              }}>
                <h2>135 214 200 so‘m</h2>
                <p>Umumiy nasiya:</p>
              </div>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "344px",
              height: "127px",
              marginLeft: "35%",
              gap: "8px"
            }}>
              <div style={{
                width: "168px",
                height: "127px",
                border: "1px solid black",
                borderRadius: "16px"
              }}>
                <div style={{
                  padding: "10px"
                }}>
                  <h2 style={{
                    fontSize: "14px"
                  }}>Kechiktirilgan to‘lovlar</h2>
                  <p style={{
                    marginTop: "30px",
                    color: "#F94D4D"
                  }}>26</p>
                </div>
              </div>
              <div style={{
                width: "168px",
                height: "127px",
                border: "1px solid black",
                borderRadius: "16px"
              }}>
                <div style={{
                  padding: "10px"
                }}>
                  <h2 style={{
                    fontSize: "14px"
                  }}>Mijozlar soni</h2>
                  <p style={{
                    marginTop: "50px",
                    color: "#30AF49"
                  }}>151</p>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout >
  );
};

export default Home;
