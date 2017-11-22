import React,{Component} from 'react';
import {View,Text,StyleSheet } from 'react-native';


class Component1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'Component1',
            message : this.props.message
        }
    }

    static defaultProps ={
        message : 'Hi There'
    }

    render(){
        return(
            <View style={styles.myView}>
                <Text style={styles.myText}> {this.state.name}</Text>
                <Text style={{ color:'red' }}> This is Comming from Component1.js</Text>
                <Text>{this.state.message}</Text>

                <View style={styles.container}>
                    <View style = {styles.v1}>
                        <Text style={styles.myText}>View 1</Text>
                    </View>
                    <View style = {styles.v2}>
                        <Text style={styles.myText}>View 2</Text>
                    </View>
                    <View style = {styles.v3}>
                        <Text style={styles.myText}>View 3</Text>
                    </View>
                </View>

            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    myText:{
        color:'white'
    },

    myView:{
        backgroundColor: 'blue'
    },

    container:{
        flexDirection:'row',
        height:100
    },

    v1:{
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2:{
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    v3:{
        flex:1,
        backgroundColor:'cyan',
        padding:10
    },
});


export default Component1;