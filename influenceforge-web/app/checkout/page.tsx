import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading checkout...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
