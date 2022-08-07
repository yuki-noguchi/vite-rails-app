import MessagesIndex from "../components/MessagesIndex.svelte";

new MessagesIndex({
  target: document.getElementById("messages-index"),
  props: {
    message: document.getElementById("messages-index").dataset["message"],
  },
});
