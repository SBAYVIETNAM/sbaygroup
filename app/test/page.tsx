import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

// This pattern works:
// You can pass a Server Component as a child or prop of a
// Client Component.
import ExampleClientComponent from './example-client-component'
import ExampleServerComponent from './example-server-component'
 
// Pages in Next.js are Server Components by default
export default function Page() {

  return (
    <ExampleClientComponent>
      <ExampleServerComponent />
    </ExampleClientComponent>
  )
}