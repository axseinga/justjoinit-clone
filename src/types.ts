export interface Salary {
    isUndisclosed: boolean;
    from: number;
    to: number;
    currency: string;
  }
  
  export interface TechStack {
    techLabel: string;
    level: number;
  }
  
  export interface JobDetails {
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    locations: string[];
    salary: Salary;
    datePosted: string;
    category: string;
    typeOfWork: string;
    experience: string;
    employmentType: string;
    operatingMode: string;
    onlineInterview: boolean;
    friendlyOffer: boolean;
    techStack: TechStack[];
    jobDescription: string;
  }