import { Button, Card, CardContent, Typography } from "@mui/material";
import { JobListing } from "../types/types";

interface JobCardProps {
  job: JobListing;
}

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

  return (
    <Card key={jdUid}>
      <CardContent>
        <Typography variant="h5">{jobRole}</Typography>
        <Typography variant="subtitle1">{location}</Typography>
        <Typography variant="body2">{jobDetailsFromCompany}</Typography>
        <Typography variant="body2">
          Salary: {minJdSalary ? minJdSalary : "N/A"} - {maxJdSalary}{" "}
          {salaryCurrencyCode}
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
  );
};

export default JobCard;
