import React from "react";
import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import "../Pages/home/home.css"
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
const Program = () => {
    return (
        <section className="program">
            <div className="container program_container">
                <SectionHead icon={<FaCrown />} title="Programs" />

            <div className="praogram_wrapper">
                {programs.map(({id,icon,title,info,path}) => {
                    return <Card className="program_program" key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                    </Card>
                })}
                </div>
            </div>
        </section>
    );
};

export default Program;
