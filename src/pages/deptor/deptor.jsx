import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import home from "../../assets/home.svg"
import users from "../../assets/users.svg"
import report from "../../assets/report.svg"
import settings from "../../assets/settings.svg"
import slider from "../../assets/slidericon.svg"

const { Sider, Content } = Layout;

const Deptor = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Content>
                <div>
                    <div style={{
                        display: "flex",
                        gap: "8px",
                        marginLeft: "35%",
                        marginTop: "29px",
                        marginBottom: "28px",
                        position: "fixed",
                        top: 0
                    }}>
                        <input style={{
                            width: "303px",
                            height: "48px",
                            borderRadius: "12px",
                            border: "none",
                            backgroundColor: "#F6F6F6"
                        }} type="text" placeholder="Mijozlarni qidirish..." />
                        <img src={slider} alt="" />
                    </div>
                    <div>
                        <button 
                            style={{
                                width: "140px",
                                height: "48px",
                                backgroundColor: "#3478F7",
                                color: "#fff",
                                border: "none",
                                borderRadius: "10px",
                                position: "fixed",
                                top: "80%",
                                left: "790px",
                                cursor: "pointer"
                            }}
                            onClick={() => navigate("/createdeptor")}
                        >
                            Yaratish
                        </button>
                    </div>
                    <div style={{
                        marginTop: "80px"
                    }}>
                        <div style={{
                            display: "flex",
                            width: "343px",
                            height: "143px",
                            backgroundColor: "#F6F6F6",
                            borderRadius: "20px",
                            marginLeft: "35%",
                            marginBottom: "31px"
                        }}>
                            <div style={{
                                marginTop: "16px",
                                marginLeft: "16px"
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: "16px",
                                        margin: 0
                                    }}>Rahmatulloh Madraximov</h3>
                                    <p style={{
                                        fontSize: "14px",
                                        margin: 0,
                                        opacity: 0.6
                                    }}>+998 91 123 45 67</p>
                                </div>
                                <div style={{
                                    marginTop: "16px"
                                }}>
                                    <h3 style={{
                                        fontSize: "12px",
                                        margin: 0,
                                        opacity: 0.6
                                    }}>Jami nasiya:</h3>
                                    <p style={{
                                        fontSize: "16px",
                                        margin: 0,
                                        color: "#F94D4D"
                                    }}>-800 000 so‘m</p>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            width: "343px",
                            height: "143px",
                            backgroundColor: "#F6F6F6",
                            borderRadius: "20px",
                            marginLeft: "35%",
                            marginBottom: "31px"
                        }}>
                            <div style={{
                                marginTop: "16px",
                                marginLeft: "16px"
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: "16px",
                                        margin: 0
                                    }}>Rahmatulloh Madraximov</h3>
                                    <p style={{
                                        fontSize: "14px",
                                        margin: 0,
                                        opacity: 0.6
                                    }}>+998 91 123 45 67</p>
                                </div>
                                <div style={{
                                    marginTop: "16px"
                                }}>
                                    <h3 style={{
                                        fontSize: "12px",
                                        margin: 0,
                                        opacity: 0.6
                                    }}>Jami nasiya:</h3>
                                    <p style={{
                                        fontSize: "16px",
                                        margin: 0,
                                        color: "#F94D4D"
                                    }}>-800 000 so‘m</p>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            width: "343px",
                            height: "143px",
                            backgroundColor: "#F6F6F6",
                            borderRadius: "20px",
                            marginLeft: "35%",
                            marginBottom: "31px"
                        }}>
                            <div style={{
                                marginTop: "16px",
                                marginLeft: "16px"
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: "16px",
                                        margin: 0
                                    }}>Rahmatulloh Madraximov</h3>
                                    <p style={{
                                        fontSize: "14px",
                                        margin: 0,
                                        opacity: 0.6
                                    }}>+998 91 123 45 67</p>
                                </div>
                                <div style={{
                                    marginTop: "16px"
                                }}>
                                    <h3 style={{
                                        fontSize: "12px",
                                        margin: 0,
                                        opacity: 0.6
                                    }}>Jami nasiya:</h3>
                                    <p style={{
                                        fontSize: "16px",
                                        margin: 0,
                                        color: "#F94D4D"
                                    }}>-800 000 so‘m</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    width: "343px",
                    height: "143px",
                    backgroundColor: "#F6F6F6",
                    borderRadius: "20px",
                    marginLeft: "35%",
                    marginBottom: "31px"
                }}>
                    <div style={{
                        marginTop: "16px",
                        marginLeft: "16px"
                    }}>
                        <div>
                            <h3 style={{
                                fontSize: "16px",
                                margin: 0
                            }}>Rahmatulloh Madraximov</h3>
                            <p style={{
                                fontSize: "14px",
                                margin: 0,
                                opacity: 0.6
                            }}>+998 91 123 45 67</p>
                        </div>
                        <div style={{
                            marginTop: "16px"
                        }}>
                            <h3 style={{
                                fontSize: "12px",
                                margin: 0,
                                opacity: 0.6
                            }}>Jami nasiya:</h3>
                            <p style={{
                                fontSize: "16px",
                                margin: 0,
                                color: "#F94D4D"
                            }}>-800 000 so‘m</p>
                        </div>
                    </div>
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
            </Content>
        </Layout>
    );
};

export default Deptor;
