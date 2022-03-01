# Overview

Based on the famous [xkcd](https://xkcd.com/936/) that points out how a series of random words are easy for people to remember while *also* being difficult to crack as a password. For more information on entropy and how these passwords stack up see this fairly easy to understand [stack exchange post](https://crypto.stackexchange.com/questions/62597/calculating-entropy-within-xkcd-936-password-strength).

This implementation uses a word list of 8192 words. This roughly equates to 13 bits of entropy for each word (2^13 = 8192) in the worst case. When we choose 4 random words we can add them up for ~52 bits of entropy.

The "worst case" is if an attacker knew that you used this specific generator for your password (and thus could access the word list). If the attacker didn't know you used this generator then the entropy would increase (e.g. if the attacker assumed you used a real English dictionary then each word has ~16 bits of entropy).

# Is it secure?

Obviously this depends on what level you define "secure". From an online web perspective, the generation process is quite secure:
- The page is static with no external interaction. This means that when you generate a password its done in your web browser, on your computer.
- I use the Web Crypto API (`crypto.getRandomValues()`) to generate cryptographically secure, random, indices for the word list.

From a password security standpoint its pretty good. If you need something *very* secure you shouldn't be using a password or shouldn't be using *only* a password.
