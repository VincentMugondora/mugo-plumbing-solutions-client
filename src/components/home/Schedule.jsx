import { RiSendPlaneFill } from "react-icons/ri";

const Schedule = () => {
  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg mx-auto">
      <h2 className="text-4xl poppins-semibold text-white text-center mb-2">
        Schedule A Service
      </h2>
      <p className="text-white poppins-regular text-center mb-6">
        FILL OUT THE FORM BELOW
      </p>

      <form className="row">
        {/* Name Input */}
        <div className="col-md-5 mb-3">
          <input type="text" placeholder="Name*" className="form-control" />
          <input
            type="email"
            placeholder="Email*"
            className="form-control mt-3"
          />
        </div>

        {/* Phone Input */}
        <div className="col-md-5 mb-3">
          <input type="tel" placeholder="Phone*" className="form-control" />
          <select className="form-control mt-3" defaultValue="">
            <option value="" disabled>
              Select Service*
            </option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="heating">Heating</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-md-2">
          <button
            type="submit"
            className="flex flex-col items-center text-white justify-center rounded bg-[#00C6B1] h-10 lg:h-[5.6rem] px-4"
          >
            <RiSendPlaneFill />
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Schedule;
