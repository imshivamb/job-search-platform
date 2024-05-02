import React, { useEffect, useState } from "react";
import { fetchJobListings } from "../api/apiService";
import { useDispatch } from "react-redux";
import { JobListing } from "../types/types";
import JobCard from "./JobCard";
import { setJobs } from "../store/jobsSlice";

const JobSearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const [displayJobs, setDisplayJobs] = useState<JobListing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { jdList, totalCount } = await fetchJobListings(10, 0);
        setDisplayJobs(jdList);
        dispatch(setJobs({ jobs: jdList, totalCount }));
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {displayJobs.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default JobSearchPage;
