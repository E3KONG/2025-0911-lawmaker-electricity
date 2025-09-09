import { writable, derived } from 'svelte/store';
import membersSpeechData from './4.1_第10屆排行.json';
import membersIdentityData from './4.1_立委身分.json';

export let membersSpeech = writable(membersSpeechData);

export let membersIdentity = writable(membersIdentityData);

export const membersIdentityByName = derived(membersIdentity, ($list) => {
    const map = new Map();
    if (Array.isArray($list)) {
        for (const m of $list) {
            if (m && m.姓名) map.set(m.姓名, m);
        }
    }
    return map;
});

