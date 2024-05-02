import { FilterCriteria, JobListing } from "../types/types";

export const filterJobs = (
    jobs: JobListing[],
    filters: FilterCriteria
  ): JobListing[] => {
    return jobs.filter((job) => {
      // Filter by minimum experience
      if (
        filters.experience > 0 &&
        (job.minExp === null || job.minExp < filters.experience)
      ) {
        return false;
      }

      // Filter by company name
      if (
        filters.companyName &&
        !job.jobDetailsFromCompany
          .toLowerCase()
          .includes(filters.companyName.toLowerCase())
      ) {
        return false;
      }

      // Filter by location
      if (
        filters.location &&
        !job.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      // Filter by remote/on-site
      if (filters.remoteOrOnsite.length > 0) {
        const isRemote = job.location.toLowerCase().includes("remote");
        const isOnsite = !isRemote;
        if (
          (isRemote && !filters.remoteOrOnsite.includes("remote")) ||
          (isOnsite && !filters.remoteOrOnsite.includes("onsite"))
        ) {
          return false;
        }
      }

      // Filter by tech stack
      if (
        filters.techStack.length > 0 &&
        !filters.techStack.some((tech) =>
          job.jobDetailsFromCompany.toLowerCase().includes(tech.toLowerCase())
        )
      ) {
        return false;
      }

      // Filter by role
      if (
        filters.role.length > 0 &&
        !filters.role.some((role) =>
          job.jobRole.toLowerCase().includes(role.toLowerCase())
        )
      ) {
        return false;
      }

      // Filter by minimum base pay
      if (
        filters.minBasePay &&
        job.minJdSalary !== null &&
        job.minJdSalary < parseFloat(filters.minBasePay)
      ) {
        return false;
      }

      return true;
    });
  };