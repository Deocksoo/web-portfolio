import React from 'react';
import './App.css';
import expensive from './expensive.png'
import flower from './flower.png'
import {Col, Image, Layout, Row, Tabs} from "antd";
import Contact from "./pages/Contact";
import Theater from "./pages/Theater";
import About from "./pages/About";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";

const {Header, Content, Sider} = Layout;

const {TabPane} = Tabs;

const Portfolio: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Sider style={{background: "white"}}></Sider>
                <Layout>
                    <Header style={{background: "white", paddingTop: 40, height: 100}}>
                        <Link to="/About">
                            <h2 className="text-2xl tracking-tight text-gray-900 sm:text-3xl">
                                Jooyoung Cho
                            </h2>
                        </Link>
                    </Header>
                    <Content style={{background: "white"}}>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/About"/>
                            </Route>
                            <Route
                                path="/:tab?"
                                render={({match, history}) => {
                                    return (
                                        <Tabs
                                            centered
                                            size="large"
                                            tabBarGutter={23}
                                            activeKey={match.params.tab}
                                            onTabClick={(key) => {
                                                history.push(`/${key}`)
                                            }}
                                        >
                                            <TabPane tab="About" key="About">
                                                <About/>
                                            </TabPane>
                                            <TabPane tab="CV" key="CV">
                                                CV
                                            </TabPane>
                                            <TabPane tab="Theater" key="Theater">
                                                <Theater/>
                                            </TabPane>
                                            <TabPane tab="Publications" key="Publications">
                                                <Row gutter={16}>
                                                    <Col span={6}>
                                                        <Image height={250} width={250} src={expensive}/>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tab="Creations" key="Creations">
                                                <Row gutter={16}>
                                                    <Col span={6}>
                                                        <Image height={250} width={250} src={flower}/>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tab="Contact" key="Contact">
                                                <Contact/>
                                            </TabPane>
                                        </Tabs>
                                    )
                                }}
                            />
                        </Switch>
                    </Content>
                </Layout>
                <Sider style={{background: "white"}}></Sider>
            </Layout>
        </BrowserRouter>
    )
}

export default Portfolio;