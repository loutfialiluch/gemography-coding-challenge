# Trending repos

Small webapp that will list the most starred Github repos that were created in the last 30 days

## Frontend technology used

- React JS with pure css

**Trending repos:**

- Fetching the list of most starred github repos created in the last 30 days
- Every repository from the list takes one row
- Getting specific details about every repository in the list
- More repos are loaded once the scrollbar reaches the end

To get the application running, please go to a folder of your choice and follow the commands above :

```bash
git clone https://github.com/loutfialiluch/gemography-coding-challenge.git
cd gemography-coding-challenge
npm install
npm start
```

## Libraries and packages used

- **Axios** : A JavaScript library for performing HTTP requests, a widely used and easy-to-use library.
- **Moment** : A JavaScript library for parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way (used in this application to subtract a month from current date for example and other purposes)
- **number-abbreviate** : javascript package used to abbreviate a number and add unit letters to it (e.g 3000 => 3K)
- **react-loading** : react package which provides easy to use loading animations.
