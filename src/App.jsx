import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointments";
import AppointmentInfo from "./components/AppointmentInfo";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then(setAppointmentList);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container mx-auto mt-5 font-thin">
      <h1 className="text-5xl mb-5">
        {" "}
        <BiCalendar className="inline-block text-red-400 align-top" /> Your
        Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList.map((appointment) => (
          <AppointmentInfo
            key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={(appointmentId) =>
              setAppointmentList(
                appointmentList.filter(
                  (appointment) => appointment.id !== appointmentId
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
