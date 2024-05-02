import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobListings } from "../services/apiService";
import { filterJobs } from "../services/filterJobs";
import { RootState } from "../store";
import { setJobs } from "../store/jobsSlice";
import { JobListing } from "../types/types";
import FilterComponent from "./Filters";
import JobCard from "./JobCard";

const JobSearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const [displayJobs, setDisplayJobs] = useState<JobListing[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(9);
  const [hasMorePages, setHasMorePages] = useState(true);

  const allJobs = useSelector((state: RootState) => state.jobs.allJobs);
  const filters = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        const { jdList, totalCount } = await fetchJobListings(pageSize, page);
        const filteredJobs = filterJobs(jdList, filters);

        if (page === 0) {
          setDisplayJobs(filteredJobs);
        } else {
          setDisplayJobs((prevJobs) => [...prevJobs, ...filteredJobs]);
        }

        dispatch(setJobs({ jobs: [...allJobs, ...jdList], totalCount }));

        setCurrentPage(page);
        setHasMorePages(totalCount > (page + 1) * pageSize);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchData(currentPage);
  }, [currentPage, pageSize, allJobs, filters, dispatch]);

  useEffect(() => {
    const filteredJobs = filterJobs(allJobs, filters);
    setDisplayJobs(filteredJobs);
    dispatch(setJobs({ jobs: filteredJobs, totalCount: filteredJobs.length }));
  }, [allJobs, filters, dispatch]);

  return (
    <Container>
      <Box sx={{ marginBlock: "20px" }}>
        <FilterComponent />
      </Box>
      <Box>
        <InfiniteScroll
          style={{ scrollbarWidth: "none" }}
          dataLength={displayJobs.length}
          next={() => setCurrentPage(currentPage + 1)}
          hasMore={hasMorePages}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              No more job listings to display.
            </p>
          }
        >
          <Grid
            container
            spacing={6}
            columnSpacing={6}
            style={{ margin: "0 auto" }}
          >
            {displayJobs.map((job) => (
              <Grid
                key={job.jdUid}
                xs={12}
                md={6}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBlock: "10px",
                }}
                style={{ maxWidth: "350px" }}
              >
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Box>
    </Container>
  );
};

export default JobSearchPage;
