import { FiltersNav } from "@/components/filters-nav/filters-nav";
import { JobsList } from "@/components/jobs-list/jobs-list";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box sx={{position: 'relative'}}>
      <FiltersNav />
      <JobsList />
    </Box>
  );
}
