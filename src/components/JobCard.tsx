import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { companies } from "../lib/constants";
import { JobListing } from "../types/types";
import { useState } from "react";

interface JobCardProps {
  job: JobListing;
}

const getRandomCompany = () => {
  return companies[Math.floor(Math.random() * companies.length)];
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [showFullText, setShowFullText] = useState(false);
  const fixedLines = 5;
  const {
    jdUid,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    jobRole,
    jdLink,
  } = job;

  const handleReadMoreClick = () => {
    setShowFullText(true);
  };
  const companyName = getRandomCompany();

  return (
    <Box>
      <Card
        key={jdUid}
        sx={{ textAlign: "start", borderRadius: "20px", maxWidth: "300px" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "14px",
              opacity: "90%",
            }}
          >
            {companyName}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "13px",
              opacity: "100%",
            }}
          >
            {jobRole}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "Lexend, sans-serif", fontSize: "11px" }}
          >
            {location}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "14px",
              marginTop: "10px",
              opacity: "90%",
            }}
          >
            Extimated Salary: {`${minJdSalary ? minJdSalary : "N/A"}k`} -{" "}
            {`${maxJdSalary}k`} {salaryCurrencyCode}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "17px",
              marginTop: "10px",
              fontWeight: "500",
            }}
          >
            About Company:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "14px",
              opacity: "87%",
              whiteSpace: "pre-wrap",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: fixedLines,
              WebkitBoxOrient: "vertical",
            }}
          >
            {jobDetailsFromCompany}
            {!showFullText && (
              <span
                onClick={handleReadMoreClick}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Read more
              </span>
            )}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "13px",
              opacity: "87%",
              marginTop: "10px",
              fontWeight: 500,
              whiteSpace: "pre-wrap",
            }}
          >
            Minimum Experience:
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Lexend, sans-serif" }}>
            {minExp ? minExp : "N/A"} years
          </Typography>
          <Button
            variant="contained"
            href={jdLink}
            sx={{
              fontFamily: "Lexend, sans-serif",
              backgroundColor: "rgb(85, 239, 196);",
              width: "100%",
              marginTop: "12px",
              "&:hover": {
                backgroundColor: "rgb(52, 194, 153)",
              },
            }}
          >
            Easy Apply
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobCard;
