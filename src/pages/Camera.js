import React from 'react';
import {
  Body,
  ActionSheet,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Root,
  Text,
  Title,
} from 'native-base';
import { Dimensions } from "react-native";
import { RNCamera } from 'react-native-camera';

const ActionSheetButtons = ['Камера', 'Галерея', 'Отмена'];
const ActionSheetButtonsCancelIndex = 2;

export default class CameraPage extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Камера',
    drawerIcon: () => (
      <Icon name="camera"/>
    ),
  };

  state = {
    showCamera: false,
  };

  render() {
    return (
      <Root>
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
              <Title style={{color: "#fff"}}>Камера</Title>
            </Body>
            <Right/>
          </Header>
          <Content>
            <Button
              block
              style={{ margin: 10, backgroundColor: '#989aa2', borderRadius: 10 }}
              onPress={() =>
                ActionSheet.show(
                  {
                    options: ActionSheetButtons,
                    cancelButtonIndex: ActionSheetButtonsCancelIndex,
                  },
                  buttonIndex => {
                    if (ActionSheetButtons[buttonIndex] === 'Камера') {
                      this.setState({ showCamera: true });
                    }
                  }
                )}
            >
              <Text>
                <Icon name="camera" style={{color: "#fff"}}/>
              </Text>
            </Button>
            {this.state.showCamera &&
              <RNCamera
                ref={cam => {
                  this.camera = cam;
                }}
                style={{ height: Dimensions.get('window').height }}
              >
              </RNCamera>
            }
          </Content>
        </Container>
      </Root>
    );
  }
}
