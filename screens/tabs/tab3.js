import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxTnZ8r5sc_WPIj_TRyyeehFKVqMm7APJ9mA&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Vision du ministère</Text>
                <Text note numberOfLines={2}>Centre mondial de reveil. Allez et faites des nations des disciples.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF1d_QW0-6gAJFV3hfsJVf-nbWr38U3tRBmQ&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>La mode actuelle</Text>
                <Text note numberOfLines={2}>Centre mondial de reveil. Allez et faites des nations des disciples.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm1hwJFzABfO1zlo-GaAxYLwxuwoFPCye5-g&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Les débats ultimes</Text>
                <Text note numberOfLines={2}>Centre mondial de reveil. Allez et faites des nations des disciples.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsNXJl6xfuXzNpBe5LNpvAGJxhaKVAVCeitw&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Vision du ministère</Text>
                <Text note numberOfLines={2}>Centre mondial de reveil. Allez et faites des nations des disciples.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQfWkOJjurLao80hD5fzgXd6PGHLXsa721lg&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Vision du ministère</Text>
                <Text note numberOfLines={2}>Centre mondial de reveil. Allez et faites des nations des disciples.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1MpLF8zdPkXe-EuHscSWr7kqSl2gE4utW7g&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Vision du ministère</Text>
                <Text note numberOfLines={2}>Centre mondial de reveil. Allez et faites des nations des disciples.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQfWkOJjurLao80hD5fzgXd6PGHLXsa721lg&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Vision du ministère</Text>
                <Text note numberOfLines={2}>Centre mondial de reveil. Allez et faites des nations des disciples.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          
          </List>
        </Content>
      </Container>
    );
  }
}
