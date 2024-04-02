import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Job from "./Job";
import Spinner from "../components/Spinner";

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const API = isHome ? "api/jobs?_limit=3" : "api/jobs";
            try {
                const res = await fetch(API);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log("Error fetching jobs", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <Job key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

JobListings.propTypes = {
    isHome: PropTypes.bool,
};

export default JobListings;
