import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { companies } from "../lib/constants";
import { JobListing } from "../types/types";

interface JobCardProps {
  job: JobListing;
}

const getRandomCompany = () => {
  return companies[Math.floor(Math.random() * companies.length)];
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const {
    jdUid,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    jdLink,
  } = job;

  const companyName = getRandomCompany();

  return (
    <Box>
      <Card key={jdUid}>
        <CardContent>
          <Typography variant="h5">{jobRole}</Typography>
          <Typography variant="h5">{companyName}</Typography>
          <Typography variant="subtitle1">{location}</Typography>
          <Typography variant="body2">{jobDetailsFromCompany}</Typography>
          <Typography variant="body2">
            Salary: {`${minJdSalary ? minJdSalary : "N/A"}k`} -{" "}
            {`${maxJdSalary}k`} {salaryCurrencyCode}
          </Typography>
          <Typography variant="body2">
            Experience: {minExp ? minExp : "N/A"} - {maxExp ? maxExp : "N/A"}{" "}
            years
          </Typography>
          <Button variant="contained" color="primary" href={jdLink}>
            Apply
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobCard;
