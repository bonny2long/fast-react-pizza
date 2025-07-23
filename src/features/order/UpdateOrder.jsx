/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import React from "react";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ req, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
