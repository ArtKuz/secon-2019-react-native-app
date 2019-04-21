import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Text,
} from 'native-base';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

export default class Speaker extends React.Component {
  render() {
    const { data } = this.props.navigation.state.params;
    const { avatar, imageContainer, title, thesesTitle, theses } = styles;

    return (
      <Container>
        <Header
          style={{ backgroundColor: "#222428" }}
          iosBarStyle={"light-content"}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='arrow-back' style={{ color: "#fff" }} />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title style={{ color: "#fff" }}>{data.name}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {data.avatar && (
            <View style={imageContainer}>
              <Image
                style={avatar}
                source={data.avatar}
              />
            </View>
          )}


          <Text style={title}>
            {data.title}
          </Text>
          <Text style={thesesTitle}>
            Тезисы:
          </Text>
          <Text style={theses}>
            {data.description}
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200/2,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  thesesTitle: {
    fontSize: 18,
    margin: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  theses: {
    fontSize: 16,
    padding: 10,
    paddingBottom: 20,
  }
});

