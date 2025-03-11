import React, { useState } from "react";
import { Input, Button, Upload, Flex } from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CreateDeptor = () => {

    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    return (
        <div style={{ padding: "16px", maxWidth: "400px", margin: "auto" }}>
            {/* Orqaga qaytish tugmasi */}
            <ArrowLeftOutlined style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => navigate(-1)}  />

            <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Mijoz yaratish</h2>

            {/* Ismi */}
            <div>
                <label>Ismi *</label>
                <Input
                    placeholder="Ismini kiriting"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginBottom: "12px" }}
                />
            </div>

            {/* Telefon raqami */}
            <div>
                <label>Telefon raqami *</label>
                <Input
                    placeholder="Telefon raqami"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ marginBottom: "8px" }}
                />
                <a href="#" style={{ color: "#007BFF", fontSize: "14px" }}>
                    + Ko‘proq qo‘shish
                </a>
            </div>

            {/* Yashash manzili */}
            <div>
                <label style={{ marginTop: "16px" }}>Yashash manzili</label>
                <Input
                    placeholder="Yashash manzilini kiriting"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ marginBottom: "12px" }}
                />
            </div>

            {/* Eslatma */}
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <button style={{
                    width: "343px",
                    height: "42px"
                }}>Eslatma qo‘shish</button>
            </div>

            {/* Rasm biriktirish */}
            <label>Rasm biriktirish</label>
            <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
                <Upload beforeUpload={(file) => { setImage1(file); return false; }}>
                    <Button icon={<UploadOutlined />}>Rasm qo‘shish</Button>
                </Upload>
                <Upload beforeUpload={(file) => { setImage2(file); return false; }}>
                    <Button icon={<UploadOutlined />}>Rasm qo‘shish</Button>
                </Upload>
            </div>

            {/* Saqlash tugmasi */}
            <Button
                type="primary"
                block
                disabled={!name || !phone}
                style={{ background: !name || !phone ? "#E0E0E0" : "#007BFF", border: "none" }}
            >
                Saqlash
            </Button>
        </div>
    );
};

export default CreateDeptor;
