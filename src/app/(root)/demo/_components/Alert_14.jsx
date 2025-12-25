import { useEffect } from "react";

const Alert_14 = ({ alert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // automatically hide the alert after 3 seconds
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (alert.type === "success") {
    return (
      <div className="alert alert-success">
        <p className="grid items-center text-center cpitalize text-green-700 bg-green-200">
          {alert.msg}
        </p>
      </div>
    );
  } else if (alert.type === "danger") {
    return (
      <div className="alert alert-danger bg-red-50">
        <p className="grid items-center text-center capitalize text-red-700 bg-red-200">
          {alert.msg}
        </p>
      </div>
    );
  } else if (alert.type === "warning") {
    return (
      <div className="alert alert-warning bg-amber-50">
        <p className="grid items-center text-center capitalize text-amber-700 bg-amber-200">
          {alert.msg}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default Alert_14;
