# SoftEdgeTable

`SoftEdgeTable` is a powerful, flexible table component designed for enterprise-grade data presentation and interaction. It supports sorting, filtering, grouping, pagination, and custom layouts. It works out of the box with minimal configuration.

---

## ✨ Features

- 📊 Paginated and scrollable data table  
- 🎯 Column-based filtering (single or multi)  
- 🧠 Grouping by specific fields  
- 🎛 Custom row actions  
- 💡 Custom views (grid or column/card layout)  
- 🔁 Integrated with `URLSearchParams` for filter/pagination state

---

## 📦 Import

```
import { SoftEdgeTable } from "softedge-ui";
```

### 📋 Example Data
```
const exampleData = [
    {
      "id": 1,
      "name": "Stephen Carter",
      "email": "emma19@santiago.com",
      "phone": "743-852-2822x59420",
      "department": "Sales",
      "job_title": "Sales Executive",
      "hire_date": "2015-08-14",
      "salary": 102533.89
    },
    {
      "id": 2,
      "name": "Christopher Martin",
      "email": "staciemccarty@henry.biz",
      "phone": "1615981245",
      "department": "Human Resources",
      "job_title": "HR Assistant",
      "hire_date": "2023-08-24",
      "salary": 108000.54
    },
    {
      "id": 3,
      "name": "Diana Wagner",
      "email": "joanna72@hotmail.com",
      "phone": "(936)225-8264",
      "department": "Sales",
      "job_title": "Sales Associate",
      "hire_date": "2018-09-05",
      "salary": 39261.22
    },
]
```

```
<SoftEdgeTable
  data={data}
  columns={columns}
  filterKeys={{ category: { multipleSelection: true } }}
  groupByKey={[{ key: 'category', label: 'Category' }]}
  pageSize={15}
  height="h-[calc(100vh-200px)]"
  backgroundColor="bg-slate-50"
  highlightColor="group-hover:bg-white"
  searchParams={searchParams}
  setSearchParams={setSearchParams}
  renderRowActions={(row) => <div>Edit</div>}
  addNewButton={() => console.log('Add new')}
  addNewButtonTitle="New Record"
  view="grid"
  renderColumnView={(data) => <CardView data={data} />}
/>
```

## 🔧 Props Overview

| Prop                | Type                                              | Required | Description |
|---------------------|---------------------------------------------------|----------|-------------|
| `data`              | `any[]`                                           | ❌       | Array of data objects to display in the table. |
| `columns`           | `Column[]`                                        | ✅       | Array defining each column. Includes keys such as `label`, `key`, `width`, `default`, and optional `render` for custom cell rendering. |
| `service`           | `() => Promise<any[]>`                            | ✅ (or `data`) | Async function to fetch data for the table. Used when you want to fetch data dynamically instead of passing it directly. |
| `filterKeys`        | `Record<string, FilterConfig>`                    | ❌       | Object that defines filter behavior per field. Use `multipleSelection: true` to allow multi-select filtering. |
| `groupByKey`        | `GroupBy[]`                                       | ❌       | Allows grouping the table by a specific key. Each item should have `key` and `label`. |
| `pageSize`          | `number`                                          | ❌       | Number of rows per page. Helps with pagination. |
| `height`            | `string`                                          | ❌       | Tailwind-compatible height class for the scrollable table area. Example: `h-[calc(100vh-200px)]`. |
| `backgroundColor`   | `string`                                          | ❌       | Tailwind background utility class for the table body. |
| `highlightColor`    | `string`                                          | ❌       | Tailwind class for hover effect on rows. |
| `searchParams`      | `URLSearchParams`                                 | ❌       | From `useSearchParams` in `react-router-dom` (Remix/Next). Keeps pagination & filter state in the URL. |
| `setSearchParams`   | `(params: URLSearchParams) => void`               | ❌       | Function to update the URL search parameters, paired with `searchParams`. |
| `renderRowActions`  | `(row: any) => React.ReactNode`                   | ❌       | Custom action buttons or UI rendered at the end of each row. Can return JSX. |
| `view`              | `'grid' \| 'column'`                              | ❌       | Defines table layout style. Use `'grid'` for table view or `'column'` for card-based layout. |
| `renderColumnView`  | `(data: any[]) => React.ReactNode`                | ❌       | Custom renderer function for card/column layout view. Required if `view='column'`. |

---

## 🧾 Props Example Explanation

### `columns`

Defines how each column looks and behaves. Example:

```ts
[
  { key: 'id', label: 'ID', width: '50px' },
  { key: 'name', label: 'Full Name', width: '250px', default: true },
  { key: 'salary', label: 'Salary', width: '150px', render: (row) => <p>{...}</p> },
]
```

- key: property name in the data object
- label: column header text
- width: optional width
- default: (optional) determines if the column is shown by default
- render: custom function to render a cell

### `filterKeys`

Use this to enable dropdown filters for specific columns.
```
filterKeys={{
  department: { multipleSelection: true },
  job_title: { multipleSelection: true },
  hire_date: { multipleSelection: false },
}}
```

### `groupByKey`

Define keys that users can group the data by.
```
groupByKey={[
  { key: 'department', label: 'Department' },
]}
```

### `renderRowActions`
You can render anything (buttons, dropdowns, text) in this callback:
```
renderRowActions={(row) => (
  <>
    <div className="text-sm text-gray-500">Action 1</div>
    <div className="text-sm text-gray-500">Action 2</div>
  </>
)}
```

### `renderColumnView`

This prop allows rendering a custom UI when using `view="column"` mode:

```
<SoftEdgeTable
  view="column"
  renderColumnView={(data) => (
    <div className="flex flex-col gap-4 p-4">
      {data.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  )}
/>
```