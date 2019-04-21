import React from 'react';
import { Dimensions } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';
import { RNCamera } from 'react-native-camera';

export default class Camera2Page extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Камера 2',
    drawerIcon: () => (
      <Icon name="camera"/>
    ),
  };

  state = {};

  render() {
    takePicture = async () => {
      try {
        const data = await this.camera.takePictureAsync();
        console.log('Path to image: ' + data.uri);
      } catch (err) {
        console.log('err: ', err);
      }
    };

    return (
      <Container>
        <Header
          style={{ backgroundColor: "#222428" }}
          iosBarStyle={"light-content"}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name='menu' style={{ color: "#fff" }}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>Камера</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <RNCamera
            ref={cam => {
              this.camera = cam;
            }}
            style={{ height: Dimensions.get('window').height }}
          >
            <Button
              block
              style={{ margin: 10, backgroundColor: '#989aa2', borderRadius: 10 }}
              onPress={this.takePicture}
            >
              <Text style={{color: "#fff"}}>
                Сделать фото
              </Text>
            </Button>
          </RNCamera>
        </Content>
      </Container>
    );
  }
}
