import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card, Image} from 'react-native-elements';

export default function GroceryItemListing(props) {
	return (
		<Card title={props.name}>
			<Text>{props.rating}</Text>
			<Text>{props.price}</Text>
		</Card>
  );
}

const styles = StyleSheet.create({

});