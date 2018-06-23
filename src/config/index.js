const config = {
  job_category: [
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Program Development', label: 'Program Development' },
    { value: 'Project Manager', label: 'Project Manager' },
    { value: 'Graphics Designer', label: 'Graphics Designer' }
  ],
  job_location_country: [
    { value: 'US', label: 'US' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Germany', label: 'Germany' }
  ],
  job_location_state: [
    { value: 'CA', label: 'California' },
    { value: 'TX', label: 'Texas' },
    { value: 'MD', label: 'Maryland' },
    { value: 'VA', label: 'Virginia' }
  ],
  experience: [
    { value: 'Entry Level', label: 'Entry Level' },
    { value: 'Mid Level', label: 'Mid Level' },
    { value: 'Mid-Senior Level', label: 'Mid-Senior Level' },
    { value: 'Top Level', label: 'Top Level' }
  ],
  jobCategoryOptions : [
   'Job Category',
   'Customer Service',
   'Software Engineer',
   'Program Development',
   'Project Manager',
   'Graphics Designer'
 ],
 jobLocationOptions : [
  'Location 1',
  'Location 2',
  'Location 3'
  ],
  applyModal: false,
  applyToJob: false,
  toJobList: false,
  job: {},
  selectedJobCategory : "Job Category",
  selectedJobLocation : "Job Location",
  keyword : "",
  postedDays : ""
}
export default config;
