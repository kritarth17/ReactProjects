import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        className="block bg-black text-white text-center px-6 py-4 rounded-xl hover:bg-blue-600"
        to="/jobs"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
