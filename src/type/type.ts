export interface IJob {
    title: string;
    location: string;
    company: string;
    employment_type: string;
    created_at: string;
    id: string;
    description: string;
    qualifications: string;
    salary_from: number;
    salary_to: number;
    number_of_opening: number;
  }

export interface IApplied {
    jobs: IJob[];
    myJobs: string[];
    page: number;
    rowsPerPage: number;
  }

export interface IApply {
  jobs: IJob[];
  page: number;
  rowsPerPage: number;
}

export interface IFilterDropdown {
  onFilterChange: (filters: { location: string[]; category: string[] }) => void;
}

export interface IFormLabel {
  label: string;
}

export interface IFormHeading {
  heading: string;
}

export interface IFilter {
  category: string[];
  location: string[];
  onFilterChange: (filters: { location: string[]; category: string[] }) => void;
}

export interface ISearch {
  onFilterChange: (filters: { location: string; category: string }) => void;
}

export interface IErrors {
  firstname: string;
  lastname: string;
  title: string;
  languages: string;
  current: string;
  expected: string;
  message: string;
  mobile: string;
  email: string;
  country: string;
  state: string;
  pincode: string;
  street: string;
  degree: string;
  university: string;
  grade: string;
  year: string;
  designation: string;
  employment: string;
  company: string;
  location: string;
  skill1: string;
  skill2: string;
}

export interface IProfileDisplay {
  display(): void;
  data: IErrors;
}

export interface IUserId {
  id: string;
  userEmail: string;
}

export interface IUserDetail {
  username: string;
  email: string;
  password: string;
}

export interface IInputData {
  target: {
    name: string;
    value: string;
  };
}

export interface IAppliedJobs {
  jobs: IUserId[];
}

export interface IFilters {
  cats: string[];
  loc: string[];
}

export interface IExistingUserState {
  existingUser: IUserDetail[];
  existingProfile: IErrors[];
  currentUser: string;
  currentEmail: string;
}