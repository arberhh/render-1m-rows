# React Virtuoso Example

This is a simple React application demonstrating the usage of the React Virtuoso library for efficient rendering of large lists. It also includes a function `createData` to generate mock data for the list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [createData Function](#createdata-function)
- [Credits](#credits)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/react-virtuoso-example.git
```

2. Navigate to the project directory:

```bash
cd react-virtuoso-example
```

3. Install dependencies:

```bash
npm install
```

## Usage

Once you have installed the dependencies, you can run the application:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

## createData Function

The `createData` function is used to generate mock data for the list. It takes two optional parameters: `from` and `to`, representing the range of IDs for the generated rows. If no parameters are provided, it defaults to generating 1000 rows with IDs ranging from 0 to 999.

```javascript
import { createData } from './app/data/row';

// Generate 50 rows with IDs from 0 to 49
const newData = createData(0, 50);

// Append the new data to an existing array
setData([...data, ...newData]);
```

In this example, `createData` generates an array of objects, where each object represents a row with properties `id` and `title`. The `id` property is assigned a unique numeric value based on the index within the specified range, and the `title` property is generated as "Row {index + 1}".

## Credits

- React Virtuoso: [GitHub Repository](https://github.com/petyosi/react-virtuoso)