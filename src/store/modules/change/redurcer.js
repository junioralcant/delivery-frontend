export default function change(state = [0], action) {
  console.log(action);
  switch (action.type) {
    case "ADD_CHANGE":
      return [action.change];
    default:
      return state;
  }
}
