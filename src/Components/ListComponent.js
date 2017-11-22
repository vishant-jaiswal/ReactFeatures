/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ListView,
  Text
} from 'react-native';

const users = [
    {name:'vishant'},
    {name:'vishant1'},
    {name:'vishant2'},
    {name:'vishant3'},
    {name:'vishant4'},
    {name:'vishant5'},
    {name:'vishant6'},
    {name:'vishant7'},
    {name:'vishant8'},
    {name:'vishant9'},
    {name:'vishant10'},
    {name:'vishant11'},
]


export default class ListComponent extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});        
        this.state = {
            userDataSource: ds.cloneWithRows(users),
        }
    }

    renderRow(user,sectionId,rowId,highlightRow){
        return(
            <View>
                <Text> {user.name} </Text>
            </View>
        );
        
    }


  render() {
    return (
      <View>
          <ListView
            dataSource = {this.state.userDataSource}
            renderRow = {this.renderRow.bind(this)}
          >
          </ListView>
      </View>
    );
  }
}
