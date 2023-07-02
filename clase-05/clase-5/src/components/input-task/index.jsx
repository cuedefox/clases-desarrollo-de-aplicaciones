import { Button, View, TextInput } from "react-native";

import { styles } from "./styles";

const InputTask = ({
  borderColor,
  onHandleBlur,
  onHandleFocus,
  onHandleChangeText,
  task,
  onHandleCreateTask
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="add new task"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#B7BCE1"
        selectionColor="#B7BCE1"
        placeholderTextColor="#9AA1D5"
        onFocus={onHandleFocus}
        onBlur={onHandleBlur}
        onChangeText={onHandleChangeText}
        value={task}
      />
      <Button
        disabled={task.length === 0}
        title="add"
        color="#AA7DCE"
        onPress={onHandleCreateTask}
      />
    </View>
  );
};

export default InputTask;
