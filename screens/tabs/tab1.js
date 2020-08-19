
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { getArticles } from '../../services/news';
import {Alert} from 'react-native';
import { DataItem } from '../../components/dataItem';
/*
import { DataItem } from '../../components/dataItem';
dataArray={this.state.data}
renderRow={(item) => {
    return <DataItem  data={item} />
}} */

export default class ListThumbnailExample extends Component {

  constructor(props){

    super(props);

    this.state = {
      isLoading: true,
      data: null
    }

  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render() {
    console.log(this.state.data);
    return (
      <Container>
        <Content>
        <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFWWR-fa3xAIUF6RZ42oMpNYgdCQFApQ35dQ&usqp=CAU' }} />
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
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrE0A7jlEk9rEYdhegqKeRvCSUMm08G-bGwA&usqp=CAU' }} />
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
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuvyqFScSikA0VJyBn9drgVll7ywsIzRdN9g&usqp=CAU' }} />
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


/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',

  }
});

*/

