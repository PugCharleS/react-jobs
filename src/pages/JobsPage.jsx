import jobs from "../jobs.json";
import JobListings from "../components/JobListings";

const JobsPage = () => {
    return <JobListings jobs={jobs} />;
};

export default JobsPage;
