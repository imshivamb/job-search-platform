export interface JobListing {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
}

  export interface FilterCriteria {
    experience: number;
    companyName: string;
    location: string;
    remoteOrOnsite: string[];
    techStack: string[];
    role: string[];
    minBasePay: string;
  }