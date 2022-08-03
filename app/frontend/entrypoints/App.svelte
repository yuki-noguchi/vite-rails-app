<script lang="ts">
  export let message: string;
  export let param: string | undefined;
</script>

<div>{message}</div>
<p>{param}</p>
<form action="/hello/index" method="get">
  <label for="query">Search for:</label>
  <input id="query" name="query" type="text" />
  <input type="submit" value="Search" />
</form>
