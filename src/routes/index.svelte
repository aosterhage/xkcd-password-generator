<script>
    import { getRandomWords } from "../lib/functions/getRandomWords.js";

    let password = "your password here";

    function generatePassword() {
        let words = getRandomWords(4);
        password = words.join(" ");
    }
</script>

<button on:click={generatePassword}> Generate new password </button>

<p>
    {password}
</p>
