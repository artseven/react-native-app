import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    //taking existing array, pulling all the values and putting into new array
    //while adding another element as a second argument
    //setCourseGoals([...courseGoals, enteredGoal]);
    //upd: making sure react gives latest snapshot of the state to work with
    //upd: restructuring to conform with FlatList input array requirements
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={() => console.log('Does that work?')} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
