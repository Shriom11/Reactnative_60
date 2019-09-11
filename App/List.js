/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            List: [
                {id: 1, name: 'Test1', price: 20, qty: 1},
                {id: 2, name: 'Test2', price: 30, qty: 1},
                {id: 3, name: 'Test3', price: 10, qty: 1},
                {id: 4, name: 'Test4', price: 80, qty: 1},
                {id: 5, name: 'Test5', price: 40, qty: 1}
            ]
        }
    }



    render() {
        const {List} = this.state
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15, width: width, height: height}}>
            <FlatList
                data={List}
                scrollEnabled
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{borderWidth: 0.5, elevation: 2, borderRadius: 5, width: width-30, marginTop: 10, marginBottom: 5, padding: 15, borderColor: '#ccc'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={{uri: 'https://mir-s3-cdn-cf.behance.net/user/276/4594ba15354117.576bace88c39c.png'}} style={{width: 50, height: 50, borderRadius: 50/2, borderWidth: 0.5, borderColor: '#ccc'}}/>
                                <Text style={{alignSelf: 'center', marginLeft: 10, fontWeight: 'bold'}}>{item.name}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                                <Text style={{alignSelf: 'center', marginLeft: 10}}>Price: {item.price}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{backgroundColor: '#ccc', width: 20, height: 20, borderRadius: 20/2}}>
                                        <Text style={{alignSelf: 'center'}}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{paddingHorizontal: 5}}>{item.qty}</Text>
                                    <TouchableOpacity style={{backgroundColor: '#ccc', width: 20, height: 20, borderRadius: 20/2}}>
                                        <Text style={{alignSelf: 'center'}}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
            
        </View>
      );
    }
  }

