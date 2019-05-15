# 🔔 Pling

The official package for Pling. Pling is a cloud based logging service for aggregating, grouping and displaying logs from across your entire stack - frontend / backend / iot devices / games / ... or maybe just so you can track the oxygen in the office! It is the easiest way to keep collegues, clients, stakeholders and yourself in the loop of what's going.

This package is a simple helper so you can easily integrate the Pling API into your existing applications. I've provided an example with [create-react-app](https://github.com/driescroons/pling-react) and a basic [express](https://github.com/driescroons/pling-express) app.

## 👉 Implementation

Implemeting it is quite easy. First install it.

```
yarn add pling
```

### 🤖 Node

Importing the package

```
const notify = require("pling");
```

Copy and paste the following where you'd like to log something.

```
await notify({
    key: process.env.PLING_API_KEY,
    title: "Pling from the package!",
    description: "👋 👋 👋 👋"
});
```

Please make sure to set your **PLING_API_KEY** environment variable. In Node, you can do so by doing the following.

```
process.env[PLING_API_KEY] = "YOUR_API_KEY";
```

### 🤖 React / Vue / Angular

Importing the package

```
import notify from "pling";
```

Copy and paste the following where you'd like to log something.

```
 await notify({
    key: process.env.PLING_API_KEY,
    title: "Pling from the package!",
    description: "👋 👋 👋 👋"
  });
```

Please make sure to set your **PLING_API_KEY** environment variable. In create react app, you can do so by creating a **.env** file in the root and specifying the following.

```
PLING_API_KEY=YOUR_API_KEY_HERE
```
