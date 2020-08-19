import React, { Component} from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class DataItem extends Component{

    constructor(props){

        super(props);
        this.data = props.data;
    }

    render(){

        return (
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
        );
    }

}