<script lang="ts">
// const RUNPOD_KEY = import.meta.env.VITE_RUNPOD_KEY;
// import.meta.env;
import runpodSdk from 'runpod-sdk';

const test = async () => {
  const API_KEY = 'HDGIMODP7AKIEIQQT4CMNNNAG1KYDBQEWBL8Q7OL';
  const runpod = runpodSdk(API_KEY);
  const endpoint = runpod.endpoint('');
  if (endpoint) {
    const result = await endpoint.run({
      input: {
        prompt: 'Hello, World!',
      },
    });
    console.log(result);
    console.log('run response');
    console.log(result);
  }
};
</script>

<button on:click="{test}">sss</button>
<h1>Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
