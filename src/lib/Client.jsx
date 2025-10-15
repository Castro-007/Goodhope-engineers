import React from 'react'
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vf8trktc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-09-13",
});

export default client