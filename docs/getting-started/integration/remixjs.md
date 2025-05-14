# ⚡ RemixJS

SoftEdge UI works seamlessly with [Remix](https://remix.run) using native web features and React. You can use it with `useSearchParams()` to enable URL-based filtering and pagination.

## 1. 🔗 GitHub Example

1.1 👉 Check out the full RemixJS example here:  
[🔗 SoftEdge UI Remix Example (GitHub)](https://github.com/softedge-core/softedge-ui-remix-example)

## 2. 🛠 Recommended Setup

2.1 **Install dependencies**

```bash
npm install softedge-ui
```

2.2 **Import SoftEdge UI styles**  
Add the following import in your root file (e.g., `root.tsx` or `entry.client.tsx`) to load global component styles:

```ts
import 'softedge-ui/style';
```

2.3 **Use `useSearchParams` from `@remix-run/react`**

```tsx
import { useSearchParams } from '@remix-run/react';
import { SoftEdgeTable } from 'softedge-ui';

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SoftEdgeTable
      data={exampleData}
      columns={[...]}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />
  );
}
```

2.4. To persist filters and page state across reloads, use Remix loaders and inject URL params into the SoftEdgeTable.