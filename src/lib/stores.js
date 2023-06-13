import { writable } from 'svelte/store';

export let tabStates = writable([]);
export let selectedDrive = writable(null);
export let mountList = writable([]);
export let hostname = writable("");
export let mntSource = writable("");
export let myIp = writable("");
export let newMachineName = writable("");

