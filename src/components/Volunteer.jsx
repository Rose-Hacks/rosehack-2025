"use client";

import React, { useState } from "react";
import Select from "@/components/Select";
import { Majors, Grades, Genders, Shirts } from "../data/Register";
import Radio from "@/components/Radio";
import Checkbox from "./Checkbox";
import Input from "./Input";
import { Row, Col } from "react-bootstrap";
import Button from "./Button";
import { Helper } from "../data/User";
import Tag from "./Tag";

const Register = () => {
  const [volunteer, setVolunteer] = useState(Helper);

  const [requirements, setRequirements] = useState({
    photography: {
      state: false,
      text: "I agree to photograph.",
    },
    inPerson: {
      state: false,
      text: "I understand that I will attend the event in person.",
    },
  });

  const handleSubmit = () => {
    console.log(volunteer);
    console.log(requirements);
  };

  const handleRequirementsCheckbox = (key, value) => {
    setRequirements({
      ...requirements,
      [key]: { state: !value.state, text: value.text },
    });
  };

  return (
    <div className="w-full flex flex-col items-center font-poppins py-4">
      <div className="text-xl bg-hackathon-green-300 w-1/3 rounded-t-xl flex items-center justify-center p-3 font-semibold">
        VOLUNTEER APPLICATION
      </div>
      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={12}>
            Hello! Rose Hack is coming January 14-15, 2023. Thank you for your
            interest in Rose Hack, UC Riverside’s women-centric hackathon
            founded by the female leaders of SWE and WINC!Volunteers are
            essential to our hackathon in helping run the entire event.
            Responsibilities include helping set up, tech support, clean up,
            distributing swag, etc. Meals are also provided during breakfast,
            lunch, and dinner times. If you are interested in joining the Rose
            Hack Team as a volunteer, please fill out this quick interest form
            below!
            <br />
            <br />
            We also want to note that if you are volunteering at Rose Hack, you
            are unable to participate as a hacker as well. If you have any other
            questions please feel free to contact us on our socials or email us
            at rosehackucr@gmail.com! :)
          </Col>
          <Col xl={6}>
            <Input
              name="first"
              type="text"
              title="First Name"
              placeholder="John"
              value={volunteer.first}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="last"
              type="text"
              title="Last Name"
              placeholder="Doe"
              value={volunteer.last}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="phone"
              type="phone"
              title="Phone Number"
              placeholder="123 456 7890"
              value={volunteer.phone}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="Email Address"
              placeholder="john_doe@gmail.com"
              value={volunteer.email}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Major"
              options={Majors}
              field="major"
              user={volunteer}
              setUser={setVolunteer}
              placeholder="Computer Science"
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Grade"
              options={Grades}
              field="grade"
              user={volunteer}
              setUser={setVolunteer}
              placeholder="Undergraduate"
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Gender"
              options={Genders}
              field="gender"
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={Shirts}
              field="shirt"
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            {Object.entries(requirements).map(([key, value], index) => (
              <Checkbox
                className="w-1/2"
                key={index}
                toggle={value.state}
                text={value.text}
                onClick={() => handleRequirementsCheckbox(key, value)}
                color="bg-hackathon-green-300"
              />
            ))}
          </Col>
          <Col xl={12} className="flex justify-center">
            <Button text="Submit" onClick={handleSubmit} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
const Volunteer = ({
  uid,
  name,
  email,
  discord,
  status,
  selected,
  setFilteredVolunteers,
  filteredVolunteers,
}) => {
  const handleSelect = () => {
    if (!selected) {
      setFilteredVolunteers(
        filteredVolunteers.map((a) => {
          if (a.uid === uid) {
            a.selected = true;
          }
          return a;
        })
      );
    } else {
      setFilteredVolunteers(
        filteredVolunteers.map((a) => {
          if (a.uid === uid) {
            a.selected = false;
          }
          return a;
        })
      );
    }
  };

  return (
    <div
      className={
        " py-2 first:border-0 border-t-[1px] border-hackathon-gray flex items-center w-full focus:!ring-0 focus:!bg-hackathon-green-100 " +
        (selected ? "!bg-green-100" : "!bg-transparent")
      }
    >
      <div className="w-[7%] flex justify-center items-center">
        <Checkbox onClick={handleSelect} toggle={selected} />
      </div>
      <div className=" font-semibold text-xs md:text-sm w-1/4">{name}</div>
      <div className="text-xs md:text-sm w-1/4">{email}</div>
      <div className="text-xs md:text-sm w-1/4">{discord}</div>
      <div className="text-lg mr-4">
        <Tag
          color={
            status === "onsite"
              ? "purple"
              : status === "online"
              ? "green"
              : "gray"
          }
          text={status}
          withHover={false}
        />
      </div>
    </div>
  );
};

export { Volunteer, Register };
