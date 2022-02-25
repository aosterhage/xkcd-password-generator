<script>
    import { getRandomWords } from "../lib/functions/getRandomWords.js";

    let password = "random words go here";

    function generatePassword() {
        let words = getRandomWords(4);
        password = words.join(" ");
    }

    function copyPassword() {
        setClipboard(password);
    }

    function setClipboard(text) {
        let type = "text/plain";
        let blob = new Blob([text], { type });
        let data = [new ClipboardItem({ [type]: blob })];

        navigator.clipboard.write(data);
    }
</script>

<div class="w-1/2 py-2 px-4 flex justify-between items-center gap-2 border-b border-gray-400 dark:border-gray-600 text-3xl">
    <div class="whitespace-nowrap text-ellipsis overflow-hidden text-black dark:text-white">
        {password}
    </div>
    <div class="shrink-0">
        <button on:click={generatePassword}>
            <svg class="fill-neutral-900 dark:fill-neutral-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"/></svg>
        </button>
        <button on:click={copyPassword}>
            <svg class="fill-neutral-900 dark:fill-neutral-50" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>
        </button>
    </div>
</div>