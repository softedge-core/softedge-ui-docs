# ⚡ Next.js

SoftEdge UI also supports [Next.js](https://nextjs.org), giving you the flexibility to build fast, modern UIs with route-based filtering using `useSearchParams()` from the web API or client router.

## 1. 🔗 GitHub Example

1.1 👉 Check out the full Next.JS example here: 
[🔗 SoftEdge UI NextJs Example (GitHub)](https://github.com/softedge-core/softedge-ui-next-example.git)

## 2. 🛠 Recommended Setup

2.1 **Install dependencies**

```bash
npm install softedge-ui
```

2.2 **Import SoftEdge UI styles**  
Add the following import in your `_app.tsx` to apply global styles:

```ts
import 'softedge-ui/style';
```

2.3 **Use `useSearchParams` with `useRouter()`**

Next.js does not have a built-in `useSearchParams` like Remix. You can implement it using `useRouter`:

```tsx
'use client'
import { useRouter } from 'next/router';
import { SoftEdgeTable } from 'softedge-ui';
import { useSearchParams } from 'next/navigation'

export default function Page() {
 const searchParams = useSearchParams()

  return (
    <SoftEdgeTable
      data={exampleData}
      columns={[...]}
      searchParams={searchParams}
	  setSearchParams={(params) => {
		const newSearch = new URLSearchParams(params.toString())
		window.history.pushState(null, '', `?${newSearch.toString()}`)
	  }}
    />
  );
}
```

2.4 **Persist filters and pagination (optional)**  
Use query parameters from `router.query` to persist filter and pagination state across reloads or route changes.

- 2.4.1 Read parameters with `router.query`.
- 2.4.2 Set new parameters using `router.push()`.
