import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';

import ContactListItem from '../components/ContactListItem';

import users from '../data/Users';

export default function ChatsRoom() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={{width: '100%'}}
          data={users}
          renderItem={({ item }) => <ContactListItem user={item}/>}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });