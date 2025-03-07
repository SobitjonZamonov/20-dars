import { Button, Form, Input } from "antd";

const Login = () => {
    return (
        <div style={{
            width: 350,
            margin: "100px auto",
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 10,
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
        }}>
            <h2 style={{ textAlign: "center" }}>Dasturga kirish</h2>
            <p style={{
                color: "#000",
                opacity: "40%"
            }}>
                Iltimos, tizimga kirish uchun login va parolingizni kiriting.
            </p>
            <Form layout="vertical">
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Please enter your email" }]}
                >
                    <Input placeholder="Login" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Please enter your password" }]}
                >
                    <Input.Password placeholder="Parol" />
                </Form.Item>

                <Button type="primary" block>
                    Kirish
                </Button>
            </Form>
        </div>
    );
};

export default Login;
