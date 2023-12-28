
import { IoLocation } from "react-icons/io5";
const Features = () => {
  return (
    <div className="my-36">
      <h1>Features that will make you comfortable </h1>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <p>
            <IoLocation />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Beachfront Location</h2>
            <p>Our hotel is situated right on the beach, offering stunning ocean views and immediate access to the sandy shores.</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
