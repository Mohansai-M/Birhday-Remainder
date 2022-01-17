import './PersonCard.css'
import ym from './ym.png';
import yw from './yw.png';
import woman from './woman.png';
import man from './man.png';
import del from "./delete.png";
import { useState } from 'react/cjs/react.development';
function PersonCard(props)
{

   
const Persons = [
  {
    id: "e1",
    name: "John",
    gender: "Male",
    datey: new Date(1995, 7, 14),
  },
  { id: "e2", 
    name: "Rebecca",
    gender: "Female",
    datey: new Date(1990, 3, 1),
  },
  {
    id: "e3",
    name: "Sita",
    gender: "Female",
    datey: new Date(2000, 2, 9),
  },
  {
    id: "e4",
    name: "Sid",
    gender: "Male",
    datey: new Date(1987, 9, 23),
  },
];

const [person, setperson] = useState(Persons);

const DeleteHandler = (id) =>
{
    setperson((prevperson) => prevperson.filter((person) => person.id !== id));
}


return (
  <div className="Person_Card">
    {person.map((person) => (
      <div className="container-fluid  person-container">
        <div className="row">
          <div className="col">
            {new Date().getFullYear() - person.datey.getFullYear() < 30 ? (
              person.gender === "Male" ? (
                <img className="ProfilePhoto" src={ym} alt="youngman" />
              ) : (
                <img className="ProfilePhoto" src={yw} alt="youngwoman" />
              )
            ) : person.gender === "Male" ? (
              <img className="ProfilePhoto" src={man} alt="man" />
            ) : (
              <img className="ProfilePhoto" src={woman} alt="woman" />
            )}
          </div>
          <div className="col col-md-5" style={{ marginTop: "5%" }}>
            <div className="container-fluid details">
              <div className="row">
                <p className="Name-row" id={person.id}>
                  {person.name}
                </p>
              </div>
              <div className="row">
                <p className="Birth-row">
                  {person.datey.getDate().toString()}{" "}
                  {props.monthpass[person.datey.getMonth() - 1].toString()}{" "}
                  {person.datey.getFullYear().toString()}
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "8%" }}>
            <img
              className="DeletePhoto"
              src={del}
              alt="delete"
              onClick={() => DeleteHandler(person.id)}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

}

export default PersonCard