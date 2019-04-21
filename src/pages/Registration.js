import React from 'react';
import {Container, Content, Body, Button, Header, Form, Icon, Item, Input, Label, Left, Right, Textarea, Title} from 'native-base';

export default class Registration extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Регистрация',
    drawerIcon: () => (
      <Icon name="clipboard"/>
    ),
  };

  render() {
    return (
      <Container>
        <Header
          style={{backgroundColor: "#222428"}}
          iosBarStyle={"light-content"}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name='menu' style={{color: "#fff"}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#fff"}}>Регистрация</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Логин</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Пароль</Label>
              <Input secureTextEntry={true} />
            </Item>
            <Item floatingLabel last>
              <Label>e-mail</Label>
              <Input keyboardType="email-address" />
            </Item>
            <Item floatingLabel last>
              <Label>Ваш номер</Label>
              <Input keyboardType="numeric" />
            </Item>
            <Textarea rowSpan={6} bordered placeholder="Введите сюда текст..." />
          </Form>
        </Content>
      </Container>
    );
  }
}
