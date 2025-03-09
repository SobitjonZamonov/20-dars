import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import calendar from "../../assets/calendar.svg";
import wallet from "../../assets/walleticon.svg";
import button from "../../assets/Button.svg";
import home from "../../assets/home.svg";
import users from "../../assets/users.svg";
import report from "../../assets/report.svg";
import settings from "../../assets/settings.svg";

const { Content } = Layout;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Layout>
        <Content style={{ margin: "16px", background: "#fff" }}>
          <div>
            <div style={{
              display: "flex",
              marginLeft: "35%",
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
                <h2 style={{
                  margin: 0
                }}>135 214 200 so‘m</h2>
                <p style={{
                  margin: 0
                }}>Umumiy nasiya:</p>
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
                border: "1px solid #ececec",
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
                border: "1px solid #ececec",
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
            <div style={{
              marginTop: "40px",
              marginLeft: "35%"
            }}>
              <h2>Hamyoningiz</h2>
              <div style={{
                display: "flex",
                gap: "95px"
              }}>
                <div style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "26px"
                }}>
                  <img src={wallet} alt="wallet" />
                  <div>
                    <h3 style={{
                      margin: 0
                    }}>Hisobingizda</h3>
                    <h2 style={{
                      margin: 0
                    }}>300 000 so‘m</h2>
                  </div>
                </div>
                <img src={button} alt="add button" />
              </div>
              <div style={{
                display: "flex",
                gap: "120px",
                marginTop: "28px"
              }}>
                <h2 style={{
                  fontSize: "14px"
                }}>Bu oy uchun to‘lov:</h2>
                <h2 style={{
                  fontSize: "14px",
                  color: "#30AF49"
                }}>To‘lov qilingan</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "70px",
                  padding: "10px 0",
                  width: "100%",
                  background: "#fff",
                  boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                  justifyContent: "center",
                }}
              >
                <div onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
                  <img src={home} alt="Home" />
                  <h2 style={{ fontSize: "10px", color: "#637D92" }}>Asosiy</h2>
                </div>
                <div onClick={() => navigate("/deptor")} style={{ cursor: "pointer" }}>
                  <img src={users} alt="Users" />
                  <h2 style={{ fontSize: "10px", color: "#637D92" }}>Mijozlar</h2>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <img src={report} alt="Report" />
                  <h2 style={{ fontSize: "10px", color: "#637D92" }}>Hisobot</h2>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <img src={settings} alt="Settings" />
                  <h2 style={{ fontSize: "10px", color: "#637D92" }}>Sozlamalar</h2>
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
